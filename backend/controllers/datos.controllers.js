import Dna from "../models/Dna";
import Stats from "../models/Stats";

/**
 * @fileoverview Recorre la matriz del arreglo que mandamos si es un mutante o es un humano
 * 
 * @param {Array} isMutant arreglo con longitud n, en el cual puede contener solo las letras ATCG
 * 
 * @code 
 *      #1: Se verifica si existe mas de 4 columnas a la derecha y su verificacion es horizontal
 *      #2: Se verifica si existe mas de 4 filas a la derecha y su verificacion es horizontal
 *      #3: Se verifica si existe mas de 4 columnas a la izquierda y su verificacion es diagonal izquierda hacia abajo
 *      #4: Se verifica si existe mas de 4 columnas a la derecha y su verificacion es diagonal derecha hacia abajo
 *      #5: Se verifica si encontro mas de una secuencia al recorrer cada columna y filas, y su verificacion true: es mutante
 * 
 * @returns {boolean} false or true
 */
const isMutant = async (dna) => {
  let secuence = 0;

  for (let i = 0; i < dna.length; i++) {
    for (let j = 0; j < dna[i].length; j++) {
      // #1
        if (j <= dna.length - 4) {
            if (dna[i][j] === dna[i][j + 1] && dna[i][j + 1] === dna[i][j + 2] && dna[i][j + 2] === dna[i][j + 3]) {
                secuence++;
            }
        }

        // #2
        if (i <= dna.length - 4) {
            if (dna[i][j] === dna[i + 1][j] && dna[i + 1][j] === dna[i + 2][j] && dna[i + 2][j] === dna[i + 3][j]) {
                secuence++;
            }

            // #3
            if (j >= 3) {
                if (dna[i][j] === dna[i + 1][j - 1] && dna[i + 1][j - 1] === dna[i + 2][j - 2] && dna[i + 2][j - 2] === dna[i + 3][j - 3]) {
                    secuence++;
                }
            }

            // #4
            if (j <= dna.length - 4) {
                if (dna[i][j] === dna[i + 1][j + 1] && dna[i + 1][j + 1] === dna[i + 2][j + 2] && dna[i + 2][j + 2] === dna[i + 3][j + 3]) {
                    secuence++;
                }
            }
        }
        // #5
        if (secuence > 1) return true;
    }
  }
  return false;
};

/**
 * @fileoverview Datos que recopilamos y recibimos por medio de parametros de metodo POST
 * 
 * @param {*} createDatos recibimos la data por medio de req que trae el body para evaluar el adn
 * 
 * @code 
 *      #1: Se verifica si existe mas de 4 columnas a la derecha y su verificacion es horizontal
 *      #2: Se verifica si existe mas de 4 filas a la derecha y su verificacion es horizontal
 *      #3: Se verifica si existe mas de 4 columnas a la izquierda y su verificacion es diagonal izquierda hacia abajo
 *      #4: Se verifica si existe mas de 4 columnas a la derecha y su verificacion es diagonal derecha hacia abajo
 *      #5: Se verifica si encontro mas de una secuencia al recorrer cada columna y filas, y su verificacion true: es mutante
 * 
 * @returns {boolean} false or true
 */

export const createDatos = async (req, res) => {
  try {
    const { dna } = req.body;
    console.log(dna);
    // creating register of adn or dna
    let exist = await Dna.findOne({dna:dna})
    if (exist) {
      if(JSON.stringify(exist.dna) === JSON.stringify(dna)){
        return res.status(400).json({message: `El registro de adn ingresado ya se encuentra en nuestra base de datos y su resultado es el siguiente dna: [${exist.dna}], y su tipo es: ${((exist.mutant === true)?'mutant':'human')} `});
  
      }else {
        const datos = new Dna({
          dna: dna,
          mutant: await isMutant(dna)
        });
        // saving the new Data
        const savedDatos = await datos.save();
        ((savedDatos.mutant === true) ? await Stats.findOneAndUpdate({ type: 'mutant' },{ $inc: { count: 1 } }, {upsert: true}): await Stats.findOneAndUpdate({ type: 'human' },{ $inc: { count: 1 } }, {upsert: true}))
        const verify = (savedDatos.mutant === true) ? 200: 403
        return res.status(verify).json({ message: `El resultado final del analisis, su tipo es: ${savedDatos.mutant?'mutant':'human'} y su secuencia ADN es: [${savedDatos.dna}] code: ${verify===200?`${verify}-OK`:`${verify}-Forbidden`}` });
  
      }
    }else {
      const datos = new Dna({
        dna: dna,
        mutant: await isMutant(dna)
      });
      // saving the new Data
      const savedDatos = await datos.save();
      ((savedDatos.mutant === true) ? await Stats.findOneAndUpdate({ type: 'mutant' },{ $inc: { count: 1 } }, {upsert: true}): await Stats.findOneAndUpdate({ type: 'human' },{ $inc: { count: 1 } }, {upsert: true}))
      const verify = (savedDatos.mutant === true) ? 200: 403
      return res.status(verify).json({ message: `El resultado final del analisis, su tipo es: ${savedDatos.mutant?'mutant':'human'} y su secuencia ADN es: [${savedDatos.dna}] code: ${verify}` });

    }
    
  } catch (error) {
    console.log(error);
  }
};

export const getDna = async (req, res) => {
    try {
      const dataList = await Dna.find({})
      if (!dataList) throw new Error('No se encontro ningun registro')
      return res.status(200).json(dataList);
    } catch (error) {
      console.log({error});
      return res.status(500).json({errorMessage: error.message})
    }
};

export const getStats = async (req, res) => {
    try {
        await Stats.find({}, (err, dataList) => {
            if(dataList.length){
                let human = 0
                let mutant = 0
                
                dataList.forEach(element => {
                    ((element.type === 'mutant')?mutant = element.count:human = element.count)
                });
                let ratio = ((human > 0)?(mutant/human):0)
                return res.status(200).json({count_mutant_dna:mutant, count_human_dna:human, ratio: ratio});
            }
            return res.status(400).json(dataList);
        });
    } catch (error) {
        console.log(error);
    }
  };
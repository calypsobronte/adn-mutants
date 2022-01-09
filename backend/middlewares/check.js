/*
** Validacion por lo que entra en el body {dna: ['A,T,C,G']}
*/
export const checkAdn = (req, res, next) => {
    try {
        const { dna } = req.body

        // validacion si esta vacio
        if (!dna)
          return res.status(400).json({ message: "el registro ingresado esta vacio" });
        
        // validacion tamaño
        const lengthDna = dna.filter(elemt => {
            return elemt.length > dna.length || elemt.length < dna.length
        })

        if (lengthDna.length > 0)
            return res.status(400).json({ message: "El registro ingresado no contiene el tamaño correspondiente" });
        
        // Validacion de letras regex
        const arrayEmperejamiento = dna.filter(ele=>{
            return ele.match(/^[ATGC]*$/)
        })
        
        // Validacion si no tiene la secuencia correcta
        if (arrayEmperejamiento.legth > 0)
            return res.status(400).json({ message: "El registro ingresado no tienen la secuencia correcta" + arrayEmperejamiento }); 
        next();

    } catch (error) {
    res.status(500).json({ message: error });
    }
};

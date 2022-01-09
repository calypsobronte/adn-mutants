## ADN mutante

### Link de la aplicacion
<https://adn-mutants.herokuapp.com/api/index>

### Prerequisitos

```
NodeJs = v12.22.5
Mongodb Cloud Atlas = v4.4.10
```

## Proyecto
Detector de mutantes, basandose en la secuencia de ADN que se extrae de humanos.

<br>

### Backend *(nodejs, morgan, express, mongoose, nodemon, ES6+)*
Para el backend utilice la tecnologia de nodejs con Express ya que es rapido y flexible con nodejs para la creacion de APIs.

ir a la carpeta backend [aqui](./backend)

### Instalación para correr en local

* Clona el repositorio por medio de git
    ```bash
    $ git clone https://github.com/calypsobronte/adn-mutants.git
    ```

1. Ingresar al directorio clonado `adn-mutante`

    ```bash
    $ cd adn-mutante
    ```

2. Ingresar a la carpeta donde se encuentra el funcionamiento de la API `adn-mutante/backend`
    ```bash
        ➜  adn-mutante cd backend
    ```

3. Instalar las dependencias para correr el server
    ```bash
    ➜ backend yarn install o npm install
    ```

4. Crear archivo `.env`, puedes crearlo con el ejemplo en el archivo `.env.example` añadir lo siguiente:
    ```bash
    MONGODB_URL="mongodb+srv://<user>:<password>@<host>/<name_database>"
    PORT=5000
    ```

5. Inicie el servidor en modo desarrollo o en modo produccion en modo local:
    ```bash
    # Modo produccion
    ➜  backend git:(master) ✗ yarn start o npm run start
    # o
    # Modo desarrollo
    ➜  backend git:(master) ✗ yarn dev o npm run dev
    ```
    Se vera de la siguiente forma modo dev
    ```bash
    ➜  backend git:(master) ✗ yarn dev
        yarn run v1.22.15
        $ nodemon  --experimental-modules serve.js --exec  babel-node
        [nodemon] 2.0.15
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `babel-node --experimental-modules serve.js`
        Server on port 5000
        DB is connected
    ```

6. Puede abrir postman o cualquier servicios donde puedas consumir esta api e ingresar los datos con la siguiente endpoint  `http://localhost:5000/api/index` para saber que si esta corriendo el servidor correctamente.

<br>
<br>

## Peticiones a la API
* Metodo HTTP: POST
  - Respuesta ADN mutante: 200-OK
  - Respuesta ADN no-mutante: 403-Forbidden
* Metodo HTTP: GET
  - Respuesta de estadistica verificacion ADN: {“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4}

### Rutas (endpoints) utilizadas por medio Localmente con Postman
|  Entrada   |     URL    |  Salida   |
| ---------- | ---------- | ---------- |
| GET   | `http://localhost:5000/api/index`   | {"Recopilacion de datos": "Bienvenidos a la plataforma."} |
| POST   | `http://localhost:5000/api/magneto/mutant`   | {"message":"El resultado final del analisis, su tipo es: human y su secuencia ADN es: [ATG,CAG,TTA] code: 403-Forbidden"} |
| GET   | `http://localhost:5000/api/magneto/stats`   | {"count_mutant_dna":0,"count_human_dna":1,"ratio":0} |
| GET   | `http://localhost:5000/api/magneto/all`   | [{"_id":"61d9ef04769a0d5114402036","dna":["ATG","CAG","TTA"],"mutant":false,"__v":0}] |

### Rutas (endpoints) utilizadas por medio Servicio Heroku con Postman
|  Entrada   |     URL    |  Salida   |
| ---------- | ---------- | ---------- |
| GET   | `https://adn-mutants.herokuapp.com/api/index`   | {"Recopilacion de datos": "Bienvenidos a la plataforma."} |
| POST   | `https://adn-mutants.herokuapp.com/api/magneto/mutant`   | {"message":"El resultado final del analisis, su tipo es: human y su secuencia ADN es: [ATG,CAG,TTA] code: 403-Forbidden"} |
| GET   | `https://adn-mutants.herokuapp.com/api/magneto/stats`   | {"count_mutant_dna":0,"count_human_dna":1,"ratio":0} |
| GET   | `https://adn-mutants.herokuapp.com/api/magneto/all`   | [{"_id":"61d9ef04769a0d5114402036","dna":["ATG","CAG","TTA"],"mutant":false,"__v":0}] |

> Mirar documentacion por medio de Postman ir a [aqui](https://documenter.getpostman.com/view/2984359/UVXdQKGm)

> Mirar documentacion de proyecto ir a [aqui](./backend/README.md)

> Mirar documentacion de test ir a [aqui](./backend/tests/README.md)

## Criterios de aceptacion
- [x] Programa (en cualquier lenguaje de programación) que cumpla con el método pedido por
Magneto.
- [x] Crear una API REST, hostear esa API en un cloud computing libre (Google App Engine,
Amazon AWS, etc), mediante un HTTP POST, GET
- [x] Código Fuente (Para Nivel 2 y 3: En repositorio github).
- [x] Instrucciones de cómo ejecutar el programa o la API. (Para Nivel 2 y 3: En README de
github).
- [x] URL de la API (Nivel 2 y 3).
- [x] Anexar una base de datos, la cual guarde los ADN’s verificados con la API.
- [x] Test-Automáticos, Code coverage

## Construido
### Herramientas Tecnológicas
- Backend
  * Nodejs
  * DB Mongo
  * Express
  * ES6+
- Test
  * Jest
  * Supertest
- Otras
  * Git
  * Heroku
  * Github
  * Postman
  * Mongodb Atlas

## Contribuyendo

Contribuya usando GitHub Flow. Cree una rama, agregue confirmaciones y abra una solicitud de extracción .

## Versionado
v1

## Autores
* **Lina María Montaño Ramírez** - *Full Stack Developer* - [@calypsobronte](https://github.com/calypsobronte)


## Licencia
MIT License 

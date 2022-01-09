# Documentacion API (Backend)

## Reto ML
Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar contra los X-Men

## Problema
- Se necesita detectar si un humano es mutante basándose en su secuencia de ADN.
- En donde recibirá como parámetro un array de Strings que representan cada fila de una tabla de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representa cada base nitrogenada del ADN.
- Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras iguales​, de forma oblicua, horizontal o vertical.
- Ejemplo String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"}; En este caso la secuencia de adn nos muestra que este humano es mutante.

## Eplicacion del proyecto
- El código comienza declarando una variable llamada isMutant.
- Esta variable se utilizará para almacenar el resultado de una sentencia if que comprueba si el array introducido contiene o no sólo letras ATCG.
- Si lo hace, entonces el código ejecuta #1 e imprime "Se verifica si existe más de 4 columnas a la derecha y su verificación es horizontal".
- Si no lo hace, el código ejecuta #2 e imprime "Se verifica si existe más de 4 filas a la derecha y su verificación es horizontal."

- #1: Se verifica si existe más de 4 columnas a la derecha y su verificación es horizontal

- La primera parte de esta línea comienza con if (isMutant[0] === 'A') { } lo que significa que si isMutant tiene cualquier valor distinto de A, entonces ejecuta lo que hay dentro de {}.
- La siguiente parte de esta línea comienza con else { } que significa que si isMutant tiene cualquier valor distinto de A, no se ejecuta lo que hay dentro de {}.
- Luego hay dos partes más en esta línea: una dice print("Se verá que no hay- El código comprobará si el array tiene más de 4 columnas y filas.
- Si lo tiene, el código devolverá true.

- El código comprobará si la matriz tiene más de 4 columnas y filas.
- El código empieza por comprobar si hay más de 4 columnas a la izquierda y luego comprueba si es diagonal.
- Si es así, comprobará si hay más de 4 columnas a la derecha y hará lo mismo.
- También comprobará si existe una secuencia en cada columna o fila que no se encuentre en ninguna otra parte.

- El código comienza comprobando si hay más de 4 columnas a la izquierda y luego comprueba si es diagonal.
- Si es así, comprobará si hay más de 4 columnas a la derecha y hará lo mismo.
- También comprobará si existe una secuencia en cada columna o fila que no se encuentre en ningún otro lugar.El código es una función que devolverá true si la secuencia de ADN es mutante.

- La primera línea de código en el fragmento anterior declara una variable llamada adn, que se utilizará para almacenar la secuencia de ADN.

- La segunda línea de código en el fragmento de arriba utiliza async y una función de flecha para crear una función que devuelve verdadero o falso basado en si hay o no más de cuatro columnas a cada lado de la secuencia de ADN.- El código comienza declarando una variable llamada "secuence" con el valor de 0.
- El código entonces itera a través de cada letra en la cadena, y comprueba si es igual a sí mismo más una letra más.
- Si es así, secuence se incrementa en 1.

- La siguiente parte del código comprueba si j es mayor que 3 (la longitud de adn).
- Si es así, comprueba si adn[i][j] es igual a adn[i + 1][j - 1], lo que significa que hay dos letras de diferencia entre ellas.
- También comprueba si hay tres o cuatro letras entre ellos, lo que significa que están a tres o cuatro letras de distancia, respectivamente.
- Si estas condiciones se cumplen, la secuencia se incrementa en 2 en cada iteración hasta que alcanza 5 veces su valor original, momento en el que devuelve false porque no se ha encontrado ninguna coincidencia después de cinco iteraciones.- El código es un bucle for que itera a través de la secuencia de ADN.

- La primera sentencia if comprueba si la posición actual en la secuencia de ADN es igual a dna[i][j] y luego la compara con dna[i][j + 1].
- Si son iguales, entonces se incrementa la secuencia++.

- La segunda sentencia if comprueba si la posición actual en la secuencia de ADN es igual a dna[i + 1][j] y luego la compara con dna[i + 2][j].
- Si son iguales, entonces se incrementa la secuencia++.

- La tercera sentencia if comprueba si la posición actual en la secuencia de ADN es igual a dna[i][- El código es una función que recibe dos parámetros: req y res.
- El primer parámetro es el objeto request, que contiene información sobre la petición HTTP enviada por el cliente.
- El segundo parámetro es un manejador de errores llamado res, que será utilizado para manejar cualquier error que ocurra durante el procesamiento de esta función.

- El código comienza comprobando si hay más de cuatro columnas a cada lado de la cadena DNA (línea 1).
- Si es así, comprueba si hay más de cuatro filas a cada lado de la cadena de ADN (línea 2).
- Si es así, comprueba si hay más de cuatro columnas a cada lado de la cadena de ADN (línea 3) y luego comprueba si hay secuencias diagonales a través de cada columna y fila (líneas 4-5).
- Finalmente, verifica si existe o no una secuencia dentro de cada columna y fila utilizando la recursividad con true como valor de retorno cuando se encuentra (líneas 6-7).- El código comprobará si hay más de 4 columnas a la derecha y en horizontal, más de 4 filas a la derecha y en horizontal, más de 4 columnas a la izquierda y en diagonal de izquierda a derecha, o más de una secuencia en cada columna y fila.

- El código anterior devolverá false si no encuentra ninguna de estas condiciones.- El código está tratando de encontrar un objeto de ADN que coincida con el ADN de la entrada.
- Si encuentra uno, entonces devolverá un mensaje con el resultado y el tipo del objeto Dna.

- El código está utilizando await para esperar a que termine una operación asíncrona antes de continuar con sus propias operaciones.
- Esto nos permite evitar el bloqueo de nuestro programa mientras esperamos que se complete algo como una consulta a la base de datos o una solicitud de red.- El código se utiliza para encontrar un adn específico en la base de datos.
- Si existe, el código devolverá el estado 400 con un mensaje de error que dice "El registro de adn ingresado ya se encuentra en nuestra base de datos y su resultado es el siguiente dna: [dna], y su tipo es: human."

- Si el adn no existe, se crea un nuevo objeto adn y su campo adn se establece con el valor introducido.
- El campo mutante también se establece como verdadero si es un mutante o falso si es humano.
- Esto permite la detección de mutaciones dentro de los datos de ADN.- El código comienza creando un nuevo objeto Data llamado savedDatos.
- A continuación, el código guarda el nuevo objeto Data en la colección de datos del servidor.
- A continuación, si el campo mutante es verdadero, encontrará uno y lo actualizará con una operación upsert.
- Si no, encontrará uno y lo actualizará con una operación de actualización ordinaria.

- A continuación, necesitamos verificar que esta mutación fue exitosa antes de continuar con nuestro programa.
- Así que comprobamos si hay una respuesta 200 o 403 de la llamada a la API de nuestro servidor para ver si esta mutación ha tenido éxito o no.

- La primera parte del código guarda los nuevos Datos, luego encuentra uno y lo actualiza con un upsert.- El código comienza importando la clase Adn.
- Se llama a la función getDna cuando llega una petición de ADN de un mutante o humano.

- Lo primero que ocurre es que se comprueba si hay algún mutante que encontrar y se guarda en un array llamado savedDatos.
- Si no hay mutantes, entonces se encuentra uno y se actualiza su cuenta con 1.

- Si no hay humanos, entonces se encontrará uno y se actualizará su cuenta con 1 también.

- Después de esto, creamos una nueva instancia de la clase Dna que tiene todos nuestros datos sobre el tipo de criatura que son (mutante o humano).
- También establecemos su propiedad adn con el valor que se pasó desde el servidor (ya sea 'mutante' o 'humano').
- Luego llamamos a save() sobre este objeto para que pueda ser almacenado en MongoDB para su uso posterior.
- Si la solicitud fue exitosa, devolverá la cadena "OK" y si no, devolverá la cadena "Prohibido".

- El código anterior también está destinado a guardar cualquier dato nuevo que llegue, así como a actualizar cualquier dato existente en nuestra base de datos.
- El primer parámetro es la petición HTTP, que se pasará a la siguiente función llamada getStats.
- El segundo parámetro es un manejador de errores para cuando haya un error con la respuesta de Dna.find().

- El código comienza definiendo una nueva variable llamada human y mutant, que se utiliza para llevar la cuenta de cuántos mutantes o humanos se han encontrado en la dataList devuelta por Dna.find() .
- A continuación, recorre cada elemento de dataList y le asigna un recuento de mutante o de humano en función de su propiedad de tipo (que puede ser 'mutante' o 'humano').El código es una función que se llamará cuando el usuario solicite las estadísticas.

- El primer parámetro de la función es req, que es un objeto que contiene todos los parámetros de la petición.
- El segundo parámetro de la función es res, que contiene todos los parámetros de la respuesta.

- La primera línea de código en este fragmento simplemente declara una nueva variable llamada getStats y la asigna a una nueva función asíncrona.
- La siguiente línea de código dentro de este fragmento define lo que sucederá cuando esta función asíncrona sea llamada con dos parámetros: req y res.
- Para entender lo que sucede aquí, debes comprender cómo funcionan las funciones async en NodeJS.
- Las funciones async se ejecutan de forma asíncrona, lo que significa que pueden ejecutarse en cualquier momento sin bloquear otras operaciones.

ir a la documetacion principal [aqui](../README.md)
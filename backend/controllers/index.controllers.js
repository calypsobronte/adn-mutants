export const indexDatos = async (req, res) => {
    res.json({"Recopilacion de datos": [
        {
            "Autor": {
                "nombre": "Lina Maria Montaño Ramirez",
                "url": ["https://github.com/calypsobronte", "https://www.linkedin.com/in/calypsobronte/"]
            },
            "Lista de secuencias ADN": "https://adn-mutants.herokuapp.com/api/magneto/all",
            "Detectar mutante": [
                {
                    "url": "https://adn-mutants.herokuapp.com/api/magneto/mutant",
                    "Ingresa el ejemplo": {"dna": ["ATG","CAG","TTA"]}
                }
            ],
            "Lista de estadistica": "https://adn-mutants.herokuapp.com/api/magneto/stats",
            "__v": 0
        }
    ]})
}
import mongoose from 'mongoose'
import server,{app} from '../serve'
import supertest from 'supertest'
const request = supertest(app) // Pass the express app

afterAll(async () =>{
    await mongoose.connection.close()
    await server.close() // Close the server connection
    await new Promise(resolve => setTimeout(() => resolve(), 500));
})

// test initial
describe("GET /api/index", () => {
    test("Responde en json el inicio de la aplicacion si esta corriendo correctamente", async () => {
        const response = await request.get('/api/index').send();
        expect(response.statusCode).toBe(200)
    })
})

describe("GET /api/magneto/all", () => {
    test("Responde en json con la lista de adn almacenadas en la base de datos", async () => {
        const response = await request.get('/api/magneto/all').send();
        expect(response.statusCode).toBe(200)
    })
    
})


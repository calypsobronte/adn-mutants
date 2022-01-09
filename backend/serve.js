// Dependence 
import express from "express";
import morgan from "morgan";
import cors from 'cors';

// Routes
import indexRoutes from "./routes/index.routes";
import datosRoutes from "./routes/datos.routes";

// BD mongo
import './database';

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connection control
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//use of route
app.use("/api/index", indexRoutes); //Initial
app.use("/api/magneto", datosRoutes); //Datos

app.use((req, res, next) => {res.status(404).render('400')})

// HTTP server
// Save the express connection in a const
// starting the server
const server = app.listen(app.get('port'), () => {console.log(`Server on port ${app.get('port')}`);})

// Export express app & server connection
export default server
export {app}
import mongoose from "mongoose";
import config from "./config";

const connection =
  config.NODE_ENV === "test"?config.MONGODB_URL_TEST:config.MONGODB_URL;
if (!connection) {
  console.log("Debes de crear las variables de entorno en el archivo .env");
}
const params = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connection, params)
  .then((db) => {
    console.log("DB is connected", db.connection.name);
  })
  .catch((err) => {
    console.log(err);
  });

process.on("uncaughtException", (err) => {
  console.log(err);
  mongoose.disconnect();
});

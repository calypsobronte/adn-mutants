import { config } from "dotenv";
config();

export default {
    MONGODB_URL: process.env.MONGODB_URL,
    MONGODB_URL_TEST: process.env.MONGODB_URL_TEST,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
}
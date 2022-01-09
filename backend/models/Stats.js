import { Schema, model } from "mongoose";

// Estadísticas de las verificaciones de ADN
const StatsSchema = new Schema({
    type: {
        type: String
    },
    count: {
        type: Number
    }
});
export default model("stats", StatsSchema);
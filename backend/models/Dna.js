import { Schema, model } from "mongoose";

// Guarda los ADN’s verificados con la API. Solo 1 registro por ADN.
const DnaSchema = new Schema({
    dna: {
        type: Array
    },
    mutant: {
        type: Boolean
    }
});
export default model("dna", DnaSchema);
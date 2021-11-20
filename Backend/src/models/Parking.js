const {Schema, model} = require("mongoose")

const parkingSchema = new Schema(
    {
        id_servicio: {type: String, required: true},
        tipo: {type: String, required: true},
        placa: {type: String, required: true},
        salida: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }

);

module.exports = model("Parking", parkingSchema);
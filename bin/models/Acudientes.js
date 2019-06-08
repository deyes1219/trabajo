const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AcudientesSchema = new Schema({
  nombre: String,
  apellido: String,
  telefono: Number,

});

var Acudientes = mongoose.model("Acudientes", AcudientesSchema);
module.exports = Acudientes;
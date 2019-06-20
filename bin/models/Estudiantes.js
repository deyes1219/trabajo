const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudiantesSchema = new Schema({
  nombre: String,
  apellido: String,
  tipoid: String,
  curso: String,
  id_acudientes:[
    {
      type: Schema.Types.ObjectId,
      ref: "Acudientes"
    }
  ]
});

var Estudiantes = mongoose.model("Estudiantes", EstudiantesSchema);
module.exports = Estudiantes;
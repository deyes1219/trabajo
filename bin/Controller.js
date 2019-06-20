const mongoose = require("mongoose");
const Acudientes=require("./models/Acudientes");
const Profesores=require("./models/Profesores");
const Materias=require("./models/Materias");
const Listados=require("./models/Listados");
const Asistencias=require("./models/Asistencias");
const Estudiantes=require("./models/Estudiantes");



class Controller{
constructor(){
    this.connect();
}
async connect(){
try{
    await mongoose.connect(
        "mongodb+srv://deyes:a1b2c3d4@cluster0-yg4ca.mongodb.net/trabajo?retryWrites=true&w=majority",
        {useNewUrlParser:true}
    );
    console.log("conectados a la base de datos")
    }catch(e){
    console.error(e)
        }
    }
 getAcudientes(res){
            Acudientes.find({}, (err, acudientes)=>{
                if(err) throw err;
                res.send(acudientes);

            })
        }

 getProfesores(res){
            Profesores.find({}, (err, profesores)=>{
                if(err) throw err;
                res.send(profesores);

            })
        }

getAsistencias(res){
    Asistencias.find({}).
    populate('Estudiantes').
    exec( (err, asistencias)=>{
        if(err) throw err;
        res.send(asistencias);
    })
}

getEstudiantes(res){
            Estudiantes.find({}, (err, estudiantes)=>{
                if(err) throw err;

                res.send(estudiantes);

            })
        }

getMaterias(res){
            Materias.find({}, (err, materias)=>{
                if(err) throw err;
                res.send(materias);

            })
        }

getListados(res){
            Listados.find({}, (err, listados)=>{
                if(err) throw err;
                res.send(listados);

            })
        }
    }
exports.controller=new Controller()
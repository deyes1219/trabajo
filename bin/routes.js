const express = require("express");
const app = express();
const {controller}= require("./Controller")
const bodyParser= require("body-parser")
app.use(bodyParser.json());

app.get("/", (req,res )=>{
    res.send("Toma de Asistencia");
})
app.get("/materias", (req,res )=>{
    controller.getMaterias(res);
})

app.get("/profesor", (req,res )=>{
    controller.getProfesores(res);
})

app.get("/asistencias", (req,res )=>{
 controller.getAsistencias(res);
})

app.get("/listados", (req,res )=>{
        controller.getListados(res);
})


app.get("/acudientes", (req,res )=>{
/*let acudientes=[
    {nombre:"mario",apellido:"perez",telefono:"3205214875"},
 ]

res.send(acudientes)*/
controller.getAcudientes(res);
})

app.get("/estudiantes", (req,res )=>{
/*let estudiantes=[{nombre:"genesis",apellido:"canterp",tipoid:"ti",curso:"5",id_acudientes:0001},

                {nombre:"angelica",apellido:"romero",tipoid:"ti",curso:"4",id_acudientes:0002},
 ]*/
 controller.getEstudiantes(res);
})

app.get("/asistencias/:inasistencias",(req,res )=>{
    let inasistencias = req.params.inasistencias;
    console.log(inasistencias);
    res.send("ok");
})

app.get("/asistencias/:fecha/:inasistencias",(req,res )=>{
    let inasistencias = req.params.inasistencias;
    console.log(inasistencias);
    res.send("ok2");
})



exports.app = app;


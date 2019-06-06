const express = require("express");
const app = express();

app.get("/", (req,res )=>{
    res.send("Toma de Asistencia");
})

app.get("/estudiantes", (req,res )=>{
let estudiantes=[{nombre:"genesis",apellido:"canterp",tipoid:"ti",curso:"5",id_acudientes:0001},

                {nombre:"angelica",apellido:"romero",tipoid:"ti",curso:"4",id_acudientes:0002},
 ]

res.send("estudiantes")
})

app.get("/materias", (req,res )=>{
let estudiantes=[{nombre:"programacion web",in_horaria:"2"},

                {nombre:"algoritmia",in_horaria:"2"},
 ]

res.send("materias")
})

app.get("/profesores", (req,res )=>{
let profesores=[{nombre:"juan",apellido:"cantero",telefono:"3205214875"},

                {nombre:"pedro",apellido:"cantero",telefono:"321456789"},
 ]

res.send(profesores)
})

app.get("/asistencia", (req,res )=>{
let asistencia=[{asistencia:"2",inasistecia:"4",fecha_asistenci:"2/09/2019"},
 ]

res.send("asistencia")
})


app.get("/listados", (req,res )=>{
let listados=[{fecha:"2/09/2019",id_materias:"4"},
 ]

res.send("listados")
})


app.get("/acudientes", (req,res )=>{
let acudientes=[{nombre:"mario",apellido:"perez",telefono:"3205214875"},
 ]

res.send("acudientes")
})
exports.app = app;
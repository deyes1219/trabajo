const mongoose = require("mongoose");
const Acudientes=require("./models/Acudientes")
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
    }
exports.controller=new Controller()
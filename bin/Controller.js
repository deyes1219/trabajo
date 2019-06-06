const mongoose = require("mongoose");
class Controller{
constructor(){
    this.connect();
}
async connect(){
try{
    await mongoose.connect(
        "mongodb+srv://genangdei:ProgramWeb123*@cluster0-hmtkv.mongodb.net/trabajo?retryWrites=true&w=majority",
        {useNewUrlParser:true}
    );
    console.log("conectados a la base de datos")

}catch(e){
    console.error(e)
}
}
}
exports.controller=new Controller()
const mongoose =require('mongoose')
//const passport=require('passport')
//const passport_local=require('passport-local')
//const passport_local_mongoose=e

const user_schema=mongoose.Schema({
    //dropdups:does not allows duplicate data.
    username:{type: String,required:true,unique:true,dropDups: true},
    password:{type:String,require:true}

})

module.exports=mongoose.model("Users",user_schema)

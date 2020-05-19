const bcrypt=require('bcryptjs')
const express=require('express')
const bodyParser=require('body-parser')

const router=express.Router()
const User=require('../models/schema_creation')//import user model(table) from schema creation
let session=require('express-session')


router.use(bodyParser.json()); // parsing the json data and mapping it to an object
router.use(bodyParser.urlencoded({ extended: false })); // next class


router.route('/')
.post((req,res) => {
   console.log(req.signedCookies)
    if(req.signedCookies.user==req.body.username){
        console.log("inside if condition")
        let person = new User({ // creating a new object(row) for the user model with the data we passed
            username : req.body.username,
            password : req.body.password
        });
        User.findOne({username:person.username})
            .then(users => {   // result will return a success sign like the data passed to save will be returned 
                // investigate by yourself about what is returned while saving(inserting) a object(row)
                bcrypt.compare(person.password,users.password)
                .then(()=>{
                    res.cookie('user',req.body.username,{signed:true})
                    res.json({message:"Login successfull"})
                    console.log(req.signedCookies)
                    next();
                })
                .catch(()=>{
                    res.json({message:"password was not matched"})
                })
                
            })
            .catch(err => {
                res.json({message : err.message})
            });
    }else{
        console.log(req.signedCookies.user)
            res.json({message:"login was suceessfull through cookies"})
    }
});
module.exports=router

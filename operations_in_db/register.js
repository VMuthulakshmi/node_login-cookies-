const bcrypt=require('bcryptjs')
const express=require('express')
const bodyParser=require('body-parser')


const router=express.Router()
const user=require('../models/schema_creation')//import user model(table) from schema creation



router.use(bodyParser.json()); // parsing the json data and mapping it to an object
router.use(bodyParser.urlencoded({ extended: false })); // next class

router.route('/')
.post((req,res) => {
    //console.log(person)
   /* bcrypt.hash(req.body.password, 10, function(err, hash) {
        if(err){
            console.log("it wa a error")
            return
        }
        let person = new user({ // creating a new object(row) for the user model with the data we passed
            username : req.body.username,
            password : req.body.password
        });
        person.password=hash
        console.log(person.password)
        console.log(person)
        person.save()   // saving(inserting) the object(row) in the model(table)
        
        .then(result => {   // result will return a success sign like the data passed to save will be returned 
            // investigate by yourself about what is returned while saving(inserting) a object(row)
            res.json({
                message : "Successful"
            })
        })
        .catch(err => {
            res.json({message : err.message})
        });

        // Store hash in your password DB.
    });*/
    bcrypt.hash(req.body.password, 10).then(function(hash) {
        // Store hash in your password DB.
        let person = new user({ // creating a new object(row) for the user model with the data we passed
            username : req.body.username,
            password : req.body.password
        });
        person.password=hash
        console.log(person.password)
        console.log(person)
        person.save()   // saving(inserting) the object(row) in the model(table)
        
        .then(result => {   // result will return a success sign like the data passed to save will be returned 
            // investigate by yourself about what is returned while saving(inserting) a object(row)
            res.json({
                message : "Successful",
            })
        })
        .catch(err => {
            res.json({message : err.message})
        });

    });
});
module.exports=router
var cors = require('cors');
let express = require('express'); // importing express module
const bodyParser = require("body-parser"); // importing bodyparser module
const cookie_parser=require('cookie-parser')
const session=require('express-session');
//from sessio im including the file store.
const f_s=require('session-file-store')(session);

let registerrouter = require('./operations_in_db/register'); // importing router module from auth.js
let loginrouter=require('./operations_in_db/login')
let logoutrouter=require('./operations_in_db/logout')


let app = express(); // creating a express app
app.use(cors());
app.use(cookie_parser('1234-5678-9101'))


app.get((req,res,next) => {
    console.log("hi i am console")
    next();
})  // sample for "next" concept - this part will be executed and passes the control to the next use() part
app.use('/register',registerrouter); // router module is registered with express app
app.use('/login',loginrouter);
app.use('/logout',logoutrouter);

module.exports = app;    //exporting express app
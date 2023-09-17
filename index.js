const express=require('express');
const dotenv=require('dotenv');
const app=express();
const path=require('path')
dotenv.config();
app.use(express.static(path.join(__dirname,"src")))
app.use(express.static(path.join(__dirname,"dist")))
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");
const db=require('./config/db');
const linkroute=require('./routes/link')
const red=require('./routes/redirect')

const port=process.env.PORT;


app.get('/',(req,res)=>{
    res.render('index')
})

db();


app.use('/',linkroute);
app.use('/',red)

app.listen(port,()=>{
    console.log("list",port);
})
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

const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/form',(req,res)=>{
    res.render('form')
})

app.listen(port,()=>{
    console.log("list",port);
})
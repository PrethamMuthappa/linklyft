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


async function main(){
    try {

        app.get('/',(req,res)=>{
            res.render('index')
        })
        
       await db();
        
        app.use('/',linkroute);
        app.use('/',red)
        
        app.listen(port,()=>{
            console.log("listining",port);
        })
    } catch (error) {
        res.status(404).send('not connected')
    }
}

main()
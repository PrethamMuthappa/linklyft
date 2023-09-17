const mongoose=require('mongoose');
const{Schema,model}=mongoose;

const urllink=new Schema({
    longurl:{
        type:String,
        require:true,
        unique:true
     },
     shorturl:{
        type:String,
        require:true,
        unique:true
     },
     urlcode:{
        type:String,
        require:true,
        unique:true
     },
     
    

},{versionKey:false})

const links=new model('userlinks',urllink)

module.exports=links;
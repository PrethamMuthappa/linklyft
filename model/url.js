const mongoose=require('mongoose');
const { version } = require('uuid');
const{Schema,model}=mongoose;

const urllink=new Schema({
 LINKS:{
    type:String,
    require:true,
    unique:true
 }
},{versionKey:false})

const links=new model('userlinks',urllink)

module.exports=links;
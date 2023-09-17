const mongoose=require('mongoose');
const { version } = require('uuid');
const{Schema,Model}=mongoose;

const urllink=new Schema({
 LINKS:{
    type:String,
    require:true,
    unique:true
 }
},{versionKey:false})

const links=new Model('userlinks',urllink)
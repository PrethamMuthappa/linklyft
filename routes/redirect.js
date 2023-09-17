const mongoose=require('mongoose')
const url=require('../model/url')
const express=require('express')
const router=express.Router()

router.get('/:li',async(req,res)=>{
    try {
        const{li}=req.params;
        const myshorturl= await url.findOne({shorturl:li})
        if(myshorturl){
         res.render('form',{
            key:myshorturl
         })
        }
        else{
            return res.status(404).json('No URL Found')
        }


    } catch (error) {
        console.log(error)
    }
})

module.exports=router
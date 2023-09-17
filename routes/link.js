const url=require('../model/url');
const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();

router.post('/linkform',async(req,res)=>{
    try {
        const {inputField}=req.body;
        const link=await new url({
            LINKS:inputField
        })
        await link.save()
        res.status(200).send("sucessfuul")
    } catch (error) {  
     res.send(501).send("error")
    }
})

module.exports=router
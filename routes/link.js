const url = require('../model/url');
const express = require('express');
const router = express.Router();
const shortids=require('shortid')
const valid=require('valid-url')
router.post('/linkform', async (req, res) => {
    try {
        const { long } = req.body;

        const baseurl="http://localhost:3000"
        
       if(!valid.isUri(baseurl)){
        return res.status(404).send("wrong baseurl")
       }

       const shortid=shortids.generate()
 
     const urlcodes=baseurl+"/"+shortid

        const link = await new url({
            longurl:long,
            shorturl:shortid,
            urlcode:urlcodes
           
        });
        await link.save();
       return  res.json({link})

    } catch (error) {
        console.error(error); 
        return res.status(500).send("error");
    }
});

module.exports = router;

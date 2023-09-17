const url = require('../model/url');
const express = require('express');
const router = express.Router();
const shortids=require('shortid')
const valid=require('valid-url')
router.post('/linkform', async (req, res) => {
    try {
        const { long } = req.body;

      //  const baseurl="http://localhost:3000"
        
       const shortid=shortids.generate()
 
     //const urlcodes="/"+shortid

        const link = await new url({
            longurl:long,
            shorturl:shortid,
           // urlcode:urlcodes
           
        });
        await link.save();
        res.render('result',{key:shortid})

    } catch (error) {
        console.error(error); 
        return res.status(500).send("error");
    }
});

module.exports = router;

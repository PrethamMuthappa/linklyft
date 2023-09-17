const mongoose=require('mongoose')
const url=require('../model/url')
const express=require('express')
const router=express.Router()

router.get('/:shortUrl', async (req, res) => {
    try {
        const { shortUrl } = req.params;
        const urls = await url.findOne({shorturl: shortUrl});

        if (urls) {
            res.redirect(urls.longurl);
        } else {
            console.log(`Short URL not found: ${shortUrl}`);
            res.status(404).render('notfound');
        }
    } catch (error) {
        console.error(`Error in redirection: ${error}`);
        res.status(500).send('Internal Server Error');
    }
});

module.exports=router
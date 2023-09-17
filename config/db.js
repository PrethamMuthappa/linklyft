const mongoose=require('mongoose');

async function db(){
    try {
        await mongoose.connect(process.env.DBURL)
    } catch (error) {
        console.log(error);
    }
}

module.exports=db;
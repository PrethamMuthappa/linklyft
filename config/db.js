const mongoose=require('mongoose');

async function db(){
    try {
        await mongoose.connect(process.env.DBURL)
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports=db;
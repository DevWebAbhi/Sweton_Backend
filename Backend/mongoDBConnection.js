const mongoose=require('mongoose');

const MONGO_URL=process.env.MONGO_URL;

const connect=mongoose.connect(`${MONGO_URL}`);

module.exports={
    connect
}
const express = require('express');

const testimonialsRouter=require('./Routers/testimonialsRouter');
const app = express();

app.use(express.json());

require('dotenv').config();

const {connect} = require('./mongoDBConnection');

const PORT=process.env.PORT;

var cors = require('cors');

const {proSPKSeriesRouter}=require('./Routers/proSPKSeriesRouter');

const eventRouter=require('./Routers/eventRouter');

app.use(cors());

const userRouter=require('./Routers/userRouter');

const{proLoudSpeakerRouter}=require('./Routers/proLoudSpeakerRouter');

app.get('/',(req,res)=>{
    res.status(200).send({message:'This is Sweton Backend Application'});
})

app.use("/files",express.static(__dirname+'/Assets'));

app.use('/testimonials',testimonialsRouter);

app.use('/proSPKSeries',proSPKSeriesRouter);

app.use('/events',eventRouter);

app.use('/proloud',proLoudSpeakerRouter);

app.use('/user',userRouter);



/* 

This below code is written because of prevention from not implemented routes
because that unimplemented routes can crashes our backend application while trying 
to get these routes.

*/



app.get('*',(req,res)=>{
    res.sendStatus(501).send({message:'Not Implemented'});
})

app.post('*',(req,res)=>{
    res.sendStatus(501).send({message:'Not Implemented'});
})

app.delete('*',(req,res)=>{
    res.sendStatus(501).send({message:'Not Implemented'});
})

app.put('*',(req,res)=>{
    res.sendStatus(501).send({message:'Not Implemented'});
})

app.head('*',(req,res)=>{
    res.sendStatus(501).send({message:'Not Implemented'});
})

app.options('*',(req,res)=>{
    res.sendStatus(501).send({message:'Not Implemented'});
})


app.listen(PORT,async ()=>{
    try {
        await connect;
        console.log('Connected to mongodb atlas');
    } catch (error) {
        console.log(error)
    }
})


const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const authr=require('./route/routes')
require('dotenv').config()
const path=require('path')

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
},(error)=>{
    if(error) throw error();
    console.log("connectd")
    
});
app.use('/api/user',authr)


if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(_dirname,'client','build','index.html'));
    });

}
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
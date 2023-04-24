const e = require('express')
const express=require('express')
require('dotenv').config()
const mongoose= require('mongoose')

const orderRoutes=require('./routes/orders')

//express app
const app=express()

//middle ware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/orders',orderRoutes)


//db connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT,()=>{
            console.log("connected to the database and listning on port",process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })



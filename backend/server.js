require('dotenv').config()

const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const productsRout=require('./routes/products')

//express app
const app= express();

//midleware
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,res.method)
    next()
})

//routes
app.use('/api/products', productsRout)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for request
        app.listen(process.env.PORT, ()=>{
            console .log('listening on port ',process.env.PORT)
        })        
    })
    .catch((error)=>{
        console.log(error)
    })

//storage




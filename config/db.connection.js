const mongoose = require('mongoose')

require('dotenv').config()

const connectionStr = process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE"

mongoose.connect( process.env.MONGODB_URI || `mongodb+srv://spiel:spiel@cluster0.rg5icpe.mongodb.net/?retryWrites=true&w=majority` );

const connection = mongoose.connect(connectionStr)

mongoose.connection.on('connected', ()=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB connected...`
))

mongoose.connection.on('error', (error)=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB error encountered...\n ${error}`
))

mongoose.connection.on('disconnnected', ()=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB disconnected.`
))

// module.exports = connection
const express = require('express');
require('dotenv').config()
const app = express();
// const PORT = process.env.PORT
const PORT = 4000;

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(PORT, () => {console.log(`Listening on Port: ${PORT}`)});
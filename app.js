const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/amazonDBex'
const app = express()

mongoose.connect(url , {useNewUrlParser:true})
const con= mongoose.connection

con.on('open',() => {
    console.log('connected...')
})

const amazoncustomerrouter = require('../routes/amazoncustomers')
app.use('/amazoncustomers',amazoncustomers)

app.listen(7184, () => {
    console.log('server started')
})
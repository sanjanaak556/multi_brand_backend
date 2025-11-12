const express = require("express")
const app = express()
require('dotenv').config()

const connectDb = require('./config/db')

connectDb()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to multi-brand application")
})


app.listen(process.env.PORT, () => {
    console.log(`listening at port ${process.env.PORT}`)
})
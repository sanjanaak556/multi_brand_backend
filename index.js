const express = require("express")
const app = express()
require('dotenv').config()

const apiroutes = require('./Routes/routeindex')
const connectDb = require('./config/db')

connectDb()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to multi-brand application")
})

app.use("/api", apiroutes)


app.listen(process.env.PORT, () => {
    console.log(`listening at port ${process.env.PORT}`)
})
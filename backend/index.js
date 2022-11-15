//server
const cors = require('cors')
const express = require('express')
const app = express();
app.use(cors())
app.use(express.json())
const port = 3001


const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/'
// data models...
const UserModel = require("./models/User")

//=================

const user = new UserModel({name: 'YASUO', age: 34, email: 'jasonbro55@hotmail.com'})

const sendSomeData = (req, res) => {
    const user2 = UserModel.find({name: 'YASUO'}).then((dbres) => {res.status(200).send(dbres[0])})
}

mongoose.connect(DB_URL, () => {console.log('db connected.')})





app.get("/getContent", sendSomeData) 
//=================

app.listen(port, () => {console.log(`SERVER runs on ${port}`)})







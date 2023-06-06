const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const app = express()


const PORT = process.env.PORT || 8080

//use express.json() to get data inbto json format
app.use(express.json())

app.use(cors())

//importar routes
const TodoItemRoute = require('./routes/todoItems')


//conectar con mongodb

mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('database connected'))
    .catch((err) => console.log(err))

app.use('/', TodoItemRoute)
app.listen(PORT, () => console.log(`server running on port ${PORT}`))


//Guia minuto 14 end backend
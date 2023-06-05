// importar mongoose para crear un nuevo schema
const mongoose = require('mongoose')

//create Schema
const TodoItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
})

//export this Schema
module.exports = mongoose.model('todo', TodoItemSchema)
const router = require('express').Router()

//import todo model
const TodoItemModel = require('../models/todoItems')

//crear la primer ruta -- agregar items a la database

router.post('/api/item', async (req, res) => {
    try {
        const newItem = new TodoItemModel({
            item: req.body.item,
            completed: req.body.completed
        })
        //guardar item en la base de datos
        const saveItem = await newItem.save()
        res.status(200).json('Item added successfully')
    } catch (error) {
        res.json(error)
    }
})

//crear la segunda ruta -- obetener los items de la database


router.get('/api/items', async (req, res) => {
    try {
        const AllTodoItems = await TodoItemModel.find({})
        res.status(200).json(AllTodoItems)
    } catch (err) {
        res.json(err)
    }
})

// tercer ruta -- actualizar el item en la base de datos

router.put('/api/item/:id', async (req, res) => {
    try {
        //encontrar el item por su id y actualizarlo
        const updateItem = await TodoItemModel.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json('Item Updated')

    } catch (error) {
        res.json(error)
    }
})

//cuarta ruta --borrar item en la base de datos

router.delete('/api/item/:id', async (req, res) => {
    try {
        //encontrar el item por su id y eliminarlo
        const updateItem = await TodoItemModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Item Deleted')

    } catch (error) {
        res.json(error)
    }
})


//export router
module.exports = router
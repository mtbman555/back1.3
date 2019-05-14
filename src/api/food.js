const express = require("express");
const router = express();

const foodModel = require('../database/foods')

router.get('/all', async (req, res) => {
    let foods = await foodModel.getAllFood()
    res.status(200).json(foods)
})

router.post('/', async (req, res) => {
    const body = req.body
    // console.log(body)
    let foods = await foodModel.insertFood(body)
    res.status(200).send(foods)
})

router.put('/', (req, res) => {
    res.status(200).send('test')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let foods = foodModel.deleteFood(id)
    res.status(200).send(foods)
})

module.exports = router
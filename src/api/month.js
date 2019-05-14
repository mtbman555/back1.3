const express = require("express");
const router = express();

const monthModel = require('../database/months')

router.get('/all', async (req, res) => {
    let months = await monthModel.getAllMonth()
    res.status(200).json(months)
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    let months = await monthModel.insertMonth(body)
    res.status(200).send(months)
})

router.put('/', (req, res) => {
    res.status(200).send('test')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    let months = monthModel.deleteMonth(id)
    res.status(200).send(months)
})

module.exports = router
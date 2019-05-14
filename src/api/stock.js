const express = require("express");
const router = express();

const stockModel = require('../database/stocks')

router.get('/all', async (req, res) => {
    let stocks = await stockModel.getAllStock()
    res.status(200).json(stocks)
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    let stocks = await stockModel.insertStock(body)
    res.status(200).send(stocks)
})

router.put('/', (req, res) => {
    res.status(200).send('test')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let stocks = stockModel.deleteStock(id)
    res.status(200).send(stocks)
})

module.exports = router
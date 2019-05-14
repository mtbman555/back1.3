const express = require("express");
const router = express();

const mainModel = require('../database/mains')

router.get('/all', async (req, res) => {
    let mains = await mainModel.getAllMain()
    res.status(200).json(mains)
})

router.post('/', async (req, res) => {
    const body = req.body
    let mains = await mainModel.insertMain(body)
    res.status(200).send(mains)
})

router.put('/', (req, res) => {
    res.status(200).send('test')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let mains = mainModel.deleteMain(id)
    res.status(200).send(mains)
})

module.exports = router
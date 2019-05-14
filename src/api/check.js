const express = require("express");
const router = express();

const checkModel = require('../database/checks')

router.get('/all', async (req, res) => {
    let checks = await checkModel.getAllCheck()
    res.status(200).json(checks)
})

router.get('/table/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let checks = await checkModel.getCheckByTable(id)
    res.status(200).json(checks)
    
})
router.get('/null', async (req, res) => {
    
    let checks = await checkModel.getCheckByNull()
    res.status(200).json(checks)
    
})

router.post('/', async (req, res) => {
    const body = req.body
    // console.log(body)
    let checks = await checkModel.insertCheck(body)
    res.status(200).send(checks)
})
router.post('/pro', async (req, res) => {
    const body = req.body
    // console.log(body)
    let checks = await checkModel.insertCheck2(body)
    res.status(200).send(checks)
})
router.post('/last', async (req, res) => {
    const body = req.body
    // console.log(body)
    let checks = await checkModel.insertCheck3(body)
    res.status(200).send(checks)
})

router.put('/', (req, res) => {
    res.status(200).send('test')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    let checks = checkModel.deleteCheck(id)
    res.status(200).send(checks)
})

router.delete('/', async (req, res) => {
    const body = req.body
    console.log(body)
    
    for (let index = 0; index < (body.value).length; index++) {
        let checks = checkModel.deleteCheckByName(body.value[index]._id)
    }
    res.status(200).send()
})

module.exports = router
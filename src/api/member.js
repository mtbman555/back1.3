const express = require("express");
const router = express();

const memberModel = require('../database/members')

router.get('/all', async (req, res) => {
    let members = await memberModel.getAllMember()
    res.status(200).json(members)
})

router.post('/', async (req, res) => {
    const body = req.body
    let members = await memberModel.insertMember(body)
    res.status(200).send(members)
})

router.put('/', (req, res) => {
    res.status(200).send('test')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let members = memberModel.deleteMember(id)
    res.status(200).send(members)
})

router.post('/uppoint', async (req, res) => {
    const body = req.body
    let members = await memberModel.upPoint(body)
    res.status(200).send(members)
})
router.post('/downpoint', async (req, res) => {
    const body = req.body
    let members = await memberModel.downPoint(body)
    res.status(200).send(members)
})
module.exports = router
const express = require("express");
const router = express();

const userModel = require('../database/users')

router.get('/all', async (req, res) => {
    let users = await userModel.getAllUser()
    res.status(200).json(users)
})

router.post('/login', async (req, res) => {
    const body = req.body
    let user = await userModel.getUserById(body)
    console.log(user)
    console.log(body)
    if (user[0].id == body.id) {
        if (user[0].pw == body.pw) {
            if (user[0].pw2 == body.pw) {
                console.log(true)
            }
        }
    }
    res.status(200).json()
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body.pw)
    console.log(body.pw2)
    if (body.pw == body.pw2) {
        let users = await userModel.insertUser(body)
    }
    res.status(200).send(users)
})

router.put('/', (req, res) => {
    res.status(200).send('test')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    let users = userModel.deleteUser(id)
    res.status(200).send(users)
})

module.exports = router
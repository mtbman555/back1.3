const express = require("express");
const router = express();

const accModel = require('../database/accs')

router.get('/all', async (req, res) => {
    let accs = await accModel.getAllAcc()
    res.status(200).json(accs)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let accs = await accModel.getAccByIdMonth(id)
    res.status(200).json(accs)
    
})

router.post('/', async (req, res) => {
    const body = req.body
    
    for (let index = 0; index < (body.products).length; index++) {
        let data = {
            name: body.products[index].name,
            table: body.products[index].table,
            cost: body.products[index].cost,
            month: body.month
        }
        let accs = await accModel.insertAcc(data)
    }
   
    res.status(200).send()
})

router.put('/', (req, res) => {
    res.status(200).send('test')
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let accs = accModel.deleteAcc(id)
    res.status(200).send(accs)
})
router.delete('/month/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let accs = accModel.deleteAllAcc(id)
    res.status(200).send(accs)
})

module.exports = router
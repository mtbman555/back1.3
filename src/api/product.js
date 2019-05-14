const express = require("express");
const router = express();

const productModel = require('../database/products')

router.get('/all', async (req, res) => {
    let products = await productModel.getAllProduct()
    res.status(200).json(products)

})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let products = await productModel.getProductByIdStock(id)
    res.status(200).json(products)

})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    let products = await productModel.insertProduct(body)
    res.status(200).send(products)
})

router.put('/', async (req, res) => {
    const body = req.body
    // console.log(body)
    for (let index = 0; index < (body).length; index++) {
        if (body[index].table == null) {
            let tmp = await productModel.getProductByName(body[index].name)
            // console.log(tmp)
            if (tmp[0].amount != 0) {
                let products = await productModel.updateProduct(tmp)
                if (tmp[0].amount - 1 == 0) {
                    let products = productModel.deleteProduct(tmp[0]._id)
                }
            }

        }
    }
    res.status(200).send()
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let products = productModel.deleteProduct(id)
    res.status(200).send(products)
})
router.delete('/stock/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    let products = productModel.deleteAllProduct(id)
    res.status(200).send(products)
})

module.exports = router
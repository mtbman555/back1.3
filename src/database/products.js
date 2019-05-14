const mongoose = require("../config")
const tables = require("mongoose")

const Schema = tables.Schema;

const productSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    cost: {
        type: Number
    },
    price: {
        type: Number
    },
    amount: {
        type: Number
    },
    active: {
        type: Number,
        default: 1
    },
    stock: {
        type: Schema.Types.ObjectId,
        ref: 'stock'
    }
})

let productModel = mongoose.model("Products", productSchema);

var exports = module.exports = {};

exports.insertProduct = (value) => {
    // console.log(value.name)
    let product = new productModel({
        name: value.name,
        cost: value.cost,
        price: value.price,
        amount: value.amount,
        stock: value.stock
    })
    // console.log(product)
    return product.save();
}

exports.updateProduct = (tmp) => {
    console.log(tmp[0]._id)
    let product = new productModel({
        id: tmp[0]._id,
        amount: tmp[0].amount - 1
    })
    console.log(product)
    return productModel.updateOne({_id: product.id},{amount: product.amount})
    
}

exports.deleteProduct = async (id) => {
    return productModel.deleteOne({ _id: id })
}

exports.deleteAllProduct = async (id) => {
    return productModel.deleteMany({ stock: id })
}

exports.getAllProduct = async () => {
    return await productModel.find({
        active: 1
    })
}

exports.getProductByName = async (name) => {
    return await productModel.find({
        name: name,
        active: 1
    })
}

exports.getProductByIdStock = async (id) => {
    console.log(id)
    return await productModel.find({
        stock: id,
        active: 1
    })
}
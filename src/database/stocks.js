const mongoose = require("../config")
const tables = require("mongoose")

const Schema = tables.Schema;

const stockSchema = new Schema({
    name: {
        type: String 
    },
    active: {
        type: Number,
        default: 1
    }
})

let stockModel = mongoose.model("Stocks", stockSchema);

var exports = module.exports = {};

exports.insertStock = (value) => {
    let stock = new stockModel({
        name: value.name
    })
    return stock.save();
}

exports.updateStock = (id, value) => {
    return stockModel.findOneAndUpdate(id, value)
}
exports.deleteStock = async (id) => {
    return stockModel.deleteOne({ _id: id })
}

exports.getAllStock = async () => {
    return await stockModel.find({
        active: 1
    })
}
const mongoose = require("../config")
const tables = require("mongoose")

const Schema = tables.Schema;

const foodSchema = new Schema({
    name: {
        type: String 
    },
    cost: {
        type: Number
    },
    active: {
        type: Number,
        default: 1
    }
})

let foodModel = mongoose.model("Foods", foodSchema);

var exports = module.exports = {};

exports.insertFood = (value) => {
    
    let food = new foodModel({
        name: value.name,
        cost: value.cost
    })
    
    return food.save();
}

exports.updateFood = (id, value) => {
    return foodModel.findOneAndUpdate(id, value)
}

exports.deleteFood = async (id) => {
    return foodModel.deleteOne({ _id: id })
}

exports.getAllFood = async () => {
    return await foodModel.find({
        active: 1
    })
}
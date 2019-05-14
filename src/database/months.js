const mongoose = require("../config")
const tables = require("mongoose")

const Schema = tables.Schema;

const monthSchema = new Schema({
    month: {
        type: String 
    },
    active: {
        type: Number,
        default: 1
    }
})

let monthModel = mongoose.model("Months", monthSchema);

var exports = module.exports = {};

exports.insertMonth = (value) => {
    let month = new monthModel({
        month: value.month
    })
    return month.save();
}

exports.updateMonth = (id, value) => {
    return monthModel.findOneAndUpdate(id, value)
}
exports.deleteMonth = async (id) => {
    return monthModel.deleteOne({ _id: id })
}

exports.getAllMonth = async () => {
    return await monthModel.find({
        active: 1
    })
}
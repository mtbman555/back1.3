const mongoose = require("../config")
const tables = require("mongoose")

const Schema = tables.Schema;

const mainSchema = new Schema({
    table: {
        type: String 
    },
    name: {
        type: String 
    },
    no: {
        type: Number 
    },
    time: {
        type: String
    },
    active: {
        type: Number,
        default: 1
    }
})

let mainModel = mongoose.model("Mains", mainSchema);

var exports = module.exports = {};

exports.insertMain = (value) => {
    let main = new mainModel({
        table: value.table,
        name: value.name,
        no: value.no,
        time: value.time
    })
    return main.save();
}

exports.updateMain = (id, value) => {
    return mainModel.findOneAndUpdate(id, value)
}

exports.deleteMain = async (id) => {
    return mainModel.deleteOne({ _id: id })
}

exports.getAllMain = async () => {
    return await mainModel.find({
        active: 1
    })
}
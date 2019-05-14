const mongoose = require("../config")
const tables = require("mongoose")

const Schema = tables.Schema;

const accSchema = new Schema({
    date: {
        type: String,
        default: Date.now()
    },
    name: {
        type: String
    },
    table: {
        type: String
    },
    cost: {
        type: Number
    },
    active: {
        type: Number,
        default: 1
    },
    month: {
        type: Schema.Types.ObjectId,
        ref: 'months'
    }
})

let accModel = mongoose.model("Accs", accSchema);

var exports = module.exports = {};

exports.insertAcc = async (value) => {
    let acc = new accModel({
        date: value.date,
        name: value.name,
        table: value.table,
        cost: value.cost,
        month: value.month,
    })
    return await acc.save();
}

exports.updateAcc = (id, value) => {
    return accModel.findOneAndUpdate(id, value)
}

exports.deleteAcc = async (id) => {
    return accModel.deleteOne({ _id: id })
}

exports.deleteAllAcc = async (id) => {
    return accModel.deleteMany({ month: id })
}

exports.getAllAcc = async () => {
    return await accModel.find({
        active: 1
    }).populate("products")
}

exports.getAccByIdMonth = async (id) => {
    console.log(id)
    return await accModel.find({
        month: id,
        active: 1
    })
}
const mongoose = require("../config")
const tables = require("mongoose")
const Schema = tables.Schema;

const checkSchema = new Schema({
    table: {
        type: String
    },
    name: {
        type: String 
    },
    cost: {
        type: Number 
    },
    amount: {
        type: Number
    },
    active: {
        type: Number,
        default: 1
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }

})

let checkModel = mongoose.model("Checks", checkSchema);

var exports = module.exports = {};

exports.insertCheck = (value) => {
    let check = new checkModel({
        table: value.table,
        name: value.name,       
        cost: value.cost,
        
    })
    return check.save();
}

exports.insertCheck2 = (value) => {
    let check = new checkModel({
        name: value.name,       
        cost: value.price,
        table: null,
        product: value._id
    })
    return check.save();
}

exports.insertCheck3 = (value) => {
    let check = new checkModel({
        table: value.table,
        name: "ลูกค้าบอร์ดเกม",       
        cost: value.cost*value.amount
        
    })
    return check.save();
}

exports.updateCheck = (id, value) => {
    return checkModel.findOneAndUpdate(id, value)
}

exports.deleteCheck = async (id) => {
    return checkModel.deleteOne({ _id: id })
}

exports.getAllCheck = async () => {
    return await checkModel.find({
        active: 1
    })
}
exports.getCheckByTable = async (no) => {
    console.log(no)
    return await checkModel.find({
        table: no,
        active: 1
    })
    
}
exports.getCheckByNull = async () => {
    return await checkModel.find({
        table: null,
        active: 1
    })
    
}

exports.deleteCheckByName = async (id) =>{
    return checkModel.deleteOne({ _id: id })
}
const mongoose = require("../config")
const tables = require("mongoose")

const Schema = tables.Schema;

const memberSchema = new Schema({
    id: {
        type: String 
    },
    name: {
        type: String 
    },
    lname: {
        type: String 
    },
    nname: {
        type: String 
    },
    mail: {
        type: String 
    },
    point: {
        type: Number 
    },
    active: {
        type: Number,
        default: 1
    }
})

let memberModel = mongoose.model("Members", memberSchema);

var exports = module.exports = {};

exports.insertMember = (value) => {
    let member = new memberModel({
        id: value.id,
        name: value.name,
        lname: value.lname,
        nname: value.nname,
        mail: value.mail,
        point: value.point
    })
    return member.save();
}

exports.updateMember = (id, value) => {
    return memberModel.findOneAndUpdate(id, value)
}

exports.deleteMember = async (id) => {
    return memberModel.deleteOne({ _id: id })
}

exports.getAllMember = async () => {
    return await memberModel.find({
        active: 1
    })
}

exports.upPoint = async (value) => {
    return await memberModel.updateOne(
        {id:value.id},
        {$inc:{point: value.point}}
    )
}
exports.downPoint = async (value) => {
    return await memberModel.updateOne(
        {id:value.id},
        {$inc:{point: -(value.point)}}
    )
}
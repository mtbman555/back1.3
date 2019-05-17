const mongoose = require("../config")
const tables = require("mongoose")

const Schema = tables.Schema;

const userSchema = new Schema({
    id: {
        type: String ,required: true
    },
    pw: {
        type: String ,required: true
    },
    pw2: {
        type: String ,required: true
    },
    name: {
        type: String ,required: true
    },
    status: {
        type: String ,required: true
    },
    active: {
        type: Number,
        default: 1
    }
})

let userModel = mongoose.model("Users", userSchema);

var exports = module.exports = {};

exports.insertUser = (value) => {
    let user = new userModel({
        id: value.id,
        pw: value.pw,
        pw2: value.pw2,
        name: value.name,
        status: value.status,
    })
    return user.save();
}

exports.updateUser = (id, value) => {
    return userModel.findOneAndUpdate(id, value)
}

exports.deleteUser = async (id) => {
    return userModel.deleteOne({_id: id})
}

exports.getAllUser = async () => {
    return await userModel.find({
        active: 1
    })
}

exports.getUserById = async (value) => {
    return await userModel.find({
        id: value.id,
        pw: value.pw,
        pw2: value.pw
    })
}

exports.loginByUser = async (value) => {
    return await userModel.findOne({
        id: value.id,
        pw: value.pw,
    })
}


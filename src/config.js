const mongoose = require("mongoose")
const database = 'mongodb://localhost:27017/Database'

mongoose.Promise = require("bluebird")

module.exports = mongoose.createConnection(database, {useNewUrlParser: true})
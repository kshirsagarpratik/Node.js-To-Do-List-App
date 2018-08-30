require('dotenv').config();
var mongoose = require("mongoose");
const mongoDBuRL = process.env.MONGOURL;

mongoose.connect(mongoDBuRL, { useNewUrlParser: true });

mongoose.set('debug', true);

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//todo Schema
let todoSchema = new Schema({
	task: {
		type: String,
		required: true
	},
	done: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Todo', todoSchema)
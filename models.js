// Models
//
const mongoose = require('mongoose');
const empSchema = mongoose.Schema({
	name: { firstName: {type: String, required: true },
	lastName: {type: String, required: true },
	SS: {type: String, required: true},
	start: {type:Date, required: true},
	end: Date
});



exports.Employee = mongoose.Model("Employee",
		empSchema);




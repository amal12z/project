const mongoose = require("mongoose");
require('./tours.model');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [2, "name must be at least 2 characters long"]
	},
	email: {
		type: String,
		required: [true, "name is required"],
		minlength: [2, "name must be at least 2 characters long"]
	},
	// tours : [mongoose.model('Tours').schema],
	// passward: {
	// 	type: String,
	// 	required: [true, "name is required"],
	// 	minlength: [2, "name must be at least 2 characters long"]
	// },

	// cPassward: {
	// 	type: String,
	// 	required: [true, "name is required"],
	// 	minlength: [2, "name must be at least 2 characters long"]
	// },






},

	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
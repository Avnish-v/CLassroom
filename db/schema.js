const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const blogs = new mongoose.Schema(
	{
		blog: {},
	},
	{
		timestamps: true,
	}
);

const register = new mongoose.Schema(
	{
		email: String,
		password: String,
		code: String,
		// title: String,
		blog: {},
	},
	{
		timestamps: true,
	}
);

const model = mongoose.model("nktcollege", register);
module.exports = model;
// module.exports = material;

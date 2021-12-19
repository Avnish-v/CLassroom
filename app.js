// * express,bodyparser , mongoose ,multer ,storageengine ,and upload here......>
const port = 80;
const mongoose = require("mongoose");
const newsmodel = require("./db/schema");
// import material from "./db/schema";
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const uuid = require("uuid").v4;
const { RSA_NO_PADDING } = require("constants");
const path = require("path");
const bodyparser = require("body-parser");
const multer = require("multer");
const { render } = require("ejs");
const { getMaxListeners } = require("process");
mongoose.connect("mongodb://localhost:27017/nktclassroom", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("we are connected to database");
});

const storageMulter = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		const id = uuid();
		const filepath = `${id}${ext}`;
		cb(null, filepath);
	},
});
const upload = multer({ storage: storageMulter });

// ! set the views engine
// app.engine("ejs", require("ejs").__express);
app.use("/uploads", express.static("uploads"));
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

//* get request are here.....................................

app.get("/", (req, res) => {
	res.status(202).render("login");
});
app.get("/adding", (req, res) => {
	res.status(201).render("adding");
});
//! pending work .......
app.get("/sign-out", (req, res) => {
	res.render("login");
});
app.get("/changepassword", (req, res) => {
	res.render("changepassword");
});
app.get("/images", async (req, res) => {
	await newsmodel.find({}).then(images => {
		return res.json({ status: "ok", images });
	});
});
//!  post request .......  ...................................
app.post("/changepassword", async (req, res) => {
	const loginemail = req.body.email;
	const password = req.body.password;
	const setpassword = req.body.setpassword;
	const repass = req.body.repass;
	const valid = await newsmodel.findOne({ email: loginemail });
	if (valid && valid.password === password && setpassword === repass) {
		const filter = { email: loginemail };
		const update = { password: setpassword };
		const isupdate = await newsmodel.findOneAndUpdate(filter, update);
		if (isupdate) {
			res.render("login");
		}
	} else {
		res.send("unable to update...");
	}
});
app.post("/", async (req, res) => {
	var email = req.body.email;
	var code = req.body.code;
	var password = req.body.password;
	var find = await newsmodel.findOne({ email });
	try {
		if (
			find.code === code &&
			find.email === email &&
			find.password === password
		) {
			res.render("teacher");
		} else if (find.email === email && find.password === password) {
			res.render("student");
		} else {
			res.send("incorrect details....");
		}
	} catch (error) {
		res.send("everything is wrong");
	}
});
//* this can be use in future to get entry of new teachers
//can be use in future for adding teachers..........
// app.post("/", async (req, res) => {
// 	var mydata = new newsmodel(req.body);
// 	mydata.save().then(() => {
// 		res.send("teacher entry done successfully");
// 	});
// });

app.post("/new", upload.single("file"), async (req, res) => {
	let blog = {
		title: req.body.title,
		subject: req.body.subject,
		img: req.file.path,
		description: req.body.desc,
	};
	try {
		await newsmodel.create({ blog }).then(() => {
			res.render("teacher");
		});
	} catch (error) {
		res.send(error);
	}
});
app.post("/adding", async (req, res) => {
	try {
		var loginemail = req.body.email;
		var password = req.body.password;
		var repass = req.body.repass;
		const valid = await newsmodel.findOne({ email: loginemail });
		if (password === repass) {
			if (valid) {
				res.status(201).send("user already exist");
			} else {
				var mydata = new newsmodel(req.body);
				mydata.save().then(() => {
					res.render("teacher");
				});
			}
		} else {
			res.send("try again...");
		}
	} catch (error) {
		res.send(error + "this the error");
	}
});
// * listening to the port
app.listen(port, () => {
	console.log("app start");
});

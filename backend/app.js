var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var pasRouter = require("./routes/nombrePas.js");
var courseRouter = require("./routes/listeCourse.js");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/pas", pasRouter);
app.use("/course", courseRouter);




const CONNECTION_URL = "mongodb+srv://UserNumber1:UserNumber123@cluster0.q6cf4.mongodb.net/<dbname>?retryWrites=true&w=majority" ;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=> app.listen(PORT,()=> console.log('Serveur lancé sur le port : '+PORT )))
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);












module.exports = app;

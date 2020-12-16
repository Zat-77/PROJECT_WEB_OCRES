var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var pasRouter = require("./routes/nombrePas.js");
var courseRouter = require("./routes/listeCourse.js");

const Pas = require('./modele/pas.model');

var app = express();
var cors = require('cors');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/pas", pasRouter);
app.use("/course", courseRouter);


//PArtie Victor Test
app.get('/add-Pas', (req,res) => {
    const pas = new Pas({
        nombre: '2',
        plat: 'pate'
    });

    pas.save()
    .then((result)=> {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/all-pas', (req,res)=> {

    Pas.findById('5fd8f78dae2e31598493613d')
    .then((result) =>{
        res.send(result.nombre);
    })
    .catch((err) => {
        console.log(err);
    });
})
app.get('/pas', (req,res) => {
    Pas.find()
    .then((result) =>{
        res.render('index', {title: 'Test', pas1: result})

    })
    .catch((err)=> {
        console.log(err);
    })
})

app.post('/change-pas',(req,res)=> {
    const filter = {_id : "5fd8f78dae2e31598493613d"};
    const update = {nombre : req.body.pas};
    console.log(req.body)
    Pas.findOneAndUpdate(filter,update)
        .then(() => res.json('Goal Natation updated!'))
        .catch(err => res.status(400).json('Error: ' + err));

})









//Fin Victor Test 
const CONNECTION_URL = "mongodb+srv://UserNumber1:UserNumber1@cluster0.q6cf4.mongodb.net/WebProject?retryWrites=true&w=majority" ;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=> app.listen(PORT,()=> console.log('Serveur lancé sur le port : '+PORT )))
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);












module.exports = app;

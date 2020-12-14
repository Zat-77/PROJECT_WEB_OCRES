const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient


const app = express();

MongoClient.connect('mongodb+srv://UserNumber1:UserNumber1@cluster0.q6cf4.mongodb.net/WebProject?retryWrites=true&w=majority',
        {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('WebProject')
    const usersCollection = db.collection('User')
    const platsCollection = db.collection('Plat')
    const courseCollection = db.collection('ListeCourse')

// Make sure you place body-parser before your CRUD handlers!
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
/*
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
      })
*/

    app.get('/user', (req, res) => {
        usersCollection.find().toArray()
        .then(results => {
          console.log(results)
        })
        .catch(error => console.error(error))
    })
    app.get('/plat', (req, res) => {
        platsCollection.find().toArray()
        .then(results => {
          console.log(results)
        })
        .catch(error => console.error(error))
    })
    app.get('/course', (req, res) => {
        courseCollection.find().toArray()
        .then(results => {
          console.log(results)
        })
        .catch(error => console.error(error))
    })

/*
    app.post('/course/add', (req, res) => {
        courseCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/')
                })
            .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) =>{
        console.log(req.body)
    })
*/
  app.listen(3000, function(){
    console.log('listening on 3000')
    })

})




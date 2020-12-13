var express = require('express');
var router = express.Router();


let Course = require('../modele/Course.js')

/* GET users listing. */
router.get('/', function(req, res) {



	Course.find()
		.then(course => res.json(course))
  		.catch(err =>res.status(400).json('Error: ' + err));

 //res.send('respond with a resource');
});

module.exports = router;

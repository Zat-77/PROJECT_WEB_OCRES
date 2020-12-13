var express = require('express');
var router = express.Router();


let User = require('../modele/User.js')

/* GET users listing. */
router.get('/', function(req, res) {



	User.find()
		.then(user => res.json(user))
  		.catch(err =>res.status(400).json('Error: ' + err));

 //res.send('respond with a resource');
});

module.exports = router;

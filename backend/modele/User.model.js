var mongoose = require("mongoose");

const schemaUser = mongoose.Schema({


	
	user:{
		
			pas: String,
		
		// PasSemainePre:[{
		// 	lundi: String,
		// 	mardi: String,
		// 	mercredi: String,
		// 	jeudi: String,
		// 	vendredi: String,
		// 	samedi: String,
		// 	dimanche: String
		// }]
	}

});

const User = mongoose.model('User', schemaUser);

module.exports = User;
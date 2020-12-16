var mongoose = require("mongoose");

const pasSchema = mongoose.Schema({


	
	nombre:{
		
			type: String,
			required: true
		
	},
	plat: {
		type: String,
		required: false
	}
});

const Pas = mongoose.model('Pas', pasSchema);

module.exports = Pas;
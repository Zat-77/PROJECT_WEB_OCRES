var mongoose = require("mongoose");

const pasSchema = mongoose.Schema({


	
	nombre:{
		
			type: String,
			required: true
		
	},
	plat: {
		type: String,
		required: true
	}
});

const Pas = mongoose.model('Pas', pasSchema);

module.exports = Pas;
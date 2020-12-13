var mongoose = require("mongoose");

const schemaCourse = mongoose.Schema({


	
	liste:{
		aliment1: String,
		aliment2: String,
		aliment3: String,
		aliment4: String,
		aliment5: String,
		aliment6: String,
		aliment7: String,

	}

});

const Course = mongoose.model('Course', schemaCourse);

module.exports = Course;
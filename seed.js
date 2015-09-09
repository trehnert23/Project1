var db = require("./models");

db.User.find({}, function (err,success){
	if(err){console.log(err);}
	else{
		console.log(success);
	}

})
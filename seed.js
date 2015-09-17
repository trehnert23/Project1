var db = require("./models");

db.User.find({}, function (err,success){
	if(err){console.log(err);}
	else{
		console.log(success);
	}

});

db.User.findOne({username: username}, function (err, book) {
	if(err) {return console.log(err);}
	var newTime = {
		times: timer
	};
	user.timess.push(newTime);
	user.save(function(err, success) {
		if(err) {return console.log(err);}
		console.log("Time added Successfully");
		process.exit(0);
	});
});

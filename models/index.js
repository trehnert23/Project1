var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/big_project_1");
module.exports.User = require("./user");

// mongoose.connect("mongodb://localhost/big_project_1", function(){
//    mongoose.connection.db.dropDatabase();
// });
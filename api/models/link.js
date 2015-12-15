var mongoose     = require("mongoose");
// var findOrCreate = require("mongoose-findorcreate");

var linkSchema   = mongoose.Schema({
  title: String,
  description: String,
  logo: String 
});

// linkSchema.plugin(findOrCreate);

module.exports = mongoose.model("link", linkSchema);
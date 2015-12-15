var mongoose     = require("mongoose");
// var findOrCreate = require("mongoose-findorcreate");

var projectSchema   = mongoose.Schema({
  title: String,
  description: String,
  logo: String
  href: { type: String, required: true, unique: true }
});

// linkSchema.plugin(findOrCreate);

module.exports = mongoose.model("project", projectSchema);
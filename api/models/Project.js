var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  logo: String,
  href: String 
});

module.exports = mongoose.model("Project", projectSchema);
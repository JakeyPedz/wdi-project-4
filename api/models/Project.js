var mongoose     = require("mongoose");
// var findOrCreate = require("mongoose-findorcreate");

var ProjectSchema   = mongoose.Schema({
  title: String,
  description: String,
  logo: String,
  href: { type: String, required: true, unique: true }
});

// linkSchema.plugin(findOrCreate);

module.exports = mongoose.model("Project", ProjectSchema);
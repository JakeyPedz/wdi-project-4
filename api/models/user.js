// Require Packages
var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');

// Define a 'user' in a 'local' JSON object
var userSchema = new mongoose.Schema({
  local: {
    username: String, 
    email: {type: String, unique: true, required: true},   
    firstname: {type: String},  
    company: {type: String},     
    city: {type: String},
    image: {type: String},
    password: {type: String, required: true}
  },
  interests: []
});

// Create a statics to encrypt the password
userSchema.statics.encrypt = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// Create an instance method to validat any specific user
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", userSchema);



var User = require("../models/user");

function usersIndex(request, response) {
  console.log("INDEX")
  User.find(function(error, users) {
    if(error) response.json({message: 'No luck at the moment'});
    response.json({users: users});
  }).select('-__v');
};

// Users Show
function usersShow(request, response) {
  console.log("SHOW")
  var id = request.params.id;
  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'No luck at the moment:' + error});
    response.json({user: user});
  }).select('-__v');
}

module.exports = {
  usersIndex: usersIndex,
  usersShow: usersShow
}
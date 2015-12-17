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

function usersAddInterest(request, response){
  var userId = request.params.id;
  var interest = request.body.interest;
  User.findById(userId, function(error, user){
    user.interests.push(interest)
    user.save(function(error){
      response.status(200).json({user:user})
    })
  });
}

function usersRemoveInterest(request, response){
  var userId = request.params.id;
  var interest = request.body.interest;
  User.findById(userId, function(error, user){
    var index = user.interests.indexOf(interest);
    user.interests.splice(index,1);
    user.save(function(error){
      response.status(200).json({user:user})
    })
  });
}

module.exports = {
  usersIndex: usersIndex,
  usersShow: usersShow,
  usersAddInterest: usersAddInterest,
  usersRemoveInterest: usersRemoveInterest
}
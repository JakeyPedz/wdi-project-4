var Project = require('../models/Project');

// GET
function getAll(request, response) {
  Project.find(function(error, criminals) {
    if(error) response.json({message: 'No luck at the moment'});

    response.json({criminals: criminals});
  }).select('-__v');
}


// GET 
function getProject(request, response) {
  var title = request.params.title;

  Project.findByTitle({_title: title}, function(error, project) {
    if(error) response.json({message: 'No luck at the moment:' + error});

    response.json({project: project});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  getProject: getProject
}
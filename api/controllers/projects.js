// Controllers and routes work together

var Project = require('../models/Project');

// get all projects
function getProjects(request, response) {
  Project.find(function(error, projects) {
    if(error) response.json({message: 'No luck at the moment'});

    response.json({projects: projects});
  }).select('-__v');
}


// get a specific project
function getProject(request, response) {
  var title = request.params.title;

  Project.findByTitle({_title: title}, function(error, project) {
    if(error) response.json({message: 'No luck at the moment:' + error});

    response.json({project: project});
  }).select('-__v');
}

module.exports = {
  getProjects: getProjects,
  getProject: getProject
}
// Controllers and routes work together
var Project = require('../models/project');

// Projects Create
function projectsCreate(request, response){
  var newProject = new Project(request.body);
  newProject.save(function(data){
    response.status(200).send({message:"project created."});
  });
};

// Projects Index
function projectsIndex(request, response) {
  Project.find(function(error, projects) {
    if(error) response.json({message: 'No luck at the moment'});

    response.json({projects: projects});
  }).select('-__v');
};

// Projects Show
function projectsShow(request, response) {
  var id = request.params.id;

  Project.findById({_id: id}, function(error, project) {
    if(error) response.json({message: 'No luck at the moment:' + error});

    response.json({project: project});
  }).select('-__v');
}

module.exports = {
  projectsIndex: projectsIndex,
  projectsShow: projectsShow,
  projectsCreate: projectsCreate
}
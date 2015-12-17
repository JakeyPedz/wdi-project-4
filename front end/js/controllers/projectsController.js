angular
  .module('Qrowded')
  .controller('projectsController', ProjectsController);

ProjectsController.$inject = ['Project', '$stateParams'];
function ProjectsController(Project, $stateParams){
  var self = this;
  self.all = [];
  self.project = {};
  self.getProject  = getProject;
  self.getProjects = getProjects;

  if ($stateParams.id) {
    self.getProject($stateParams.id)
  }

  getProjects();
  function getProjects(){
    Project.query(function(data){
      self.all = data.projects;
    })
  }

  function getProject(id){
    Project.get({id: id}, function(data){
      self.project = data.project;
    })
  }
}
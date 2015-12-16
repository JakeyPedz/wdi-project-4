angular
  .module('Qrowded')
  .controller('projectsController', ProjectsController);

ProjectsController.$inject = ['Project'];
function ProjectsController(Project){
  var self = this;
  self.all = [];
  // self.addProject = addProject;
  // self.newProject = {};
  self.getProjects = getProjects;
  // self.deleteProject = deleteProject;

  getProjects();

  function getProjects(){
    Project.query(function(data){
      self.all = data.projects;
    })
  }
}
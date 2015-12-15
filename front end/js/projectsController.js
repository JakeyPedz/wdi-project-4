angular.module('Qrowded')
.controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ['$http'];

function ProjectsController($http){
  var self = this;
  self.all = [];
  // self.addProject = addProject;
  // self.newProject = {};
  self.getProjects = getProjects;
  // self.deleteProject = deleteProject;

  getProjects();
  function getProjects(){
    $http
      .get('http://localhost:3000/projects')
      .then(function(response){
        self.all = response.data.projects;
    });
  }

  // function addProject(){
  //   $http
  //     .post('http://localhost:3000/projects', self.newProject)
  //     .then(function(response){
  //       getProjects();
  //   });
  //   self.newProject = {};
  // }

  // function deleteProject(project){
  //   $http
  //     .delete("http://localhost:3000/projects/" + project._id)
  //     .then(function(response){
  //       var index = self.all.indexOf(project);
  //       self.all.splice(index, 1);
  //     });
  // }

}
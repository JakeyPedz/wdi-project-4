angular
.module('Qrowded', ['angular-jwt', 'ui.router', 'ngResource'])
.config(MainRouter)
.constant("API", "http://localhost:3000/api")
.config(function($httpProvider){
  $httpProvider.interceptors.push('authInterceptor')
});

// MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "js/partials/home.html",
  })
  .state('projects', {
    url: "/projects",
    templateUrl: "js/partials/projects.html",
    controller: 'projectsController as projects'
  })
  .state('project', {
    url: "/projects/:id",
    templateUrl: "js/partials/project.html",
    controller: 'projectsController as projects'
  })
  .state('login', {
    url: "/login",
    templateUrl: "js/partials/login.html",
    controller: 'UsersController as users'
  })
  .state('register', {
    url: "/register",
    templateUrl: "js/partials/register.html",
    controller: 'UsersController as users'
  })
  .state('users', {
    url: "/users",
    templateUrl: "js/partials/users.html",
    controller: 'UsersController as users'
  })
  .state('profile', {
    url: "/profile/:id",
    templateUrl: "js/partials/profile.html",
    controller: 'UsersController as users'
  })
  .state('about', {
    url: "/about",
    templateUrl: "js/partials/about.html"
  })

  $urlRouterProvider.otherwise("/");
  
}
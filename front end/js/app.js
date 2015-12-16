angular
.module('Qrowded', ['angular-jwt', 'ui.router', 'ngResource'])
.config(MainRouter)
.constant("API", "http://localhost:3000/api")
.config(function($httpProvider){
  $httpProvider.interceptors.push('authInterceptor')
});

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "partials/home.html",
  })
  .state('viewProjects', {
    url: "/projects",
    templateUrl: "projects.html",
    controller: 'projectsController'
  })
  .state('login', {
    url: "/login",
    templateUrl: "partials/login.html"
    controller: 'usersController'
  })
  .state('register', {
    url: "/register",
    templateUrl: "partials/register.html",
    controller: 'usersController'
  })

  $urlRouterProvider.otherwise("/");
  
}
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
      templateUrl: "home.html",
    })
    .state('archive', {
      url: "/archive",
      templateUrl: "archive.html",
    });

}
angular
.module('Qrowded', ['ui.router'])
.config(MainRouter);


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
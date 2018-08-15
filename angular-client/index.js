var app = angular.module('catsList', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/cats', {
      templateUrl: 'templates/catsList.html'
    })
    .when('/catslist', {
      templateUrl: 'templates/adoptCat.html'
    });
});

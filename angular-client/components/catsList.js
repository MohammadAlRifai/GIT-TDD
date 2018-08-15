var app = angular.module('catsList');

app.component('cats', {
  templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function($scope, $http, $window) {
  var getCats = function() {
    // TODO: Your code here
  };
  getCats();

  $scope.addCats = function() {
    // TODO: Your code here
  };
});

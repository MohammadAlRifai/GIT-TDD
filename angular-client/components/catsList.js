var app = angular.module('catsList');

app.component('cats', {
  templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function($scope, $http, $window) {
  var getCats = function() {
    console.log('front_end: get all cats');
    $http.get('/cats').then(
      function(response) {
        console.log('get all cats sucess');
        alert('get all cats sucess');
        console.log(response.data);

        //        render;
      },
      function(response) {
        console.log(response.data);
        alert(response.data);
      }
    );
  };
  getCats();

  $scope.addCats = function() {
    console.log('front_end: add new cat');

    $http.post('/cats', $scope.$$watchers).then(
      function(response) {
        console.log(response.data);
        alert(response.data);
      },
      function(response) {
        console.log(response.data);
        alert(response.data);
      }
    );
  };
});

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    console.log("Ran!")
    Links.getLinks()
    .then(function(data) {
      $scope.data["links"] = data;
    });
  }

  $scope.getLinks();

});

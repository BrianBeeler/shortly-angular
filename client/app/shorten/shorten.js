angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(submittedLink) {
    console.log("scope.addLink fired!")
    Links.addLink({ url: submittedLink });
  };

  //$scope.getLinks();
  // Your code here
});

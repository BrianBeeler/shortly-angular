angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(submittedLink) {
    console.log("scope.addLink fired!")
    Links.addLink({ url: submittedLink }).then(function(res,error) {
      if (!error) {
        $location.path('/')
      }

    });
  };

  //$scope.getLinks();
  // Your code here
});

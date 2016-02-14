angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function () {
    Links.addOne($scope.link);
    Links.getAll().then(function (links) {
      $scope.oneLink = links.filter(function (v) {
        return v.url === $scope.link.url;
      })[0];
      $scope.showMessage = true;
      $scope.link.url = '';
    });
  };

  $scope.showMessage = false;
});

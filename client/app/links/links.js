angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.data.links = [];

  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });
});

'use strict';

angular.module('myApp.test1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/test1', {
    templateUrl: 'test1/connector.html',
    controller: 'ConnectorCtrl'
  });
}])

.controller('ConnectorCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('http://localhost:3000/connectors').success(function(data) {
	        $scope.connectors = data;
	    });
}]);
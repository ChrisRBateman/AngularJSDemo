angular.module('app', [])
    .controller('AppController', function($scope, $http) {
    	$http.get("customers.json")
    	.success(function (response) {
    		$scope.customers = response.customers;
    	});   
    });

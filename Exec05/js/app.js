angular.module('app', ['ngRoute'])
    // Create two routes - one for the root (list) and another for customer details.
    // Provide a fallback to redirect to the root whenever the requested doesn't exist.
    .config(function($routeProvider) {
    	$routeProvider. 
			when('/list', {
   				templateUrl: 'partials/list.html',
             	controller: 'ListController'
           	}).
           	when('/detail/:id', {
             	templateUrl: 'partials/detail.html',
             	controller: 'DetailController'
           	}).
           	otherwise({
             	redirectTo: '/list'
    	});
    })
    // Create a service to get the JSON file result.
    .factory('CustomerService', function($http) {
		return {
			customers: function(callback) {
				$http.get('customers.json').success(callback);
			}
        };
    })
    // Inside this controller, call the service created before to show the list contents in partials/list.html
    .controller('ListController', function($scope, CustomerService) {
    	CustomerService.customers(function(data) {
			$scope.customers = data.customers;
        });
    })
    // Call the service created before to show customer details, according to the route, in partials/detail.html
    .controller('DetailController', function($scope, $routeParams, CustomerService) {
    	CustomerService.customers(function(data) {
          	$scope.customer = data.customers.filter(function(entry) {
            	return entry.id.toString() === $routeParams.id;
          	})[0];         
        });      
    });

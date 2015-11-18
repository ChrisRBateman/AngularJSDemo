angular.module('app', [])
    .controller('AppController', function($scope, $http) {
    	$http.get("http://ergast.com/api/f1/current/last/results.json")
    	.success(function (response) {
    		$scope.title = response.MRData.RaceTable.Races[0].raceName;
    		$scope.description = " round(" + response.MRData.RaceTable.Races[0].round +
    			")  season(" + response.MRData.RaceTable.Races[0].season + ")";
    			 
    		angular.forEach(response.MRData.RaceTable.Races[0].Results, function (result) {
  				if (typeof result.FastestLap !== 'undefined') {
    				// Convert to float for easier sorting
    				result.FastestLap.rank = parseFloat(result.FastestLap.rank);
				}
			});
    		$scope.results = response.MRData.RaceTable.Races[0].Results;
    	});  
    });

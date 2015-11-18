angular.module('app', [])
    .controller('AppController', function($scope) {
    	$scope.taskList = [];
    	$scope.addTodoTask = function() {
        	$scope.taskList.push({ task:$scope.inputTask, completed:false });
        	$scope.inputTask = "";
    	};

    	$scope.removeTodoTasks = function() {
        	var oldList = $scope.taskList;
        	$scope.taskList = [];
        	angular.forEach(oldList, function(x) {
            	if (!x.completed) $scope.taskList.push(x);
        	});
    	};
    });
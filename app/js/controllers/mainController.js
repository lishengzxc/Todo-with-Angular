todo.controller('MainController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {

	$scope.categoryList = categoryListService.getAllCategoryList();
	$scope.taskList = taskListService.getAllTaskList();


	$scope.taskFilter = {};

	$scope.taskReadOnly = false;

	$scope.orderBy = {
		by: 'startTime',
		order: 'desc',
		isDesc: true
	};

	$scope.nowTask = {};

	$scope.$watch('nowTask.id', function () {
		for (var i = 0; i < $scope.taskList.length; i++) {
			if ($scope.nowTask.id === $scope.taskList[i].id) {
				for (var j in $scope.taskList[i]) {
					if ($scope.taskList[i].hasOwnProperty(j)) {
						$scope.nowTask[j] = $scope.taskList[i][j];
					}
				}
				break;
			}
		}
		console.log($scope.nowTask);
	});

	$scope.$watch('orderBy', function () {
		if ($scope.orderBy.order === 'desc') {
			$scope.orderBy.isDesc = true;
		} else {
			$scope.orderBy.isDesc = false;
		}
	}, true)
}]);
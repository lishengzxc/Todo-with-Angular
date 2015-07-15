todo.controller('MainController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {

	$scope.categoryList = categoryListService.getAllCategoryList();
	$scope.taskList = taskListService.getAllTaskList();


	$scope.taskFilter = {};

	$scope.taskReadOnly = true;

	$scope.orderBy = {
		by: 'startTime',
		order: 'desc',
		isDesc: true
	};

	$scope.nowTask = {
		priority: 0
	};

	$scope.nowCategoryId = -1;

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
	});

	$scope.$watch('orderBy', function () {
		if ($scope.orderBy.order === 'desc') {
			$scope.orderBy.isDesc = true;
		} else {
			$scope.orderBy.isDesc = false;
		}
	}, true);

	//$scope.$watch('taskList')
}]);
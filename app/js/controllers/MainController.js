todo.controller('MainController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {

	$scope.categoryList = categoryListService.getAllCategoryList();

	$scope.taskList = taskListService.getAllTaskList();

	$scope.taskFilter = {};

	$scope.taskReadOnly = true;

	$scope.noticeBoxDisplayStatus = false;

	$scope.currentCategoryId = -1;

	$scope.orderBy = {
		by: 'startTime',
		order: 'desc',
		isDesc: true
	};

	$scope.currentTask = {
		priority: 0
	};

	$scope.$watch('currentTask.id', function () {
		for (var i = 0; i < $scope.taskList.length; i++) {
			if ($scope.currentTask.id === $scope.taskList[i].id) {
				for (var j in $scope.taskList[i]) {
					if ($scope.taskList[i].hasOwnProperty(j)) {
						$scope.currentTask[j] = $scope.taskList[i][j];
					}
				}
				break;
			}
		}
	}, true);

	$scope.$watch('orderBy', function () {
		$scope.orderBy.isDesc = $scope.orderBy.order === 'desc';
	}, true);

}]);
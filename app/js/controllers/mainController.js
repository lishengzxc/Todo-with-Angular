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

	$scope.$watch('orderBy', function () {
		if ($scope.orderBy.order === 'desc') {
			$scope.orderBy.isDesc = true;
		} else {
			$scope.orderBy.isDesc = false;
		}
	}, true)
}]);
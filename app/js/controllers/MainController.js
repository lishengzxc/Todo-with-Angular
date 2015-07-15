todo.controller('MainController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {

	$scope.categoryList = categoryListService.getAllCategoryList();
	$scope.taskList = taskListService.getAllTaskList();

	$scope.nowTaskList = $scope.taskList;

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


	$scope.noticeBoxDisplay = {
		byNowTaskList: true,
		byCategory: true
	};


	$scope.noticeBoxDisplayStatus = false;

	//$scope.$watch('noticeBoxDisplay', function () {
	//	$scope.noticeBoxDisplayStatus = $scope.noticeBoxDisplay.byNowTaskList || $scope.noticeBoxDisplay.byCategory;
	//}, true);


	$scope.$watch('nowCategoryId', function () {
		if ($scope.nowCategoryId === -2) {

		} else {
			$scope.nowTaskList = [];
			for (var i = 0; i < $scope.taskList.length; i++) {
				if ($scope.taskList[i].categoryId == $scope.nowCategoryId) {
					$scope.nowTaskList.push($scope.taskList[i]);
				}
			}
			//$scope.nowTaskList.length === 0 ? $scope.noticeBoxDisplay.byNowTaskList = true : $scope.noticeBoxDisplay.byNowTaskList = false;
		}

	}, true);

	$scope.$watch('nowTask.id', function () {
		if ($scope.nowTask.id || $scope.nowTask.id === 0) {
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
			//$scope.noticeBoxDisplay.byCategory = false;
		} else {
			//$scope.noticeBoxDisplay.byCategory = true;
		}
	}, true);

	$scope.$watch('orderBy', function () {


		if ($scope.orderBy.order === 'desc') {
			$scope.orderBy.isDesc = true;
		} else {
			$scope.orderBy.isDesc = false;
		}
	}, true);

}]);
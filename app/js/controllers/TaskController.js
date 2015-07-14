/**
 * Created by lisheng on 15/7/13.
 */
/**
 * Created by lisheng on 15/7/13.
 */
todo.controller('TaskController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {
	$scope.changeTaskStatus = function ($event) {
		switch ($event.target.id) {
			case 'all':
				delete $scope.taskFilter.status;
				break;
			case 'will':
				$scope.taskFilter.status = 0;
				break;
			case 'done':
				$scope.taskFilter.status = 1;
				break;
		}
	};
	$scope.sortBoxDisplay = false;

	$scope.preAddTask = function ($event) {
		$scope.taskReadOnly = !$scope.taskReadOnly;
		for (var i in $scope.nowTask) {
			delete $scope.nowTask[i];
		}
	};

	$scope.sort = function ($event) {
		$scope.sortBoxDisplay = !$scope.sortBoxDisplay;
		$event.stopPropagation();
	};

	$scope.changeNowTaskId = function ($event) {
		$event.stopPropagation();
		$scope.nowTask.id = this.item.id;
	}

	$scope.changeTaskStatus = function ($event) {
		this.item.status = !this.item.status;
	}
}]);
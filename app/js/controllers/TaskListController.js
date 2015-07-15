/**
 * Created by lisheng on 15/7/13.
 */
/**
 * Created by lisheng on 15/7/13.
 */
todo.controller('TaskListController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {
	$scope.changeTaskStatusFilter = function ($event) {
		switch ($event.target.id) {
			case 'all':
				delete $scope.taskFilter.status;
				break;
			case 'will':
				$scope.taskFilter.status = false;
				break;
			case 'done':
				$scope.taskFilter.status = true;
				break;
		}
	};
	$scope.sortBoxDisplay = false;

	$scope.preAddTask = function ($event) {
		$scope.taskReadOnly = false;
		for (var i in $scope.nowTask) {
			delete $scope.nowTask[i];
		}
		$scope.nowTask.priority = 0;
		$scope.nowTask.status = false;
	};


	$scope.sort = function ($event) {
		$scope.sortBoxDisplay = !$scope.sortBoxDisplay;
		$event.stopPropagation();
	};

	$scope.changeNowTaskId = function ($event) {
		$event.stopPropagation();
		$scope.nowTask.id = this.item.id;
	};

	$scope.changeTaskStatus = function ($event) {
		this.item.status = !this.item.status;
	}
}]);
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



	$scope.sort = function ($event) {
		$scope.sortBoxDisplay = !$scope.sortBoxDisplay;
		$event.stopPropagation();
		//if ($scope.orderBy[0] === 'p') {
		//	$scope.orderBy = '-priority';
		//} else {
		//	$scope.orderBy = 'priority';
		//}
	}

}]);
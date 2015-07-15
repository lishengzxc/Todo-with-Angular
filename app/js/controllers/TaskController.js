/**
 * Created by lisheng on 15/7/14.
 */
todo.controller('TaskController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {

	$scope.confirmAddTask = function ($event) {
		var getNewTaskId = function () {
			if (!$scope.taskList.length) {
				return 0;
			} else {
				return $scope.taskList[$scope.taskList.length - 1].id + 1;
			}
		};
		var resetNowTask = function () {
			for (var i in $scope.nowTask) {
				delete $scope.nowTask[i];
			}
			$scope.nowTask.priority = 0;
		};

		var cloneTask = function () {
			var obj = {};
			for (var i in $scope.nowTask) {
				if ($scope.nowTask.hasOwnProperty(i)) {
					obj[i] = $scope.nowTask[i];
				}
			}
			return obj;
		};

		if (!$scope.nowTask.id) {
			var _date = new Date();
			$scope.nowTask.startTime = _date.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + _date.getDate();
			$scope.nowTask.categoryId = $scope.nowCategoryId;
			$scope.nowTask.id = getNewTaskId();
			$scope.taskList.push(cloneTask());
			//$scope.nowTaskList.push(cloneTask());
		} else {
			$scope.taskList[$scope.nowTask.id] = cloneTask();
			//$scope.nowTaskList[$scope.nowTask.id] = cloneTask();
		}
		taskListService.save($scope.taskList);
		resetNowTask();

	}
}]);
/**
 * Created by lisheng on 15/7/14.
 */
todo.controller('TaskController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {
	$scope.confirmAddTask = function ($event) {
		var getNewTaskId = function() {
			return id;
		};
		var _date = new Date();
		$scope.nowTask.startTime = _date.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + _date.getDate();
		$scope.nowTask.categoryId = -1;

	}
}]);
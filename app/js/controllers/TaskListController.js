/**
 * Created by lisheng on 15/7/13.
 */
/**
 * Created by lisheng on 15/7/13.
 */
todo.controller('TaskListController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {
  $scope.changeTaskStatusFilter = function (status) {
    switch (status) {
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

  $scope.ready2AddTask = function ($event) {
    $scope.noticeBoxDisplayStatus = false;
    $scope.taskReadOnly = false;
    $scope.currentTask = {};
    $scope.currentTask.priority = 0;
    $scope.currentTask.status = false;
  };

  $scope.sort = function ($event) {
    $scope.sortBoxDisplay = !$scope.sortBoxDisplay;
    $event.stopPropagation();
  };

  $scope.changeCurrentTaskId = function ($event) {
    $scope.currentTask.id = this.item.id;
  };

  $scope.changeTaskStatus = function ($event) {
    this.item.status = !this.item.status;
  }
}]);
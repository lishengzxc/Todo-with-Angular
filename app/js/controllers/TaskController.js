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
      for (var i in $scope.currentTask) {
        delete $scope.currentTask[i];
      }
      $scope.currentTask.priority = 0;
    };

    var cloneTask = function () {
      var obj = {};
      for (var i in $scope.currentTask) {
        if ($scope.currentTask.hasOwnProperty(i)) {
          obj[i] = $scope.currentTask[i];
        }
      }
      return obj;
    };

    if (!$scope.currentTask.id) {
      var date = new Date();
      $scope.currentTask.startTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      $scope.currentTask.categoryId = $scope.currentCategoryId;
      $scope.currentTask.id = getNewTaskId();
      $scope.taskList.push(cloneTask());
    } else {
      $scope.taskList[$scope.currentTask.id] = cloneTask();
    }
    taskListService.save($scope.taskList);
    resetNowTask();

  }
}]);
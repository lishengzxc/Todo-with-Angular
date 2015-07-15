/**
 * Created by lisheng on 15/7/13.
 */
todo.directive('task', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '../app/tpl/task.html'
  }
});
/**
 * Created by lisheng on 15/7/13.
 */
todo.controller('CategoryController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {

  $scope.addBoxVisible = false;

  $scope.preAddCategoryName = '';

  $scope.showAddBox = function ($event) {
    $scope.addBoxVisible = !$scope.addBoxVisible;
  };

  $scope.addCategory = function ($event) {
    categoryListService.addCategory($scope.preAddCategoryName, $scope.categoryList);
    $scope.preAddCategoryName = '';
    $scope.addBoxVisible = false;

  };

  $scope.deleteCategory = function ($event) {
    $event.stopPropagation();
    categoryListService.deleteCategory(this.item.id, $scope.categoryList);
  };

  $scope.changeNowCategoryId = function ($event) {
    $scope.currentCategoryId = this.item.id;
    $scope.taskFilter.categoryId = this.item.id;
  };


}]);
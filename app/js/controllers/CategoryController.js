/**
 * Created by lisheng on 15/7/13.
 */
todo.controller('CategoryController', ['$scope', 'categoryListService', 'taskListService', function ($scope, categoryListService, taskListService) {

	$scope.addBoxDisplay = false;

	$scope.showAddBox = function ($event) {
		$scope.addBoxDisplay = !$scope.addBoxDisplay;
	};

	$scope.preAddCategoryName = '';


	$scope.addCategory = function ($event) {
		categoryListService.addCategory($scope.preAddCategoryName, $scope.categoryList);
		$scope.preAddCategoryName = '';
		$scope.addBoxDisplay = false;

	};

	$scope.delCategory = function ($event) {
		$event.stopPropagation();
		categoryListService.delCategory(this.item.id, $scope.categoryList);
	};

	$scope.changeNowCategoryId = function ($event) {
		$scope.nowCategoryId = this.item.id;
	}

}]);
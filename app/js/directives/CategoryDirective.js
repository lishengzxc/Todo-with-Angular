/**
 * Created by lisheng on 15/7/13.
 */
todo.directive('category', function (categoryListService) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../app/tpl/category.html',
		link: function (scope, element, attr) {

		}
	}
});
/**
 * Created by lisheng on 15/7/13.
 */
todo.directive('category', function (categoryListService) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../app/tpl/category.html',
		link: function (scope, element, attr) {
			var list = element[0].children[2];
			list.addEventListener('click', function ($event) {
				for (var i = 0; i < list.children.length; i++) {
					console.log(list.children[i].style.backgroundColor = 'transparent');
				}
				console.log($event.target.style.backgroundColor = '#eee');
			}, false);
		}
	}
});
/**
 * Created by lisheng on 15/7/13.
 */
todo.directive('list', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../app/tpl/list.html',
		link: function (scope, element, attr) {
			var list = element[0].children[1];
			list.addEventListener('click', function ($event) {
				for (var i = 0; i < list.children.length; i++) {
					list.children[i].style.backgroundColor = 'transparent';
				}
				if ($event.target.tagName === 'LI') {
					$event.target.style.backgroundColor = '#eee';
				} else {
					$event.target.parentNode.style.backgroundColor = '#e7e7e7';
				}
			}, false);
			//list.addEventListener('dblclick', function ($event) {
			//	console.log(scope);
			//})
		}
	}
});
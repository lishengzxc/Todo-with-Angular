var todo = angular.module('toDo', ['ngRoute', 'ui.date'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'tpl/main.html',
				controller: 'MainController'
			})
			.otherwise({
				redirectTo: '/'
			});
	});



var todo = angular.module('toDo', ['ngRoute'])
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



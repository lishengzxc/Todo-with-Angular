var todo = angular.module('todo', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'tpl/main.html',
				controller: 'mainController'
			})
			.otherwise({
				redirectTo: '/'
			});
	});



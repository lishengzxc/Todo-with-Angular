todo.controller('mainController', ['$scope', function ($scope) {
	//$scope.category = {
	//	id: 0,
	//	name: '分类名'
	//};
	//
	//$scope.task = {
	//	id: 0,
	//	ctn: '.....',
	//	endtime: new Date(),
	//	priority: null,
	//	isDone: false
	//}

	function Category(name) {

		this.name = name;
	}





	function Task(name, content, categoryId, endTime, priority) {

		this.name = name;
		this.content = content;
		this.categoryId = categoryId;
		this.endTime = endTime;
		this.priority = priority;
	}
}]);
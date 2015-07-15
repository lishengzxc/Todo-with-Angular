/**
 * Created by lisheng on 15/7/13.
 */
todo.factory('taskListService', function () {
	var service = {};

	service.getAllTaskList = function () {
		var _list = JSON.parse(localStorage.getItem("taskList") ? localStorage.getItem("taskList") : '[]');
		return _list;
	};

	service.save = function (allTaskList) {
		localStorage.setItem("taskList", JSON.stringify(allTaskList));
	};

	return service;

});
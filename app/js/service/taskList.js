/**
 * Created by lisheng on 15/7/13.
 */
todo.factory('taskListService', function () {
	var service = {};

	service.getAllTaskList = function () {
		return JSON.parse(localStorage.getItem("taskList"));
	};




	return service;

});
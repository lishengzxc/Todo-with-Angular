/**
 * Created by lisheng on 15/7/13.
 */
todo.factory('categoryListService', function () {
	var service = {};

	service.getAllCategoryList = function () {
		return JSON.parse(localStorage.getItem('categoryList'));
	};

	service.addCategory = function (name, allCategoryList) {

	};

	service.delCatogory = function (id, allCategoryList) {

	};


	service.save = function (allCategoryList) {
		localStorage.setItem('categoryList', JSON.parse(allCategoryList));
	};

	return service;

});
/**
 * Created by lisheng on 15/7/13.
 */
todo.factory('categoryListService', function () {
	var service = {};

	service.getAllCategoryList = function () {
		var _list = JSON.parse(localStorage.getItem('categoryList') ? localStorage.getItem('categoryList') : '[{"id":-1, "name":"默认分类"}]');
		//localStorage.setItem("categoryList", JSON.stringify([{id:-1, name:"默认分类"}]));
		return _list;
	};

	service.addCategory = function (name, allCategoryList) {
		var id;
		if (allCategoryList.length !== 0) {
			id = allCategoryList[allCategoryList.length - 1].id + 1;
			allCategoryList.push({
				id: id,
				name: name
			})
		} else {
			allCategoryList.push({
				id: 0,
				name: name
			})
		}
		service.save(allCategoryList);
	};

	service.delCategory = function (id, allCategoryList) {
		for (var i = 0, len = allCategoryList.length; i < len; i++) {
			if (allCategoryList[i].id === id) {
				if (confirm("是否删除【" + allCategoryList[i].name + "】下的所有任务？")) {
					allCategoryList.splice(i, 1);
				}
				break;
			}
		}
		service.save(allCategoryList);
	};


	service.save = function (allCategoryList) {
		localStorage.setItem("categoryList", JSON.stringify(allCategoryList));

	};

	return service;

});
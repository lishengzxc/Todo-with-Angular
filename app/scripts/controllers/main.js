'use strict';

/**
 * @ngdoc function
 * @name todoWithAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoWithAngularApp
 */
angular.module('todoWithAngularApp').controller('MainCtrl', function ($scope) {
    $scope.taskClass = [{
        taskClassId: 1,
        taskClassMainTitle: '主标题1g',
        taskClassSubTitle: '副标题1副标题1副标题1g',
        taskClassNum: 5
    }];
});

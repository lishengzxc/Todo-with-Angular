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

    $scope.tasks = [{
        taskId: 1,
        taskClassId: 1,
        taskName: '任务名1',
        taskTimeStart: '2015-6-28',
        taskTimeEnd: '2015-7-28',
        taskContent: '一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要'
    },{
        taskId: 2,
        taskClassId: 1,
        taskName: '任务名2',
        taskTimeStart: '2015-6-28',
        taskTimeEnd: '2015-7-28',
        taskContent: '一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要'
    },{
        taskId: 3,
        taskClassId: 1,
        taskName: '任务名3',
        taskTimeStart: '2015-6-28',
        taskTimeEnd: '2015-7-28',
        taskContent: '一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要'
    },{
        taskId: 4,
        taskClassId: 1,
        taskName: '任务名4',
        taskTimeStart: '2015-6-28',
        taskTimeEnd: '2015-7-28',
        taskContent: '一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要一些文字它是摘要'
    }]
});

/**
 * Created by lisheng on 15/6/30.
 */
'use strict';

angular.module('todoWithAngularApp').directive('index', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/index.html',
        replace: true
    };
});

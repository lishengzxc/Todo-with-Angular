/**
 * Created by lisheng on 15/6/30.
 */
'use strict';

angular.module('todoWithAngularApp').directive('detail', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/details.html',
        replace: true
    };
});

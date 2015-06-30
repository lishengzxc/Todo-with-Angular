/**
 * Created by lisheng on 15/6/30.
 */

'use strict';

angular.module('todoWithAngularApp').directive('list', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/list.html',
        replace: true
    };
});

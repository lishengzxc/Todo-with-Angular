/**
 * Created by lisheng on 15/6/30.
 */

'use strict';


angular.module('todoWithAngularApp').controller('ListCtrl', function ($scope) {

    $scope.addTask = function () {
        $scope.detailsStats = !$scope.detailsStats;
    };
});

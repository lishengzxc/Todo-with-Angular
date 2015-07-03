/**
 * Created by lisheng on 15/7/3.
 */
'use strict';

angular.module('todoWithAngularApp').controller('DetailsCtrl', function ($scope) {
    $scope.saveTask = function() {
        $scope.nowTask.taskClassId = $scope.nowClassId;

        if ($scope.nowTask.taskId) {
            $scope.nowTask[$scope.tmpIndex] = $scope.nowTask;
        } else {
            $scope.nowTask.taskId = $scope.tasks[$scope.tasks.length - 1].taskId + 1;
            $scope.tasks.push($scope.nowTask);
        }
        $scope.nowTask = {};
    };

    $scope.editTask = function() {
        $scope.detailsStats = !$scope.detailsStats;
    };
});

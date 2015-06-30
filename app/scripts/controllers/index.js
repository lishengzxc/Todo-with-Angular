/**
 * Created by lisheng on 15/6/30.
 */
'use strict';


angular.module('todoWithAngularApp').controller('IndexCtrl', function ($scope) {

    $scope.addTaskClassBoxDisplay = false;

    $scope.addTaskClassPrep = {
        taskClassMainTitle: '',
        taskClassSubTitle: ''
    };

    $scope.addTaskClass = function ($event) {
        $event.stopPropagation();
        for (var i in $scope.addTaskClassPrep) {
            $scope.addTaskClassPrep[i] = '';
        }
        $scope.addTaskClassBoxDisplay = !$scope.addTaskClassBoxDisplay;
    };

    $scope.addTaskClassOK = function ($event) {
        $event.stopPropagation();
        var id = $scope.taskClass[$scope.taskClass.length - 1].taskClassId + 1;
        $scope.taskClass.push({
            taskClassId: id,
            taskClassMainTitle: $scope.addTaskClassPrep.taskClassMainTitle,
            taskClassSubTitle: $scope.addTaskClassPrep.taskClassSubTitle,
            taskClassNum: 0
        });
        $scope.addTaskClass($event);
    };

    $scope.addTaskClassCancel = function ($event) {
        $scope.addTaskClass($event);
    };

    $scope.chooseTaskClass = function () {
        $scope.nowClassId = this.item.taskClassId;
    };
});

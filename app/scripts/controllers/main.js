'use strict';

/**
 * @ngdoc function
 * @name todoWithAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoWithAngularApp
 */
angular.module('todoWithAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

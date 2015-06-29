'use strict';

/**
 * @ngdoc function
 * @name todoWithAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoWithAngularApp
 */
angular.module('todoWithAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

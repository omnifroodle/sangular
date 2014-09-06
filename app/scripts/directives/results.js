'use strict';

/**
 * @ngdoc directive
 * @name sangularApp.directive:results
 * @description
 * # results
 */
angular.module('sangularApp')
  .directive('results', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the results directive');
      }
    };
  });

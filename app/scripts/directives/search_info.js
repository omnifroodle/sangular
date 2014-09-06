'use strict';

/**
 * @ngdoc directive
 * @name sangularApp.directive:searchInfo
 * @description
 * # searchInfo
 */
angular.module('sangularApp')
  .directive('searchInfo', function () {
    return {
      require: '^searcher',
      restrict: 'A',
      link: function postLink(scope, element, attrs, searcher) {
        console.log(searcher.server);
        scope.$watch(function() {
          return searcher.server;
        }, function(newVal, oldVal) {
          scope.server = newVal;
          console.log(newVal);
        });
        scope.$watch(function() {
          return searcher.query;
        }, function(newVal, oldVal) {
          console.log('value changed, new value is: ' + newVal);
          scope.query = newVal;
        });
      }
    };
  });

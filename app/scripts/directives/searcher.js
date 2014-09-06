'use strict';

/**
 * @ngdoc directive
 * @name sangularApp.directive:searcher
 * @description
 * # searcher
 */
angular.module('sangularApp')
  .directive('searcher', function () {
    return {
      template: '<div class="searcher" ng-transclude></div>',
      transclude: true,
      restrict: 'A',
      scope: {
        server: '@server',
        query: '@query'
      },
      link:function(scope,element,attrs,ctrl) {
        console.log(attrs);
      },
      controller: function($scope) {
        this.results = ['one', 'two'];
        this.server = $scope.server;
        this.query = $scope.query;
        this.update_query = function(query) {
          $scope.query = query;
        };
      }
    };
  });

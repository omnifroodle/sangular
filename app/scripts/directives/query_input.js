'use strict';

/**
 * @ngdoc directive
 * @name sangularApp.directive:queryInput
 * @description
 * # queryInput
 */
angular.module('sangularApp')
.directive('queryInput', function () {
  return {
    require: '^searcher',
    restrict: 'A',
    link: function postLink(scope, element, attrs, searcher) {
      // on blur, update the value in scope
      element.on('propertychange keyup paste', function (blurEvent) {
        if (element.data('old-value') != element.val()) {
          scope.$apply(function () {
            searcher.query = element.val();
            element.data('old-value', element.val());
          });
        }
      });
    }
  };
});

'use strict';

describe('Directive: queryInput', function () {

  // load the directive's module
  beforeEach(module('sangularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<query-input></query-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the queryInput directive');
  }));
});

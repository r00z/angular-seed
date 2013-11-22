'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('myApp.controllers'));

    var scope, ctrl;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        ctrl = $controller('MyCtrl3', {$scope: scope, Data : {}});
    }));

    it('MyCtrl3 should exist', inject(function () {
        expect(ctrl).toBeDefined();
    }));

    it('scope should have phones', inject(function () {
        expect(scope.phones).toBeDefined();
        expect(scope.phones.length).toBe(3);
    }));
});

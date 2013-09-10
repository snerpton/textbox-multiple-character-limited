describe("Test 2: Node/Karma/Jasmine test. If this fails, then something is badly wrong!", function () {
    var b;

    it("Set 'b = true', and then test 'b' is actually true.", function () {
        b = true;
        expect(b).toBe(true);
    });
});



describe('Test 3 Controller: BwtTextboxMultipleCharacterLimitedController', function () {
    
    // load the controller's module
    beforeEach(module('umbraco'));

    var Ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        Ctrl = $controller('BwtTextboxMultipleCharacterLimitedController', {
            $scope: scope
        });
    }));

    // Test something daft to ensure the controller has been properly configured
    var c;
    it("Set 'c = true' and test if c = true", function () {
        c = true;
        expect(c).toBe(true);
    });

});

describe("Test 1: Node/Karma/Jasmine test. If this fails, then something is badly wrong!", function () {
    var a;

    it("Set 'a = true', and then test 'a' is actually true.", function () {
        a = true;
        expect(a).toBe(true);
    });
});
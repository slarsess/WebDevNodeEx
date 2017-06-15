/* Inside first_test.js */
var assert = require("assert");
describe("Mocha", function () {
    it("runs correctly", function () {
        // This will fail tests if not true
        // (try changing it to false, see what happens)
        assert.equal("hello", "hello");
    });
});

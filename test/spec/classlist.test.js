/* global describe, it */

(function () {
    'use strict';
    var mochaDiv = document.getElementById("mocha");
    describe("classList", function () {
        var fixture;
        beforeEach(function () {
            fixture = document.createElement("div");
            mochaDiv.appendChild(fixture);
        });
        context("#add", function () {
            it("should handle multiple classes", function () {
                fixture.classList.add("foo", "bar");
                var classes = fixture.getAttribute("class");
                assert.equal(classes, "foo bar");
            });
        });
        context("#remove", function () {
            beforeEach(function () {
                fixture.classList.add("foo", "bar");
            });
            it("should handle multiple classes", function () {
                fixture.classList.remove("foo", "bar");
                var classes = fixture.getAttribute("class");
                assert.equal(classes, "");
            });
        });
    });
})();

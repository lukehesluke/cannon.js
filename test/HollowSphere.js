var Vec3 = require("../src/math/Vec3");
var HollowSphere = require('../src/shapes/HollowSphere');

var almostEqual = function(numA, numB, precision) {
    if(precision === undefined){
        precision = 1e-6;
    }
    return Math.abs(numA - numB) < precision;
}

module.exports = {
    volume: function(test) {
        test.ok(almostEqual(new HollowSphere(10).volume(), 0));
        test.ok(almostEqual(new HollowSphere(3).volume(), 0));
        test.done();
    },
    updateBoundingSphereRadius: function(test) {
        var doTest = function(hollowSphere, expected) {
            hollowSphere.updateBoundingSphereRadius();
            test.equal(hollowSphere.boundingSphereRadius, expected);
        };
        doTest(new HollowSphere(10), 10);
        doTest(new HollowSphere(3), 3);
        test.done();
    },
    calculateLocalInertia: function(test) {
        test.ok(
            new Vec3(333.3333333333333, 333.3333333333333, 333.3333333333333).almostEquals(
                new HollowSphere(10).calculateLocalInertia(5)
            )
        );
        test.ok(
            new Vec3(600, 600, 600).almostEquals(
                new HollowSphere(3).calculateLocalInertia(100)
            )
        );
        test.done();
    }
}

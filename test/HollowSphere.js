var Vec3 = require("../src/math/Vec3");
var HollowSphere = require('../src/shapes/HollowSphere');

var almostEqual = function(numA, numB, precision) {
    if(precision===undefined){
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
        test.equal(new HollowSphere(10).updateBoundingSphereRadius(), 10);
        test.equal(new HollowSphere(3).updateBoundingSphereRadius(), 3);
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

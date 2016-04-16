module.exports = HollowSphere;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');

/**
 * Spherical shape with a hollowed inside
 * @class HollowSphere
 * @constructor
 * @extends Shape
 * @param {Number} radius The radius of the sphere, a non-negative number.
 * @author Luke Winship <luke.winship@gmail.com> (http://github.com/lukehesluke)
 */
function HollowSphere(radius) {
    Shape.call(this);

    this.radius = radius !== undefined ? Number(radius) : 1.0;
    this.type = Shape.types.HOLLOWSPHERE;

    this.updateBoundingSphereRadius();
};
HollowSphere.prototype = new Shape();
HollowSphere.prototype.constructor = HollowSphere;

HollowSphere.prototype.calculateLocalInertia = function(mass,target) {
    target = target || new Vec3();
    var I = (2.0 * mass * this.radius * this.radius) / 3.0;
    target.x = I;
    target.y = I;
    target.z = I;
    return target;
};

HollowSphere.prototype.volume = function() {
    // Hollow spheres have no volume
    return 0.0;
};

HollowSphere.prototype.updateBoundingSphereRadius = function() {
    this.boundingSphereRadius = this.radius;
};

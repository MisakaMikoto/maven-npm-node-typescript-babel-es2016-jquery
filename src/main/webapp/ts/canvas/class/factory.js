"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Factory = /** @class */ (function () {
    function Factory() {
        this.figures = [];
    }
    Factory.prototype.create = function (x, y, width, height, targetObject) {
        var obj = new targetObject(x, y, width, height);
        this.push(obj);
    };
    ;
    Factory.prototype.push = function (targetObject) {
        this.figures.push(targetObject);
    };
    Object.defineProperty(Factory.prototype, "getFigures", {
        get: function () {
            return this.figures;
        },
        enumerable: true,
        configurable: true
    });
    return Factory;
}());
exports.Factory = Factory;
;

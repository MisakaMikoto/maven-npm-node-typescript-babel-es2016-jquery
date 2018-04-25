"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArcheTypeFactory = /** @class */ (function () {
    function ArcheTypeFactory() {
        this.figures = [];
    }
    ArcheTypeFactory.prototype.operate = function (x, y, width, height, targetObject) {
        var obj = new targetObject(x, y, width, height);
        this.push(obj);
    };
    ;
    ArcheTypeFactory.prototype.push = function (targetObject) {
        this.figures.push(targetObject);
    };
    Object.defineProperty(ArcheTypeFactory.prototype, "getFigures", {
        get: function () {
            return this.figures;
        },
        enumerable: true,
        configurable: true
    });
    return ArcheTypeFactory;
}());
exports.ArcheTypeFactory = ArcheTypeFactory;
;

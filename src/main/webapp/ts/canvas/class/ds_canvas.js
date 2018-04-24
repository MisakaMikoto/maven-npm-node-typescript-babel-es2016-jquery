"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_js_1 = require("./factory.js");
var rectangle_js_1 = require("./rectangle.js");
var DSCanvas = /** @class */ (function () {
    function DSCanvas() {
    }
    DSCanvas.prototype.draw = function () {
        DSCanvas.factory.create(1, 1, 100, 100, rectangle_js_1.Rectangle);
        alert(DSCanvas.factory.getFigures.length);
    };
    DSCanvas.factory = new factory_js_1.Factory();
    return DSCanvas;
}());
exports.DSCanvas = DSCanvas;

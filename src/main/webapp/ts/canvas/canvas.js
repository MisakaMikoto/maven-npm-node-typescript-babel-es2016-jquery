"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var archetype_factory_js_1 = require("../factory/archetype_factory.js");
var layout_factory_js_1 = require("../factory/layout_factory.js");
var rectangle_js_1 = require("../archetype/rectangle.js");
var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    Canvas.prototype.draw = function () {
        Canvas.archeTypeFactory.operate(1, 1, 100, 100, rectangle_js_1.Rectangle);
        // Canvas.layoutFactory.operate(1,1,100,100, Rectangle);
        console.log(Canvas.archeTypeFactory.getFigures);
        console.log(Canvas.layoutFactory.getLayouts);
    };
    Canvas.archeTypeFactory = new archetype_factory_js_1.ArcheTypeFactory();
    Canvas.layoutFactory = new layout_factory_js_1.LayoutFactory();
    return Canvas;
}());
exports.Canvas = Canvas;

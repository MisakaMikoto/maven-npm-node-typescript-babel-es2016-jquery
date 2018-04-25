"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_js_1 = require("../canvas/canvas.js");
var TemplateManager = /** @class */ (function () {
    function TemplateManager() {
    }
    TemplateManager.prototype.dd = function () {
        TemplateManager.canvas.draw();
    };
    TemplateManager.canvas = new canvas_js_1.Canvas();
    return TemplateManager;
}());
exports.TemplateManager = TemplateManager;

// renderer functions..
// fr = function renderer

import {Layout} from "../../layout/layout.js";

export const frRendererDrawStrokeRect = (layout: Layout) => {
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.strokeRect(layout.getX, layout.getY, layout.getHeight, layout.getHeight);
    }
};
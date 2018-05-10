// layout event renderer functions..
// flr = function layout renderer

import {Layout} from "../../layout/Layout.js";

export const flrRendererDrawStrokeRect = (layout: Layout) => {
    let ctx = flrGetCanvas();
    ctx.lineWidth = 1;
    ctx.strokeRect(layout.getX, layout.getY, layout.getWidth, layout.getHeight);
};

export const flrRendererEraseStrokeRect = (layouts: Array<Layout>) => {
    let ctx = flrGetCanvas();
    ctx.clearRect(0, 0, 1200, 2000);
    flrReDraw(ctx, layouts);
};

export const flrRendererModifyStrokeRect = (layouts: Array<Layout>) => {
    flrRendererEraseStrokeRect(layouts);
};

const flrGetCanvas = (): any => {
    let ctx;
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }
    return ctx;
};

const flrReDraw = (ctx: any, layouts: Array<Layout>) => {
    layouts.forEach((value) => {
        ctx.strokeRect(value.getX, value.getY, value.getWidth, value.getHeight);
    });
};
// textbox event renderer functions..
// ftr = function textbox renderer

import {TextBox} from "../../layout/TextBox.js";

export const ftrRendererDrawStrokeRect = (textBox: TextBox) => {
    let ctx = ftrGetCanvas();
    ctx.lineWidth = 1;
    ctx.strokeRect(textBox.getX, textBox.getY, textBox.getWidth, textBox.getHeight);
};

export const ftrRendererEraseStrokeRect = (textBoxes: Array<TextBox>) => {
    let ctx = ftrGetCanvas();
    ctx.clearRect(0, 0, 1200, 2000);
    ftrReDraw(ctx, textBoxes);
};

export const ftrRendererModifyStrokeRect = (textBoxes: Array<TextBox>) => {
    ftrRendererEraseStrokeRect(textBoxes);
};

const ftrGetCanvas = (): any => {
    let ctx;
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }
    return ctx;
};

const ftrReDraw = (ctx: any, textBoxes: Array<TextBox>) => {
    textBoxes.forEach((value) => {
        ctx.strokeRect(value.getX, value.getY, value.getWidth, value.getHeight);
    });
};
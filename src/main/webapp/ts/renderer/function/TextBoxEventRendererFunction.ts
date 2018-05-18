// textbox event renderer functions..
// ftr = function textbox renderer

import {Archetype} from "../../archetype/class/ArcheType.js";

export const ftrRendererDrawStrokeRect = (textBox: Archetype) => {
    let canvas = FabricManager.canvas;
    let rect = new FabricManager.fabric.Rect({
        left: textBox.getX,
        top: textBox.getY,
        fill: 'white',
        width: textBox.getWidth,
        height: textBox.getHeight,
        stroke: textBox.getColor,
        strokeWidth: 1
    });
    canvas.add(rect);
};

export const ftrRendererEraseStrokeRect = (index: number) => {
    let canvas = FabricManager.canvas;
    let removeObject = canvas.getObjects()[index];
    canvas.remove(removeObject);
};
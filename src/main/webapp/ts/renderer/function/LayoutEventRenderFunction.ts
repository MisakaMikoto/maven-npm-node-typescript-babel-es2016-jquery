// layout event renderer functions..
// flr = function layout renderer
import {Layout} from "../../layout/Layout.js";

export const flrRendererDrawStrokeRect = (layout: Layout) => {
    let canvas = FabricManager.canvas;
    let rect = new FabricManager.fabric.Rect({
        left: layout.getX,
        top: layout.getY,
        fill: 'white',
        width: layout.getWidth,
        height: layout.getHeight,
        stroke: layout.getColor,
        strokeWidth: 1
    });
    canvas.add(rect);
};

export const flrRendererEraseStrokeRect = (index: number) => {
    let canvas = FabricManager.canvas;
    let removeObject = canvas.getObjects()[index];
    canvas.remove(removeObject);
};
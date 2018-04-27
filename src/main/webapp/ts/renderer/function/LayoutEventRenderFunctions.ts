import {Layout} from "../../layout/layout";

export const funcDrawStrokeRect = (layout: Layout) => {
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.strokeRect(layout.getX, layout.getY, layout.getHeight, layout.getHeight);
    }
};
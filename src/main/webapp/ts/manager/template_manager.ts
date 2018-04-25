import {Canvas} from "../canvas/canvas.js";

export class TemplateManager {
    private static canvas: Canvas = new Canvas();

    dd(): void {
        TemplateManager.canvas.draw();
    }
}
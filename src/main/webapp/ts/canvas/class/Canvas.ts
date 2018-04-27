import {CanvasEventManager} from "./CanvasEventManager.js";

export class Canvas {
    private static canvasEventManager: CanvasEventManager = new CanvasEventManager();

    constructor() {
        Canvas.canvasEventManager.initializeEvents();
    }
}
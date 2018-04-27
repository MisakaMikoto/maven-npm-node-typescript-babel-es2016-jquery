import {CanvasEventHandler} from "../interface/CanvasEventHandler.js";
import {LayoutEvent} from "./LayoutEvent.js";

export class CanvasEventManager implements CanvasEventHandler {
    private static layoutEvent: LayoutEvent = new LayoutEvent();

    initializeEvents(): void {
        this.addLayoutEvents();
        // this.addPreviewEvents();
    }

    addLayoutEvents(): void {
        CanvasEventManager.layoutEvent.addLayoutButtonEvent();
    }

    addPreviewEvents(): void {
    }
}
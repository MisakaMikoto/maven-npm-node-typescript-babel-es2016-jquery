import {CanvasEventHandler} from "../interface/CanvasEventHandler.js";
import {LayoutFactory} from "../../factory/class/LayoutFactory.js";
import {LayoutEventRenderer} from "../../renderer/class/LayoutEventRenderer.js";
import {CanvasLayoutEvent} from "./CanvasLayoutEvent.js";

export class CanvasEventManager implements CanvasEventHandler {
    private static canvasLayoutEvent: CanvasLayoutEvent = new CanvasLayoutEvent(new LayoutFactory(), new LayoutEventRenderer());

    initializeEvents(): void {
        this.addLayoutEvents();
        // this.addPreviewEvents();
    }

    addLayoutEvents(): void {
        CanvasEventManager.canvasLayoutEvent.addLayoutButtonEvent();
    }

    addPreviewEvents(): void {
    }
}
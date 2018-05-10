import {CanvasEventHandler} from "../interface/CanvasEventHandler.js";
import {LayoutFactory} from "../../factory/class/LayoutFactory.js";
import {LayoutEventRenderer} from "../../renderer/class/LayoutEventRenderer.js";
import {CanvasLayoutEvent} from "./CanvasLayoutEvent.js";
import {TextBoxEventRenderer} from "../../renderer/class/TextBoxEventRenderer.js";
import {CanvasTextBoxEvent} from "./CanvasTextBoxEvent.js";
import {TextBoxFactory} from "../../factory/class/TextBoxFactory.js";
import {flmBindTabEvent, flmChangeTab} from "../function/LayoutEventManagerFunction.js";

export class CanvasEventManager implements CanvasEventHandler {
    private static canvasLayoutEvent: CanvasLayoutEvent =
        new CanvasLayoutEvent(new LayoutFactory(), new LayoutEventRenderer());

    private static canvasTextBoxEvent: CanvasTextBoxEvent =
        new CanvasTextBoxEvent(new TextBoxFactory(), new TextBoxEventRenderer());

    initializeEvents(): void {
        this.addLayoutEvents();
        this.addTabEvents();
    }

    addLayoutEvents(): void {
        CanvasEventManager.canvasLayoutEvent.addLayoutButtonEvents();
    }

    addTextBoxEvents(): void {
        CanvasEventManager.canvasTextBoxEvent.addTextBoxButtonEvents();
    }

    addTabEvents(): void {
        flmBindTabEvent(this.changeTab.bind(this));
    }

    private changeTab(elementName: string): void {
        flmChangeTab(elementName);
    }
}
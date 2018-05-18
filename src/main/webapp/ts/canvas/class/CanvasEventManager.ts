import {CanvasEventHandler} from "../interface/CanvasEventHandler.js";
import {CanvasLayoutEvent} from "./CanvasLayoutEvent.js";
import {LayoutFactory} from "../../factory/class/LayoutFactory.js";
import {LayoutEventRenderer} from "../../renderer/class/LayoutEventRenderer.js";
import {CanvasTextBoxEvent} from "./CanvasTextBoxEvent.js";
import {TextBoxFactory} from "../../factory/class/TextBoxFactory.js";
import {TextBoxEventRenderer} from "../../renderer/class/TextBoxEventRenderer.js";
import {flmBindTabEvent, flmChangeTab} from "../function/LayoutEventManagerFunction.js";

export class CanvasEventManager implements CanvasEventHandler {
    private canvasLayoutEvent: CanvasLayoutEvent =
        new CanvasLayoutEvent(new LayoutFactory(), new LayoutEventRenderer());

    private canvasTextBoxEvent: CanvasTextBoxEvent =
        new CanvasTextBoxEvent(new TextBoxFactory(), new TextBoxEventRenderer());

    initializeEvents(): void {
        this.addTabEvents();
        this.addLayoutEvents();
        this.addTextBoxEvents();
    }

    addLayoutEvents(): void {
        this.canvasLayoutEvent.addLayoutButtonEvents();
    }

    addTextBoxEvents(): void {
        this.canvasTextBoxEvent.addTextBoxButtonEvents();
    }

    addTabEvents(): void {
        flmBindTabEvent(this.changeTab.bind(this));
    }

    private changeTab(elementName: string): void {
        flmChangeTab(elementName);
    }
}
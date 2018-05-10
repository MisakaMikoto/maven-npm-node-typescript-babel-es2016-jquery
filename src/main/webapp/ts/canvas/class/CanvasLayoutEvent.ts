import {
    flrRendererDrawStrokeRect,
    flrRendererEraseStrokeRect, flrRendererModifyStrokeRect
} from "../../renderer/function/LayoutEventRenderFunction.js";
import {Layout} from "../../layout/Layout.js";
import {CanvasEvent} from "./CanvasEvent.js";
import {
    flBindAddEvent, flBindModifyEvent, flBindRemoveEvent, flGetAddLayoutInformation, flGetModifyLayoutInformation
} from "../function/LayoutEventFunction.js";

export class CanvasLayoutEvent extends CanvasEvent {
    addLayoutButtonEvents(): void {
        flBindAddEvent(this.addLayout.bind(this));
        flBindRemoveEvent(this.removeLayout.bind(this));
        flBindModifyEvent(this.modifyLayout.bind(this));
    }

    private addLayout(eventTargetElement: JQuery): void {
        let layout = this.getAddRectangleInformation(eventTargetElement);
        this.getRenderer.draw(flrRendererDrawStrokeRect, layout);
    }

    private removeLayout(index: number): void {
        this.getRemoveRectangleInformation(index);
        this.getRenderer.erase(flrRendererEraseStrokeRect, this.getFactory.getArchetypes());
    }

    private modifyLayout(index: number, eventTargetElement: JQuery): void {
        this.getModifyRectangleInformation(index, eventTargetElement);
        this.getRenderer.modify(flrRendererModifyStrokeRect, this.getFactory.getArchetypes());
    }

    private getAddRectangleInformation(eventTargetElement: JQuery): Layout {
        let information = flGetAddLayoutInformation(eventTargetElement);
        let layout = this.getFactory.operate(information.getX, information.getY, information.getWidth, information.getHeight, Layout);
        return layout;
    }

    private getRemoveRectangleInformation(index: number): void {
        this.getFactory.breakDown(index);
    }

    private getModifyRectangleInformation(index: number, eventTargetElement: JQuery): Layout {
        let information = flGetModifyLayoutInformation(eventTargetElement);
        let layout = this.getFactory.change(index, information.getX, information.getY, information.getWidth, information.getHeight, Layout);
        return layout;
    }
}


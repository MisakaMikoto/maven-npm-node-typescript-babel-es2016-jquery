import {frRendererDrawStrokeRect} from "../../renderer/function/LayoutEventRenderFunctions.js";
import {Layout} from "../../layout/layout.js";
import {CanvasEvent} from "./CanvasEvent.js";
import {flBindClickAddEvent, flGetLayoutInformation} from "../function/LayoutEventFunction.js";

export class CanvasLayoutEvent extends CanvasEvent {
    addLayoutButtonEvent(): void {
        flBindClickAddEvent(this.addLayout.bind(this));
    }

    addLayout(): void {
        let information = flGetLayoutInformation();
        let layout = this.getFactory.operate(information.x, information.y, information.width, information.height, Layout);
        this.getRenderer.draw(frRendererDrawStrokeRect, layout);
    }

    removeLayout(index: number): void {
        this.getFactory.getLayouts.splice(index, 1);
    }
}


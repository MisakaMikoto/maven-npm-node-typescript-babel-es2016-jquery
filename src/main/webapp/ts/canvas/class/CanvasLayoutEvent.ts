import {CanvasEvent} from "./CanvasEvent.js";
import {
    flBindAddEvent, flBindRemoveEvent, flCreateKey, flGetAddLayoutInformation, flRemoveLayout
} from "../function/LayoutEventFunction.js";
import {
    flrRendererDrawStrokeRect, flrRendererEraseStrokeRect
} from "../../renderer/function/LayoutEventRenderFunction.js";
import {Layout} from "../../layout/Layout.js";
import {SubLayout} from "../../layout/SubLayout.js";

export class CanvasLayoutEvent extends CanvasEvent {
    addLayoutButtonEvents(): void {
        flBindAddEvent(this.addLayout.bind(this));
        flBindRemoveEvent(this.removeLayout.bind(this));
        // flBindModifyEvent(this.modifyLayout.bind(this));
    }

    private addLayout(eventTargetElement: JQuery): void {
        let layout = this.getAddRectangleInformation(eventTargetElement);
        flCreateKey(eventTargetElement, layout.getKey);
        this.getRenderer.draw(flrRendererDrawStrokeRect, layout);
    }

    private removeLayout(eventTargetElement: JQuery, key: string): void {
        let removeIndex = this.getRemoveRectangleInformation(key);
        flRemoveLayout(eventTargetElement);
        this.getRenderer.erase(flrRendererEraseStrokeRect, removeIndex);
    }

    // private modifyLayout(index: number, eventTargetElement: JQuery): void {
    //     this.getModifyRectangleInformation(index, eventTargetElement);
    //     let elements = this.getFactory.getLayouts.concat(this.getFactory.getSubLayouts, this.getFactory.getTextBoxes);
    //     this.getRenderer.modify(flrRendererModifyStrokeRect, elements);
    // }

    private getAddRectangleInformation<T extends Layout>(eventTargetElement: JQuery): Layout {
        let layout = flGetAddLayoutInformation(eventTargetElement);
        this.getFactory.push(layout);

        if(layout instanceof SubLayout) {
            return this.getFactory.operate(layout.getX, layout.getY, layout.getWidth, layout.getHeight, layout.getColor, SubLayout);

        } else {
            return this.getFactory.operate(layout.getX, layout.getY, layout.getWidth, layout.getHeight, layout.getColor, Layout);
        }
    }

    private getRemoveRectangleInformation(key: string): number {
        let removeIndex = 0;
        this.getFactory.getLayouts.forEach((value: any, index: number) => {
            if(key == value.getKey) {
                removeIndex = index;
                return;
            }
        });
        this.getFactory.remove(removeIndex);
        return removeIndex;
    }

    // private getModifyRectangleInformation(index: number, eventTargetElement: JQuery): void {
    //     let layout = flGetModifyLayoutInformation(eventTargetElement);
    //     this.getFactory.modify(index, layout);
    //
    //     if(layout instanceof SubLayout) {
    //         this.getFactory.operate(layout.getX, layout.getY, layout.getWidth, layout.getHeight, SubLayout);
    //
    //     } else {
    //         this.getFactory.operate(layout.getX, layout.getY, layout.getWidth, layout.getHeight, Layout);
    //     }
    // }
}


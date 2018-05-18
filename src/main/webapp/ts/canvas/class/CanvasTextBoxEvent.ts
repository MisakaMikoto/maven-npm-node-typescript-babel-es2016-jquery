import {CanvasEvent} from "./CanvasEvent.js";
import {
    ftBindAddEvent, ftBindRemoveEvent, ftGetAddLayoutInformation,
    ftRemoveLayout
} from "../function/TextBoxEventFunction.js";
import {
    ftrRendererDrawStrokeRect, ftrRendererEraseStrokeRect
} from "../../renderer/function/TextBoxEventRendererFunction.js";
import {TextBox} from "../../layout/TextBox.js";
import {flrRendererEraseStrokeRect} from "../../renderer/function/LayoutEventRenderFunction.js";

export class CanvasTextBoxEvent extends CanvasEvent {
    addTextBoxButtonEvents(): void {
        ftBindAddEvent(this.addTextBox.bind(this));
        ftBindRemoveEvent(this.removeLayout.bind(this));
        // ftBindModifyEvent(this.modifyLayout.bind(this));
    }

    private addTextBox(eventTargetElement: JQuery): void {
        let textBox = this.getAddRectangleInformation(eventTargetElement);
        this.getRenderer.draw(ftrRendererDrawStrokeRect, textBox);
    }

    private removeLayout(eventTargetElement: JQuery, key: string): void {
        let removeIndex = this.getRemoveRectangleInformation(key);
        ftRemoveLayout(eventTargetElement);
        this.getRenderer.erase(ftrRendererEraseStrokeRect, removeIndex);
    }

    // private modifyLayout(index: number, eventTargetElement: JQuery): void {
    //     this.getModifyRectangleInformation(index, eventTargetElement);
    //     this.getRenderer.modify(ftrRendererModifyStrokeRect, this.getFactory.getTextBoxes);
    // }

    private getAddRectangleInformation(eventTargetElement: JQuery): TextBox {
        let textBox = ftGetAddLayoutInformation(eventTargetElement);
        this.getFactory.push(textBox);
        return this.getFactory.operate(textBox.getX, textBox.getY, textBox.getWidth, textBox.getHeight, textBox.getColor, TextBox);
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
    //     let textBox = ftGetModifyLayoutInformation(eventTargetElement);
    //     this.getFactory.modify(index, textBox);
    //     this.getFactory.operate(textBox.getX, textBox.getY, textBox.getWidth, textBox.getHeight, textBox.getColor, TextBox);
    // }
}
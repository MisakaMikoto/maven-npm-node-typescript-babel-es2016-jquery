import {TextBox} from "../../layout/TextBox.js";
import {Renderer} from "./Renderer.js";

export class TextBoxEventRenderer extends Renderer{
    draw<T extends TextBox>(renderDrawFunction: Function, layout: T): void {
        renderDrawFunction.apply(renderDrawFunction, [layout]);
    }

    erase<T extends TextBox>(renderEraseFunction: Function, layouts: Array<TextBox>): void {
        renderEraseFunction.apply(renderEraseFunction, [layouts]);
    }

    modify<T extends TextBox>(renderModifyFunction: Function, layouts: Array<TextBox>): void {
        renderModifyFunction.apply(renderModifyFunction, [layouts]);
    }
}
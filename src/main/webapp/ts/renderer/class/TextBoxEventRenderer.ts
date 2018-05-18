import {TextBox} from "../../layout/TextBox.js";
import {Archetype} from "../../archetype/class/ArcheType.js";
import {Renderer} from "./Renderer.js";

export class TextBoxEventRenderer extends Renderer{
    draw<T extends TextBox>(renderDrawFunction: Function, ctx: any, textBox: T): void {
        renderDrawFunction.apply(renderDrawFunction, [ctx, textBox]);
    }

    erase<T extends TextBox>(renderEraseFunction: Function, ctx: any, textBoxes: Array<Archetype>): void {
        renderEraseFunction.apply(renderEraseFunction, [ctx, textBoxes]);
    }

    modify<T extends TextBox>(renderModifyFunction: Function, ctx: any, elements: Array<Archetype>): void {
        renderModifyFunction.apply(renderModifyFunction, [ctx, elements]);
    }
}
import {Layout} from "../../layout/Layout.js";
import {Archetype} from "../../archetype/class/ArcheType.js";
import {Renderer} from "./Renderer.js";

export class LayoutEventRenderer extends Renderer{
    draw<T extends Layout>(renderDrawFunction: Function, ctx: any, layout: T): void {
        renderDrawFunction.apply(renderDrawFunction, [ctx, layout]);
    }

    erase<T extends Layout>(renderEraseFunction: Function, ctx: any, layouts: Array<Archetype>): void {
        renderEraseFunction.apply(renderEraseFunction, [ctx, layouts]);
    }

    modify<T extends Layout>(renderModifyFunction: Function, ctx: any, layouts: Array<Archetype>): void {
        renderModifyFunction.apply(renderModifyFunction, [ctx, layouts]);
    }
}
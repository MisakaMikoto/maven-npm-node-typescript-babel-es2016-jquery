import {Renderer} from "./Renderer.js";
import {Layout} from "../../layout/Layout.js";

export class LayoutEventRenderer extends Renderer{
    draw<T extends Layout>(renderDrawFunction: Function, layout: T): void {
        renderDrawFunction.apply(renderDrawFunction, [layout]);
    }

    erase<T extends Layout>(renderEraseFunction: Function, layouts: Array<Layout>): void {
        renderEraseFunction.apply(renderEraseFunction, [layouts]);
    }

    modify<T extends Layout>(renderModifyFunction: Function, layouts: Array<Layout>): void {
        renderModifyFunction.apply(renderModifyFunction, [layouts]);
    }
}
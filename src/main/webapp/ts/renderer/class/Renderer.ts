import {Layout} from "../../layout/layout.js";
import {Drawable} from "../interface/Drawable.js";

export class Renderer implements Drawable{
    draw<T extends Layout>(renderDrawFunction: Function, layout: T) {
        renderDrawFunction(layout);
    }

    erase<T extends Layout>(renderEraseFunction: Function) {
        renderEraseFunction();
    }
}
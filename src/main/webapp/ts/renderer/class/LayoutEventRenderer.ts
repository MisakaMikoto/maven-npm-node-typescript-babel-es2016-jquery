import {Layout} from "../../layout/layout.js";
import {Drawable} from "../interface/Drawable.js";

export class LayoutEventRenderer implements Drawable{
    draw<T extends Layout>(renderFunction: Function, layout: T) {
        renderFunction(layout);
    }
}
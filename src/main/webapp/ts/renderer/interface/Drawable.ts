import {Layout} from "../../layout/layout.js";

export interface Drawable {
    draw<T extends Layout>(renderFunction: Function, layout: T): void;
}
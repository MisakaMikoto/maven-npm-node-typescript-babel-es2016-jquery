import {Layout} from "../../layout/layout";

export interface Drawable {
    draw<T extends Layout>(renderFunction: Function, layout: T): void;
}
import {Factory} from "./factory.js";
import {Drawable} from "../interface/drawable.js";
import {Rectangle} from "./rectangle.js";

export class DSCanvas implements Drawable{
    private static factory: Factory = new Factory();

    draw(): void {
        DSCanvas.factory.create(1, 1, 100, 100, Rectangle);
        alert(DSCanvas.factory.getFigures.length);
    }
}
import {Runnable} from "../interface/Runnable.js";
import {Layout} from "../../layout/Layout.js";
import {TextBox} from "../../layout/TextBox.js";
import {Archetype} from "../../archetype/class/ArcheType.js";

export abstract class Factory implements Runnable {
    private layouts: Array<Layout> = [];
    private textBoxes: Array<TextBox> = [];

    public operate<T extends Archetype>
    (x: number, y: number, width: number, height: number, color: string,
     targetObject: new(x: number, y: number, width: number, heigth: number, color: string)
        => T): Archetype {

        let obj = new targetObject(x, y, width, height, color);
        return obj;
    };

    push<T extends Archetype>(element: T): void {
        throw new Error("Method not implemented.");
    }

    modify<T extends Archetype>(index: number, element: T): void {
        throw new Error("Method not implemented.");
    }

    remove<T extends Archetype>(index: number): void {
        throw new Error("Method not implemented.");
    }

    public get getLayouts(): Array<Layout> {
        return this.layouts;
    }

    public get getTextBoxes(): Array<TextBox> {
        return this.textBoxes;
    }
}
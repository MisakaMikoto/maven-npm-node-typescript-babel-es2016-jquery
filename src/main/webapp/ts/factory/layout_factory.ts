import {Layout} from "../layout/layout.js";
import {Operator} from "./interface/operator.js";

export class LayoutFactory implements Operator{
    private layouts: Array<Layout> = [];

    public operate<T extends Layout>(x: number, y: number, width: number, height: number, targetObject: new(x: number, y: number, width: number, heigth: number) => T): void {
        let obj = new targetObject(x, y, width, height);
        this.push(obj);
    };

    public push<T extends Layout>(targetObject: T): void {
        this.layouts.push(targetObject);
    }

    public get getLayouts(): Array<Layout> {
        return this.layouts;
    }
}
import {Runnable} from "../interface/Runnable.js";
import {Layout} from "../../layout/layout.js";

export class Factory implements Runnable{
    private layouts: Array<Layout> = [];

    public operate<T extends Layout>(x: string, y: string, width: string, height: string, targetObject: new(x: string, y: string, width: string, heigth: string) => T): Layout {
        let obj = new targetObject(x, y, width, height);
        this.push(obj);

        return obj;
    };

    private push<T extends Layout>(targetObject: T): void {
        this.layouts.push(targetObject);
    }

    public get getLayouts(): Array<Layout> {
        return this.layouts;
    }
};
import {Layout} from "../../layout/Layout.js";
import {Factory} from "./Factory.js";

export class LayoutFactory extends Factory{
    public operate<T extends Layout>
    (x: number, y: number, width: number, height: number, targetObject: new(x: number, y: number, width: number, heigth: number)
        => T): Layout {

        let obj = new targetObject(x, y, width, height);
        this.push(obj);

        return obj;
    };

    public change<T extends Layout>
    (index: number, x: number, y: number, width: number, height: number, targetObject: new(x: number, y: number, width: number, heigth: number)
        => T): Layout {

        let obj = new targetObject(x, y, width, height);
        this.modify(index, obj);

        return obj;
    };

    public breakDown(index: number): void {
        this.remove(index);
    };

    private push<T extends Layout>(targetObject: T): void {
        this.getArchetypes().push(targetObject);
    };

    private remove(index: number): void {
        this.getArchetypes().splice(index, 1);
    };

    private modify(index: number, layout: Layout): void {
        this.getArchetypes()[index] = layout;
    }
}
import {TextBox} from "../../layout/TextBox.js";
import {Factory} from "./Factory.js";

export class TextBoxFactory extends Factory{
    public operate<T extends TextBox>
    (x: number, y: number, width: number, height: number, targetObject: new(x: number, y: number, width: number, heigth: number)
        => T): TextBox {

        let obj = new targetObject(x, y, width, height);
        this.push(obj);

        return obj;
    };

    public change<T extends TextBox>
    (index: number, x: number, y: number, width: number, height: number, targetObject: new(x: number, y: number, width: number, heigth: number)
        => T): TextBox {

        let obj = new targetObject(x, y, width, height);
        this.modify(index, obj);

        return obj;
    };

    public breakDown(index: number): void {
        this.remove(index);
    };

    private push<T extends TextBox>(targetObject: T): void {
        this.getArchetypes().push(targetObject);
    };

    private remove(index: number): void {
        this.getArchetypes().splice(index, 1);
    };

    private modify(index: number, layout: TextBox): void {
        this.getArchetypes()[index] = layout;
    }
}
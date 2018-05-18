import {Layout} from "../../layout/Layout.js";
import {Factory} from "./Factory.js";

export class LayoutFactory extends Factory{
    public push(layout: Layout): void {
        this.getLayouts.push(layout);
    };

    public modify(index: number, layout: Layout): void {
        this.getLayouts[index] = layout;
    };

    public remove(index: number): void {
        this.getLayouts.splice(index, 1);
    };
}
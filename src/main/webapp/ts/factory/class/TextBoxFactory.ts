import {TextBox} from "../../layout/TextBox.js";
import {Factory} from "./Factory.js";

export class TextBoxFactory extends Factory{
    public push(textBox: TextBox): void {
        this.getTextBoxes.push(textBox);
    };

    public modify(index: number, textBox: TextBox): void {
        this.getTextBoxes[index] = textBox;
    };

    public remove(index: number): void {
        this.getTextBoxes.splice(index, 1);
    };
}
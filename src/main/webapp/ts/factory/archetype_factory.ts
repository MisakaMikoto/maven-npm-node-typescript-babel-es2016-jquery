import {Figure} from "../archetype/archetype.js";
import {Operator} from "./interface/operator.js";

export class ArcheTypeFactory implements Operator{
    private figures: Array<Figure> = [];

    public operate<T extends Figure>(x: number, y: number, width: number, height: number, targetObject: new(x: number, y: number, width: number, heigth: number) => T): void {
        let obj = new targetObject(x, y, width, height);
        this.push(obj);
    };

    public push<T extends Figure>(targetObject: T): void {
        this.figures.push(targetObject);
    }

    public get getFigures(): Array<Figure> {
        return this.figures;
    }
};
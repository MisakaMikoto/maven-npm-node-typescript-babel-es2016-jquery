import {Figure} from "./figure.js";

export class Factory {
    private figures: Array<Figure> = [];

    public create<T extends Figure>(x: number, y: number, width: number, height: number, targetObject: new(x: number, y: number, width: number, heigth: number) => T): void {
        let obj = new targetObject(x, y, width, height);
        this.push(obj);
    };

    private push<T extends Figure>(targetObject: T): void {
        this.figures.push(targetObject);
    }

    public get getFigures(): Array<Figure> {
        return this.figures;
    }
};
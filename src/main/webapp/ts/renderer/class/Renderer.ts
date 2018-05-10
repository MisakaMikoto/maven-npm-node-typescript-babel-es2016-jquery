import {Drawable} from "../interface/Drawable.js";
import {Archetype} from "../../archetype/class/ArcheType.js";

export abstract class Renderer implements Drawable {
    draw<T extends Archetype>(renderFunction: Function, layout: T): void {
        throw new Error("Method not implemented.");
    }
    erase<T extends Archetype>(renderEraseFunction: Function, layouts: Archetype[]): void {
        throw new Error("Method not implemented.");
    }
    modify<T extends Archetype>(renderModifyFunction: Function, layouts: Archetype[]): void {
        throw new Error("Method not implemented.");
    }
}
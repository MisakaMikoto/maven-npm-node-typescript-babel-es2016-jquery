import {Runnable} from "../interface/Runnable.js";
import {Archetype} from "../../archetype/class/ArcheType.js";

export abstract class Factory implements Runnable {
    private archeTypes: Array<Archetype> = [];

    operate<T extends Archetype>(x: number, y: number, width: number, height: number, T: any): Archetype {
        throw new Error("Method not implemented.");
    }
    change<T extends Archetype>(index: number, x: number, y: number, width: number, height: number, T: any): Archetype {
        throw new Error("Method not implemented.");
    }
    breakDown(index: number): void {
        throw new Error("Method not implemented.");
    }

    public getArchetypes(): Array<Archetype> {
        return this.archeTypes;
    }
}
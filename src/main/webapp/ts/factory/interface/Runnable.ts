import {Archetype} from "../../archetype/class/ArcheType.js";

export interface Runnable {
    operate<T extends Archetype>(x: number, y: number, width: number, height: number, T:any): Archetype;

    change<T extends Archetype>
    (index: number, x: number, y: number, width: number, height: number, T: any): Archetype;

    breakDown(index: number): void;
}
import {Archetype} from "../../archetype/class/ArcheType.js";

export interface Runnable {
    operate<T extends Archetype>(x: number, y: number, width: number, height: number, color: string, T:any): Archetype;

    push<T extends Archetype>(element: T): void;

    modify<T extends Archetype>(index: number, element: T): void;

    remove<T extends Archetype>(index: number, element: T): void;
}
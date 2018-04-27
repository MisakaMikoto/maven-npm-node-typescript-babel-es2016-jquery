import {Archetype} from "../../archetype/class/ArcheType";

export interface Runnable {
    operate<T extends Archetype>(x: string, y: string, width: string, height: string, T:any): Archetype;
}
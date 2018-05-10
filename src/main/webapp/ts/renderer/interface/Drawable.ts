import {Archetype} from "../../archetype/class/ArcheType.js";

export interface Drawable {
    draw<T extends Archetype>(renderFunction: Function, layout: T): void;
    erase<T extends Archetype>(renderEraseFunction: Function, layouts: Array<Archetype>): void;
    modify<T extends Archetype>(renderModifyFunction: Function, layouts: Array<Archetype>): void;
}
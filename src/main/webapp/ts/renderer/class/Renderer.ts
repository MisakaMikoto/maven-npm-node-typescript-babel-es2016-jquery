import {Archetype} from "../../archetype/class/ArcheType.js";

export abstract class Renderer{
    draw<T extends Archetype>(renderFunction: Function, ctx: any, layout: T): void {
        throw new Error("Method not implemented.");
    }
    erase<T extends Archetype>(renderEraseFunction: Function, ctx: any, elements: Array<Archetype>): void {
        throw new Error("Method not implemented.");
    }
    modify<T extends Archetype>(renderModifyFunction: Function, ctx: any, elements: Array<Archetype>): void {
        throw new Error("Method not implemented.");
    }
}
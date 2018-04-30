import {Factory} from "../../factory/class/Factory.js";
import {Renderer} from "../../renderer/class/Renderer.js";

export class CanvasEvent {
    protected factory: Factory;
    protected renderer: Renderer;

    constructor(factory: Factory, renderer: Renderer) {
        this.factory = factory;
        this.renderer = renderer;
    }

    public get getFactory(): Factory {
        return this.factory;
    }

    public get getRenderer(): Renderer {
        return this.renderer;
    }
}
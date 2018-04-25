import {Renderer} from "../renderer/interface/renderer.js";
import {ArcheTypeFactory} from "../factory/archetype_factory.js";
import {LayoutFactory} from "../factory/layout_factory.js";
import {Rectangle} from "../archetype/rectangle.js";

export class Canvas implements Renderer{
    private static archeTypeFactory: ArcheTypeFactory = new ArcheTypeFactory();
    private static layoutFactory: LayoutFactory = new LayoutFactory();

    draw(): void {
        Canvas.archeTypeFactory.operate(1,1,100,100, Rectangle);
        // Canvas.layoutFactory.operate(1,1,100,100, Rectangle);

        console.log(Canvas.archeTypeFactory.getFigures);
        console.log(Canvas.layoutFactory.getLayouts);
    }
}
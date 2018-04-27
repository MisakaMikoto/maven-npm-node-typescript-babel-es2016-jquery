import {Factory} from "../../factory/class/Factory.js";
import {LayoutEventRenderer} from "../../renderer/class/LayoutEventRenderer.js";
import {funcDrawStrokeRect} from "../../renderer/function/LayoutEventRenderFunctions.js";
import {Layout} from "../../layout/layout.js";

export class LayoutEvent  {
    private static factory: Factory = new Factory();
    private static renderer: LayoutEventRenderer = new LayoutEventRenderer();

    addLayoutButtonEvent(): void {
        $('#addLayoutBtn').click( () => {
            let layout = this.getLayoutInformation();
            LayoutEvent.renderer.draw(funcDrawStrokeRect, layout);
        });
    }

    private getLayoutInformation(): Layout {
        let currentLayout = $('.layout').last();

        let x = <string> currentLayout.find('.x').val();
        let y = <string> currentLayout.find('.y').val();
        let width = <string> currentLayout.find('.width').val();
        let height = <string> currentLayout.find('.height').val();

        return LayoutEvent.factory.operate(x, y, width, height, Layout);
    }
}


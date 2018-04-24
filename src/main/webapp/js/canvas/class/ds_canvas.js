function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Factory } from "./factory.js";
import { Rectangle } from "./rectangle.js";
export class DSCanvas {
  draw() {
    DSCanvas.factory.create(1, 1, 100, 100, Rectangle);
    console.log(DSCanvas.factory.getFigures);
  }

}

_defineProperty(DSCanvas, "factory", new Factory());
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class Figure {
  constructor(x, y, width, height) {
    _defineProperty(_defineProperty(_defineProperty(_defineProperty(this, "x", void 0), "y", void 0), "width", void 0), "height", void 0);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

}
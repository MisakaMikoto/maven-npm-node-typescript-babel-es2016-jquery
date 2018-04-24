function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class Factory {
  constructor() {
    _defineProperty(this, "figures", []);
  }

  create(x, y, width, height, targetObject) {
    let obj = new targetObject(x, y, width, height);
    this.push(obj);
  }

  push(targetObject) {
    this.figures.push(targetObject);
  }

  get getFigures() {
    return this.figures;
  }

}
;
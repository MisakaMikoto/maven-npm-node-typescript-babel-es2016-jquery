export class Archetype {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };

    public get getX(): number {
        return this.x;
    }

    public get getY(): number {
        return this.y;
    }

    public get getWidth(): number {
        return this.width;
    }

    public get getHeight(): number {
        return this.height;
    }
}

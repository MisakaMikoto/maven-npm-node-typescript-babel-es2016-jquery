export class Archetype {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(x: string, y: string, width: string, height: string) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.width = parseInt(width);
        this.height = parseInt(height);
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

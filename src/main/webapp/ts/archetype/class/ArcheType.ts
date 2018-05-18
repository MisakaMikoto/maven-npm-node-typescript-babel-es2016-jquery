export class Archetype {
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private color: string;
    private key: string;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.key = new Date().toString();
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

    public get getColor(): string {
        return this.color;
    }

    public get getKey(): string {
        return this.key;
    }
}

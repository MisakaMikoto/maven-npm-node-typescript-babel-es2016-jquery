export interface Operator {
    operate(x: number, y: number, width: number, height: number, T): void;
    push(T):void;
}
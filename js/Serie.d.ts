interface Value {
    x: number;
    y: number;
}
declare class Serie {
    id: number;
    values: Array<Value>;
    constructor(y0: number, func: Function, n: number);
}
export { Value, Serie };

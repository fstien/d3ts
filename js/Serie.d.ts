interface Value {
    x: number;
    y: number;
}
export default class Serie {
    id: number;
    values: Array<Value>;
    constructor(y0: number, func: Function, n: number);
}
export {};

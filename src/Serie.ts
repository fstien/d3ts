
interface Value {
    x: number;
    y: number;   
}

class Serie { 
    id: number;
    values: Array<Value> = [];

    constructor(y0: number, func: Function, n: number) {
        this.id = (Math.floor(Math.random()*1000000) + 1);

        this.values.push({x: 0, y: y0});

        for (let t = 1; t <= n; t++) {
            this.values.push({
                x: t, 
                y: func(this.values[t-1].y)
            });
        };
    }

}

export {
    Value, 
    Serie
}
class Serie {
    constructor(y0, func, n) {
        this.values = [];
        this.id = (Math.floor(Math.random() * 1000000) + 1);
        this.values.push({ x: 0, y: y0 });
        for (let t = 1; t <= n; t++) {
            this.values.push({
                x: t,
                y: func(this.values[t - 1].y)
            });
        }
        ;
    }
}
export { Serie };
//# sourceMappingURL=Serie.js.map
import * as d3 from 'd3';
export default class GraphSVG {
    constructor(height, width, padding) {
        this.height = height;
        this.width = width;
        this.padding = padding;
        this.svg = d3
            .select("body")
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height);
    }
}
//# sourceMappingURL=GraphSVG.js.map
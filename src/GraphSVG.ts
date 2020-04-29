import * as d3 from 'd3';

export default class GraphSVG {
    height: number 
    width: number
    padding: number 
    svg: any

    constructor(height: number, width: number, padding: number) {
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
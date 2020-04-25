import * as d3 from 'd3';
export default class Plot {
    constructor(graphSvg, scale, serie) {
        this.id = "id" + serie.id;
        this.graphSvg = graphSvg;
        this.scale = scale;
        this.serie = serie;
        this.line = d3
            .line()
            .x(function (v) { return scale.xScale(v.x); })
            .y(function (v) { return scale.yScale(v.y); });
        this.svgRef = graphSvg.svg
            .selectAll("path.line#" + this.id)
            .data([this.serie.values.slice(0, 5)])
            .enter()
            .append("path")
            .attr("d", this.line)
            .attr("class", "line")
            .attr("id", this.id)
            .attr("fill", "none")
            .attr("stroke", "black");
    }
    drawAll() {
    }
}
//# sourceMappingURL=Plot.js.map
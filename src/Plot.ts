
import * as d3 from 'd3';
import Scale from "./Scale";
import Serie from "./Serie";
import GraphSVG from './GraphSVG';


export default class Plot { 
    id: string;

    graphSvg: GraphSVG;
    scale: Scale;
    serie: Serie;

    line: any;
    svgRef: any;

    constructor(graphSvg: GraphSVG, scale: Scale, serie: Serie) {
        this.id = "id" + serie.id;
        this.graphSvg = graphSvg
        this.scale = scale;
        this.serie = serie;
        
        this.line = d3
            .line()
            .x(function(v) { return scale.xScale(v.x); })
            .y(function(v) { return scale.yScale(v.y); });

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
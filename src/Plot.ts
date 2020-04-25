
import * as d3 from 'd3';
import {Scale, ScaleObserver} from "./Scale";
import {Serie, Value} from "./Serie";
import GraphSVG from './GraphSVG';


export default class Plot implements ScaleObserver { 
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
        
        this.drawAll();

        this.scale.observers.push(this)
    }

    drawAll() {
        this.line = d3
            .line()
            .x(function(v: Value) { return this.scale.xScale(v.x); }.bind(this))
            .y(function(v: Value) { return this.scale.yScale(v.y); }.bind(this));

        this.svgRef = this.graphSvg.svg
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

    update(event: string): void {
        console.log(event);
        this.updateGraph();
    }

    updateGraph() {
        this.line = d3
            .line()
            .x(function(v: Value) { return this.scale.xScale(v.x); }.bind(this))
            .y(function(v: Value) { return this.scale.yScale(v.y); }.bind(this));


        this.graphSvg.svg
            .selectAll("path.line#" + this.id)
            .data([this.serie.values.slice(0,5)])
            .attr("d", this.line)
            .attr("class", "line")
            .attr("stroke", "black");
    }
}
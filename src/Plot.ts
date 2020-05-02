
import * as d3 from 'd3';
import {Scale, ScaleObserver} from "./Scale";
import {Serie, Value} from "./Serie";
import GraphSVG from './GraphSVG';
import transitionConfig from './TransitionConfig';


export default class Plot implements ScaleObserver { 
    id: string;

    graphSvg: GraphSVG;
    scale: Scale;
    serie: Serie;

    count: number;
    start: number = 0;
    stop: number = 1;

    line: any;

    constructor(graphSvg: GraphSVG, scale: Scale, serie: Serie) {
        this.id = "id" + serie.id;
        this.graphSvg = graphSvg
        this.scale = scale;
        this.serie = serie;
        this.count = this.serie.values.length;

        this.scale.observers.push(this)
        
        this.line = d3
            .line()
            .x(function(v: Value) { return scale.xScale(v.x); }.bind(this))
            .y(function(v: Value) { return scale.yScale(v.y); }.bind(this));

        this.graphSvg.svg
            .selectAll("path.line#" + this.id)
            .data([this.serie.values.slice(this.start, this.stop)])
            .enter()
            .append("path")
            .attr("d", this.line)
            .attr("class", "line")
            .attr("id", this.id)
            .attr("fill", "none")
            .attr("stroke", "black");
    }

    showAll() {
        this.start = 0;
        this.stop = this.count;
        this.render();
    }

    showAllSequential(duration: number) {
        for (let t = 1; t <= this.count; t++) {
            setTimeout(function() {
                this.showOneMore();
            }.bind(this), t*(duration/this.count));
        }
    }

    showOneMore() {
        this.stop++;
        this.render()
    }

    render() {
        this.graphSvg.svg
            .selectAll("path.line#" + this.id)
            .data([this.serie.values.slice(this.start, this.stop)])
            .attr("d", this.line);
    }

    transition() {
        this.graphSvg.svg
            .selectAll("path.line#" + this.id)
            .transition()
            .ease(transitionConfig.ease)
            .duration(transitionConfig.duration)
            .attr("d", this.line);
    }
}
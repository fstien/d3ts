
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
    withCircles: Boolean

    count: number;
    start: number = 0;
    stop: number = 1;

    line: any;
    circles: any;

    constructor(graphSvg: GraphSVG, scale: Scale, serie: Serie, withCircles: Boolean = false) {
        this.id = "id" + serie.id;
        this.graphSvg = graphSvg
        this.scale = scale;
        this.serie = serie;
        this.count = this.serie.values.length;
        this.withCircles = withCircles;

        this.scale.observersPlots.push(this)
        
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
        
        if (this.withCircles) {
            this.circles = this.graphSvg.svg
                .append("g")
                .attr("id", this.id)
                .selectAll("circle")
                .data(this.serie.values.slice(this.start, this.stop - 1));
            
            this.circles
                .enter()
                .append("circle")
                .attr("cx", function(v: Value) {
                    return this.scale.xScale(v.x);
                }.bind(this))
                .attr("cy", function(v: Value) {
                    return this.scale.yScale(v.y);
                }.bind(this)) 
                .attr("r", 2)
                .attr("color", "black"); 
        }
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

        if (this.withCircles) {
            this.circles
                .data(this.serie.values.slice(this.start, this.stop))
                .enter()
                .append("circle")
                .attr("cx", function(v: Value) {
                    return this.scale.xScale(v.x);
                }.bind(this))
                .attr("cy", function(v: Value) {
                    return this.scale.yScale(v.y);
                }.bind(this)) 
                .attr("r", 2)
                .attr("color", "black")
                .merge(this.circles); 
        }
    }

    transitionScale() {
        this.graphSvg.svg
            .selectAll("path.line#" + this.id)
            .transition()
            .ease(transitionConfig.ease)
            .duration(transitionConfig.duration)
            .attr("d", this.line);

        if (this.withCircles) {
            this.graphSvg.svg
                .select("g#" + this.id)
                .selectAll("circle") 
                .transition()
                .ease(transitionConfig.ease)
                .duration(transitionConfig.duration)
                .attr("cx", function(v: Value) {
                    return this.scale.xScale(v.x);
                }.bind(this))
                .attr("cy", function(v: Value) {
                    return this.scale.yScale(v.y);
                }.bind(this));
        }
    }
}
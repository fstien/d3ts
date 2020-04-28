import * as d3 from 'd3';
import transitionConfig from './TransitionConfig';
export default class Plot {
    constructor(graphSvg, scale, serie, withCircles = false) {
        this.start = 0;
        this.stop = 1;
        this.id = "id" + serie.id;
        this.graphSvg = graphSvg;
        this.scale = scale;
        this.serie = serie;
        this.count = this.serie.values.length;
        this.withCircles = withCircles;
        this.scale.observersPlots.push(this);
        this.line = d3
            .line()
            .x(function (v) { return scale.xScale(v.x); }.bind(this))
            .y(function (v) { return scale.yScale(v.y); }.bind(this));
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
                .attr("cx", function (v) {
                return this.scale.xScale(v.x);
            }.bind(this))
                .attr("cy", function (v) {
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
    showAllSequential(duration) {
        for (let t = 1; t <= this.count; t++) {
            setTimeout(function () {
                this.showOneMore();
            }.bind(this), t * (duration / this.count));
        }
    }
    showOneMore() {
        this.stop++;
        this.render();
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
                .attr("cx", function (v) {
                return this.scale.xScale(v.x);
            }.bind(this))
                .attr("cy", function (v) {
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
                .attr("cx", function (v) {
                return this.scale.xScale(v.x);
            }.bind(this))
                .attr("cy", function (v) {
                return this.scale.yScale(v.y);
            }.bind(this));
        }
    }
}
//# sourceMappingURL=Plot.js.map
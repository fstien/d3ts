import * as d3 from 'd3';
import defaultConfig from './TransitionConfig';
class Scale {
    constructor(xMin, xMax, xTicks, yMin, yMax, yTicks, graph) {
        this.observersPlots = [];
        this.xMin = xMin;
        this.xMax = xMax;
        this.xTicks = xTicks;
        this.yMin = yMin;
        this.yMax = yMax;
        this.yTicks = yTicks;
        this.graph = graph;
        this.xScale = d3.scaleLinear()
            .domain([this.xMin, this.xMax])
            .range([this.graph.padding, this.graph.width - this.graph.padding]);
        this.yScale = d3.scaleLinear()
            .domain([this.yMin, this.yMax])
            .range([this.graph.height - this.graph.padding, this.graph.padding]);
    }
    plotAxis() {
        this.xAxis = d3.axisBottom(this.xScale).ticks(this.xTicks);
        this.gX = this.graph.svg.append("g")
            .attr("transform", "translate(0," + (this.graph.height - this.graph.padding) + ")")
            .call(this.xAxis);
        this.yAxis = d3.axisLeft(this.yScale).ticks(this.yTicks);
        this.gY = this.graph.svg.append("g")
            .attr("transform", "translate(" + this.graph.padding + ",0)")
            .call(this.yAxis);
    }
    setXMax(xMax) {
        this.xMax = xMax;
        this.xScale.domain([this.xMin, this.xMax]);
        this.gX.attr("transform", "translate(0," + (this.graph.height - this.graph.padding) + ")")
            .transition()
            .ease(defaultConfig.ease)
            .duration(defaultConfig.duration)
            .call(this.xAxis);
        this.updateObservers();
    }
    updateObservers() {
        this.observersPlots.forEach(function (plot) {
            plot.transitionScale();
        });
    }
}
export { Scale };
//# sourceMappingURL=Scale.js.map
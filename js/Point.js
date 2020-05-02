import transitionConfig from './TransitionConfig';
export default class Point {
    constructor(x, y, svg, scale) {
        this.scale = scale;
        this.svg = svg;
        this.id = "id" + (Math.floor(Math.random() * 1000000) + 1);
        this.x = x;
        this.y = y;
        this.scaledX = this.scale.xScale(this.x);
        this.scaledY = this.scale.yScale(this.y);
        this.svg.svg
            .append("circle")
            .attr("id", this.id)
            .attr("cx", this.scaledX)
            .attr("cy", this.scaledY)
            .attr("r", 2)
            .attr("color", "black");
        this.scale.observers.push(this);
    }
    transition() {
        this.scaledX = this.scale.xScale(this.x);
        this.scaledY = this.scale.yScale(this.y);
        this.svg.svg
            .select("circle#" + this.id)
            .transition()
            .ease(transitionConfig.ease)
            .duration(transitionConfig.duration)
            .attr("cx", this.scaledX)
            .attr("cy", this.scaledY);
    }
    transitionTo(x, y) {
        this.x = x;
        this.y = y;
        this.transition();
    }
}
//# sourceMappingURL=Point.js.map
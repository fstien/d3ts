import { Scale, ScaleObserver } from "./Scale";
import GraphSVG from './GraphSVG';
import transitionConfig from './TransitionConfig';

export default class Line implements ScaleObserver { 
    id: string;

    x1: number;
    y1: number;
    x2: number;
    y2: number;

    scaledX1: number;
    scaledY1: number;
    scaledX2: number;
    scaledY2: number;

    svg: GraphSVG;
    scale: Scale;

    constructor(x1: number, y1: number, x2: number, y2: number, svg: GraphSVG, scale: Scale) {
        this.scale = scale;
        this.svg = svg;

        this.id = "id" + (Math.floor(Math.random()*1000000) + 1);
    
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        
        this.scaledX1 = this.scale.xScale(this.x1);
        this.scaledY1 = this.scale.yScale(this.y1);
        this.scaledX2 = this.scale.xScale(this.x2);
        this.scaledY2 = this.scale.yScale(this.y2);    

        this.scale.observers.push(this);
    }

    render() {
        this.svg.svg.append("line")
            .attr("x1", this.scaledX1)
            .attr("y1", this.scaledY1)
            .attr("x2", this.scaledX2)
            .attr("y2", this.scaledY2)
            .attr("id", this.id)
            .attr("visibility", "visible")
            .attr("stroke", "black");
    }
    
    transition() {
        this.scaledX1 = this.scale.xScale(this.x1);
        this.scaledY1 = this.scale.yScale(this.y1);
        this.scaledX2 = this.scale.xScale(this.x2);
        this.scaledY2 = this.scale.yScale(this.y2);    

        this.svg.svg
            .selectAll("line#" + this.id)
            .attr("visibility", "visible")
            .transition()
            .ease(transitionConfig.ease)
            .duration(transitionConfig.duration)
            .attr("x1", this.scaledX1)
            .attr("y1", this.scaledY1)
            .attr("x2", this.scaledX2)
            .attr("y2", this.scaledY2);
    }

    hide() {
        this.svg.svg
            .selectAll("line#" + this.id)
            .attr("visibility", "hidden");
    }

    transitionTo(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1; 
        this.x2 = x2;
        this.y2 = y2;

        this.transition();
    }

}
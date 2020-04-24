import GraphSVG from './GraphSVG';
import { ScaleLinear } from 'd3';
export default class Scale {
    xMin: number;
    xMax: number;
    xTicks: number;
    yMin: number;
    yMax: number;
    yTicks: number;
    graph: GraphSVG;
    xScale: ScaleLinear<number, number>;
    yScale: ScaleLinear<number, number>;
    xAxis: any;
    yAxis: any;
    gX: any;
    gY: any;
    constructor(xMin: number, xMax: number, xTicks: number, yMin: number, yMax: number, yTicks: number, graph: GraphSVG);
    plotAxis(): void;
    setXMax(xMax: number, duration: number): void;
}

import GraphSVG from './GraphSVG';
import { ScaleLinear } from 'd3';
interface ScaleObserver {
    update(event: string): void;
}
declare class Scale {
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
    observers: Array<ScaleObserver>;
    constructor(xMin: number, xMax: number, xTicks: number, yMin: number, yMax: number, yTicks: number, graph: GraphSVG);
    plotAxis(): void;
    setXMax(xMax: number, duration: number): void;
}
export { ScaleObserver, Scale };

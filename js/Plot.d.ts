import { Scale, ScaleObserver } from "./Scale";
import { Serie } from "./Serie";
import GraphSVG from './GraphSVG';
export default class Plot implements ScaleObserver {
    id: string;
    graphSvg: GraphSVG;
    scale: Scale;
    serie: Serie;
    line: any;
    svgRef: any;
    constructor(graphSvg: GraphSVG, scale: Scale, serie: Serie);
    drawAll(): void;
    update(event: string): void;
    updateGraph(): void;
}

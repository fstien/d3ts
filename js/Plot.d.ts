import Scale from "./Scale";
import Serie from "./Serie";
import GraphSVG from './GraphSVG';
export default class Plot {
    id: string;
    graphSvg: GraphSVG;
    scale: Scale;
    serie: Serie;
    line: any;
    svgRef: any;
    constructor(graphSvg: GraphSVG, scale: Scale, serie: Serie);
    drawAll(): void;
}

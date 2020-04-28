import { Scale, ScaleObserver } from "./Scale";
import { Serie } from "./Serie";
import GraphSVG from './GraphSVG';
export default class Plot implements ScaleObserver {
    id: string;
    graphSvg: GraphSVG;
    scale: Scale;
    serie: Serie;
    withCircles: Boolean;
    count: number;
    start: number;
    stop: number;
    line: any;
    constructor(graphSvg: GraphSVG, scale: Scale, serie: Serie, withCircles?: Boolean);
    showAll(): void;
    showAllSequential(duration: number): void;
    showOneMore(): void;
    render(): void;
    transitionScale(): void;
}

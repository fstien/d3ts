import { Scale, ScaleObserver } from "./Scale";
import { Serie } from "./Serie";
import GraphSVG from './GraphSVG';
export default class Plot implements ScaleObserver {
    id: string;
    graphSvg: GraphSVG;
    scale: Scale;
    serie: Serie;
    count: number;
    start: number;
    stop: number;
    line: any;
    constructor(graphSvg: GraphSVG, scale: Scale, serie: Serie);
    showAll(): void;
    showAllSequential(duration: number): void;
    showOneMore(): void;
    render(): void;
    transition(): void;
}

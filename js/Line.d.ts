import { Scale, ScaleObserver } from "./Scale";
import GraphSVG from './GraphSVG';
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
    constructor(x1: number, y1: number, x2: number, y2: number, svg: GraphSVG, scale: Scale);
    render(): void;
    transition(): void;
    hide(): void;
    transitionTo(x1: number, y1: number, x2: number, y2: number): void;
}

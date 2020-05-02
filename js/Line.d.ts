import { Scale, ScaleObserver } from "./Scale";
import GraphSVG from './GraphSVG';
interface LineStyle {
    color: string;
    width: string;
    strokeDasharray: string;
}
declare class Line implements ScaleObserver {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    scaledX1: number;
    scaledY1: number;
    scaledX2: number;
    scaledY2: number;
    style: LineStyle;
    svg: GraphSVG;
    scale: Scale;
    constructor(x1: number, y1: number, x2: number, y2: number, style: LineStyle, svg: GraphSVG, scale: Scale);
    render(): void;
    transition(): void;
    hide(): void;
    transitionTo(x1: number, y1: number, x2: number, y2: number): void;
}
export { LineStyle, Line };

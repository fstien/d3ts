import { Scale, ScaleObserver } from "./Scale";
import GraphSVG from './GraphSVG';
export default class Point implements ScaleObserver {
    id: string;
    x: number;
    y: number;
    scaledX: number;
    scaledY: number;
    svg: GraphSVG;
    scale: Scale;
    constructor(x: number, y: number, svg: GraphSVG, scale: Scale);
    transition(): void;
    transitionTo(x: number, y: number): void;
}

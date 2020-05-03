
import * as d3 from 'd3';
import {Scale, ScaleObserver} from "./Scale";
import {Serie, Value} from "./Serie";
import GraphSVG from './GraphSVG';
import transitionConfig from './TransitionConfig';
import {LineStyle, Line} from './Line';
import { svg } from 'd3';
import Point from './Point';


class SequentialPlot {

    graphSvg: GraphSVG
    scale: Scale
    serie: Serie
    
    lineStyle: LineStyle
    gridStyle: LineStyle

    count: number

    n: number = 0
    lines: Array<Line> = []
    points: Array<Point> = []
    vertGrid: Array<Line> = []
    horGrid: Array<Line> = []

    constructor(graphSvg: GraphSVG, scale: Scale, serie: Serie) {
        this.graphSvg = graphSvg
        this.scale = scale
        this.serie = serie

        this.lineStyle = {
            color: "black",
            width: "2",
            strokeDasharray: "none"
        }

        this.gridStyle = {
            color: "black",
            width: "1",
            strokeDasharray: "5 10"
        }

        this.count = this.serie.values.length
    }

    showOneMore() {
        if (this.n + 1 >= this.count) return

        const v1 = this.serie.values[this.n]
        const v2 = this.serie.values[this.n+1]

        const line = new Line(v1.x, v1.y, v1.x, v1.y, this.lineStyle, this.graphSvg, this.scale)
        line.render()

        const point = new Point(v1.x, v1.y, this.graphSvg, this.scale)

        const vert = new Line(v2.x, 0, v2.x, v2.y, this.gridStyle, this.graphSvg, this.scale)
        const hor = new Line(0, v2.y, v2.x, v2.y, this.gridStyle, this.graphSvg, this.scale)

        point.transitionTo(v2.x, v2.y)
        line.transitionTo(v1.x, v1.y, v2.x, v2.y)

        setTimeout(() => {
            vert.render()
            hor.render()
        }, transitionConfig.duration)


        
        this.n++
        this.lines.push(line)
        this.points.push(point)
        this.vertGrid.push(vert)
        this.horGrid.push(hor)
    }



}


export {
    SequentialPlot
}
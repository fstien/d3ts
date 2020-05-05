
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

    increaseStyle: LineStyle
    decreaseStyle: LineStyle

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
            color: "grey",
            width: "1",
            strokeDasharray: "6 3"
        }

        this.increaseStyle = {
            color: "green",
            width: "2",
            strokeDasharray: "none"
        }

        this.decreaseStyle = {
            color: "red",
            width: "2",
            strokeDasharray: "none"
        }

        this.count = this.serie.values.length
    }

    showOneMore() {
        if (this.n + 1 >= this.count) return

        const v1 = this.serie.values[this.n]
        const v2 = this.serie.values[this.n+1]

        const increase: Boolean = v2.y > v1.y

        const line = new Line(v1.x, v1.y, v1.x, v1.y, this.lineStyle, this.graphSvg, this.scale)
        line.render()

        const point = new Point(v1.x, v1.y, 2, this.graphSvg, this.scale)

        const vert = new Line(v2.x, 0, v2.x, v2.y, this.gridStyle, this.graphSvg, this.scale)
        const hor = new Line(0, v2.y, v2.x, v2.y, this.gridStyle, this.graphSvg, this.scale)

        const style = increase ? this.increaseStyle : this.decreaseStyle

        const diff = new Line(v2.x, v1.y, v2.x, v1.y, style, this.graphSvg, this.scale)

        point.transitionTo(v2.x, v2.y)
        line.transitionTo(v1.x, v1.y, v2.x, v2.y)

        setTimeout(function() {
            vert.render()
            hor.render()
            diff.render()

            diff.transitionTo(v2.x, v1.y, v2.x, v2.y)

            setTimeout(function() {
                if (this.n - 2 < 0) return
                this.vertGrid[this.n-2].hide()
                this.horGrid[this.n-2].hide()
            }.bind(this), transitionConfig.duration*2)
        }.bind(this), transitionConfig.duration)

        
        

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
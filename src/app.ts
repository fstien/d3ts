
import * as d3 from 'd3';
import GraphSVG from './GraphSVG';
import {Scale} from './Scale';
import Std_norm from './Stats';
import {Serie} from './Serie';
import Plot from './Plot';
import {LineStyle, Line} from './Line';
import Point from './Point';
import { SequentialPlot } from './SequentialPlot';
import transitionConfig from './TransitionConfig';


const svg = new GraphSVG(400, 600, 30);

const scale = new Scale(0, 10, 10, 0, 20, 10, svg);

scale.plotAxis();

function AR1(Ytm1: number): number {
    return Ytm1 + Std_norm()*2;
};

// const Ar1Serie = new Serie(10, AR1, 10);
// const ar1Plot = new Plot(svg, scale, Ar1Serie, true);
// ar1Plot.showAll();
// ar1Plot.showAllSequential(1000);

const Ar2Serie = new Serie(10, AR1, 10);
const ar2Plot = new Plot(svg, scale, Ar2Serie);

//ar1Plot.showAll()
setTimeout(() => {
//   scale.setXMax(15);
}, 1000);

/*
document.onkeydown = function(e) {
    ar2Plot.showOneMore();
};
*/
// ar2Plot.showAll();

/*
const lStyle: LineStyle = {
    color: "black",
    width: "1",
    strokeDasharray: "5 10"
}

const l1 = new Line(0.5, 0, 0.5, 10, lStyle, svg, scale);
l1.render();

const p = new Point(3, 3, svg, scale);

setTimeout(() => {
    p.transitionTo(9, 6);
    l1.transitionTo(2.5, 0, 2.5, 12);
}, 3000);
*/

/*
const vert: Array<Line> = [];

Ar2Serie.values.forEach(value => {
    const line = new Line(value.x, 0, value.x, value.y, l1Style, svg, scale);
    vert.push(line);
    line.render();
});
*/

transitionConfig.ease = d3.easeLinear
transitionConfig.duration = 700

const sp = new SequentialPlot(svg, scale, Ar2Serie)

document.onkeydown = function(e) {
    sp.showOneMore()
};


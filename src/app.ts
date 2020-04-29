
import GraphSVG from './GraphSVG';
import {Scale} from './Scale';
import Std_norm from './Stats';
import {Serie} from './Serie';
import Plot from './Plot';
import Line from './Line';
import Point from './Point';


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
const ar2Plot = new Plot(svg, scale, Ar2Serie, true);

//ar1Plot.showAll()
setTimeout(() => {
   scale.setXMax(15);
 }, 1000);


document.onkeydown = function(e) {
    ar2Plot.showOneMore();
};

const l1 = new Line(1, 0, 1, 10, svg, scale);
l1.render();



const p = new Point(3, 3, svg, scale);



setTimeout(() => {
    //    l1.transitionTo(5, 0, 5, 10);
    
    p.transitionTo(10, 5);
        
    }, 3000);
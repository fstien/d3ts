import GraphSVG from './GraphSVG';
import Scale from './Scale';
import Std_norm from './Stats';
import Serie from './Serie';
import Plot from './Plot';
const svg = new GraphSVG(400, 600, 30);
const scale = new Scale(0, 10, 10, 0, 20, 10, svg);
scale.plotAxis();
setTimeout(function () {
    scale.setXMax(15, 1000);
}, 2000);
function AR1(Ytm1) {
    return Ytm1 + Std_norm();
}
;
const Ar1Serie = new Serie(10, AR1, 10);
const ar1Plot = new Plot(svg, scale, Ar1Serie);
//# sourceMappingURL=app.js.map
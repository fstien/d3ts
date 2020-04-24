import GraphSVG from './GraphSVG';
import Scale from './Scale';
const svg = new GraphSVG(400, 600, 30);
const scale = new Scale(0, 10, 10, 0, 20, 10, svg);
scale.plotAxis();
setTimeout(function () {
    scale.setXMax(15, 1000);
}, 2000);
//# sourceMappingURL=app.js.map
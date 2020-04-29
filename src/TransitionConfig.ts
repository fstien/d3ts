import * as d3 from 'd3';

interface TransitionConfig {
    duration: number;
    ease: any;
}

const transitionConfig: TransitionConfig = {
    duration: 1000,
    ease: d3.easeCubicInOut
}

export default transitionConfig;
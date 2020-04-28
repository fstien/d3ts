import * as d3 from 'd3';

interface TransitionConfig {
    duration: number;
    ease: any;
}

const transitionConfig: TransitionConfig = {
    duration: 2000,
    ease: d3.easeSin
}

export default transitionConfig;
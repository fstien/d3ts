import resolve from 'rollup-plugin-node-resolve';
 
export default {
    input: 'js/app.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd'
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            module: true
        })
    ],
    moduleName: 'app'
};
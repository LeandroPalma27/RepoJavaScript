// Este ejercicio lo hago para poder automatizar la adicion de puntos de entrada en mi 'webpack.config.js'.
// De un arreglo de puntos de entrada, añada una propiedad al entry con el nombre del mismo punto y con el 
// valor de esa propiedad que incluya la ruta relativa al archivo.js

/* const otherHtmlPagesNames = ['login', 'main', 'xd'];
const entryJsPropertieFiles = otherHtmlPagesNames.map((name) => {
    return JSON.parse(`{ "${name}": "./src/js/${name}.js", "${name}": "./src/js/${name}.js" }`);
});


const entry = {
    main: './src/js/main.js',
}

let newObj = {};

for (file of entryJsPropertieFiles) {
    newObj = Object.assign(entry, file);
} */

let otherHtmlPageNames = ['login', 'content', 'xd'];
/* let multipleHtmlPlugins = otherHtmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `resources/${name}.html`, // output HTML files
        template: `./src/resources/${name}.html`, // relative path to the HTML files
        chunks: [`${name}`], // respective JS files ??????
        scriptLoading: 'blocking',
        excludeChunks: ['index'],
    })
}); */
let entryJsPropertieFiles = otherHtmlPageNames.map(name => {
    return `./src/js/${name}.js`;
    /* JSON.parse(`{ "${name}": "./src/js/${name}.js", "${name}": "./src/js/${name}.js" }`) */
});

const entry = ['xd', ...entryJsPropertieFiles];


// const mod = {

//     mode: 'development', // Ativa el modo desarrollo.

//     module: {
//         entry: {
//             index: './src/js/index.js', // Aqui podemos añadir las entradas que quisieramos.
//             /* other: './src/other.js', */
//             ...entries
//         },
//     }
// }

console.log(entryJsPropertieFiles);
console.log(entry);
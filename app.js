/* let otherHtmlPageNames = ['hola'];
let multipleHtmlPlugins = otherHtmlPageNames.map(name => {
    return {
        filename: `resources/${name}.html`,
        template: `./src/resources/${name}.html`,
        chunks: [`${name}`],
        scriptLoading: 'blocking',
    }
});

const xd = {
    plugin: [].push(...multipleHtmlPlugins),
};


console.log(xd) */

const obj = {
    campo1: "Leandro",
    campo2: "sistemas",
    campo3: 21
}

const {campo1: uno, dos, tres} = obj;

console.log(uno)
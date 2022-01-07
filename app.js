let otherHtmlPageNames = ['hola'];
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


console.log(xd)
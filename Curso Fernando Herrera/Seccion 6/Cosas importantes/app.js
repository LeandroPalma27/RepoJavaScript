const xd = {
    holaMundo() {
        console.log('hola mundo');
    },
    hola: (()=>{
        console.log('hola')
    })(),
    xd: (() => {

    })()
}

xd.holaMundo();
xd.hola;
const xd = {
    holaMundo() {
        console.log('hola mundo');
    },
    hola: (()=>{
        console.log('hola')
    })()
}

xd.holaMundo();
xd.hola;
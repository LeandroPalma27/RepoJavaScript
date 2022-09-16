const conditional = true;

const objeto = {
    ...(conditional && {nombre: "Leandro"})
};

const personas = [
    {
        user: "Leandro",
        active: true
    },
    {
        user: "Leandro",
        active: false
    },
    {
        user: "Leandro",
        active: true
    },
    {
        user: "Leandro",
        active: true
    }
]

const comprobarPersonas = (array) => {
    const soloPersonasComprobadas = [];
    array.forEach(persona => {
        if (persona.active) {
            const personaComprobada = {
                user: persona.user,
                active: persona.active,
                ...(conditional && {rol: "ROLE_USER"})
            };
            soloPersonasComprobadas.push(personaComprobada);
        }
    });
    return soloPersonasComprobadas;
}

console.log(comprobarPersonas(personas))


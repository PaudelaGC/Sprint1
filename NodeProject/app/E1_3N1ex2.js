function starter(tipus, eleccio){
    if (eleccio) {
        return `Has escollit a ${eleccio}, de tipus ${tipus}`;
    } else {
        return `Has arribat tard! Ja no tenim els altres inicials, nomes ens queda Pikachu, de tipus ${tipus}`;
    }
}

function escollir(pokemon, callback) {
    if (callback != starter) {
        return `Per escollir el teu starter has de nomenar primer l'inicial que vols i després la funció "starter"`
    }
    if (pokemon == "Charmander") {
        const tipus = "foc";
        return callback(tipus, pokemon);
    } else if (pokemon == "Squirtle") {
        const tipus = "aigua";
        return callback(tipus, pokemon);
    } else if (pokemon == "Bulbasaur") {
        const tipus = "planta";
        return callback(tipus, pokemon);
    } else {
        const tipus = "electric";
        return callback(tipus);
    }
}

module.exports = { escollir, starter }
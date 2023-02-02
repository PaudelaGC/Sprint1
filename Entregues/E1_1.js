//Nivell 1 Exercici 1: Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

let mostrarNom = nom => console.log(`${nom}`);
mostrarNom(`Pau`);

//Nivell 2 Exercici 1: Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

let mostrarNom2 = (name, cog1, cog2) =>
    `${name}
${cog1}
${cog2}`;

var nomUsuari = "Pau";
var cognomUsuari1 = "Guillén";
var cognomUsuari2 = "Carranza";
console.log(mostrarNom2(nomUsuari, cognomUsuari1, cognomUsuari2));

//Nivell 2 Exercici 2: Invoca una funció que retorni un valor des de dins d'una template literal.

let sumarNumeros = (a, b) => a + b;
console.log(`${sumarNumeros(3, 8)}`);

//Nivell 3 Exercici 1: Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

function crearFuncions(x) {
    for (let i = 0; i < 10; i++) {
        x[i] = function comptar() {
            let llistat = [];
            for (let y = 0; y < 10; y++) {
                llistat[y] = y;
            }

            console.log(`${llistat}`);
        }
    }
}

let matriu = [];
crearFuncions(matriu);
for (let i = 0; i < matriu.length; i++) {
    matriu[i]();
}

//Nivell 3 Exercici 2: Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

var nomUser = (function (nom) {
    console.log(nom);
})("Pau");

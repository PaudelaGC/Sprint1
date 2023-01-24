//Nivell 1 Exercici 1
let mostrarNom = user => `${user}`;

console.log(mostrarNom("Pau"));

//Nivell 2 Exercici 1
let mostrarNom2 = (name, cog1, cog2) =>
  `${name}
${cog1}
${cog2}`;

var nomUsuari = "Pau";
var cognomUsuari1 = "Guillén";
var cognomUsuari2 = "Carranza";
console.log(mostrarNom2(nomUsuari, cognomUsuari1, cognomUsuari2));

//Nivell 2 Exercici 2
let sumarNumeros = (a, b) => 
`La suma de ${a} i ${b} dona:
${a + b}`;

console.log(sumarNumeros(2,7));

//Nivell 3 Exercici 1
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
for(let i = 0; i < matriu.length; i++){
    matriu[i]();
}

//Nivell 3 Exercici 2
var nomUser = (function(nom){
console.log(nom);
})("Pau");

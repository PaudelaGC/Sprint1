//Nivell 1 Exercici 1: Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
((a, b) => {
  console.log(a + b);
})(3, 8);

//Nivell 2 Exercici 1: Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
const crearPersona = (atribut) => ({
  nom: "Pau",
  atribut,
});
console.log(crearPersona("Tatuatjes"));

//Nivell 2 Exercici 2: Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.
class Persona {
  constructor(x) {
    this.nom = x;
  }

  dirNom() {
    console.log("Em dic " + this.nom);
  }
}

const jo = new Persona("Pau");

jo.dirNom();

//Nivell 3 Exercici 1: Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
class Personatge {
  constructor() {
    if (this.constructor === Personatge) {
      throw new Error("No es pot instanciar una classe abstracta");
    }
  }
}




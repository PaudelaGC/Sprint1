// Nivell 1 Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
const nota = 5.1;
const resultat = new Promise((resolve, reject) => {
  if (nota >= 5) {
    const aprovat = () => `Has aprovat amb un ${nota}`;
    resolve(aprovat);
  } else {
    reject(new Error(`Has suspes amb un ${nota}, no pots continuar el curs`));
  }
});

resultat
  .then((res) => {
    console.log(res());
  })
  .catch((err) => {
    console.log(err.message);
  });

//Nivell 1 Exercici 2: Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.
let starter = (tipus, eleccio) => {
  if (eleccio) {
    console.log(`Has escollit a ${eleccio}, de tipus ${tipus}`);
  } else {
    console.log(
      `Has arribat tard! Ja no tenim els altres inicials, nomes ens queda Pikachu, de tipus ${tipus}`
    );
  }
};

const escollir = (pokemon, callback) => {
  if (pokemon == "Charmander") {
    const tipus = "foc";
    callback(tipus, pokemon);
  } else if (pokemon == "Squirtle") {
    const tipus = "aigua";
    callback(tipus, pokemon);
  } else if (pokemon == "Bulbasaur") {
    const tipus = "planta";
    callback(tipus, pokemon);
  } else {
    const tipus = "electric";
    callback(tipus);
  }
};

escollir("Rayquaza", starter);

//Nivell 2 Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.
let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

//Fem diverses proves
var searchId = [0, 1, 2, 3, 4, 5];
for (let i = 0; i < searchId.length; i++) {
  const getEmployee = searchId => {
    return new Promise((resolve, reject) => {
      if (employees.some((v) => v.id === searchId[i])) {
        const nom = () => employees.find((x) => x.id === searchId[i]).name;
        resolve(nom);
      } else {
        reject(new Error(`No hi ha cap empleat amb l'id ${searchId[i]}`));
      }

    })
  };
  getEmployee(searchId)
    .then((res2) => {
      console.log(`L'empleat amb l'id ${searchId[i]} es diu ${res2()}`);
    })
    .catch((err2) => {
      console.log(err2.message);
    });
}

//const getEmployee = chosen ID => { return new Promise
//const getSalary = employee (object) => { return new Promise

//Nivell 2 Exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

for (let i = 0; i < employees.length; i++) {
  const getSalary = employees => {
    return new Promise((resolve, reject) => {
      if (salaries.some((v) => v.id === employees[i].id)) {
        const salari = () =>
          salaries.find((x) => x.id === employees[i].id).salary;
        resolve(salari);
      } else {
        reject(new Error(`No hi ha cap empleat amb l'id ${searchId[i]}`));
      }
    })
  };
  getSalary(employees)
    .then((res3) => {
      console.log(
        `L'empleat amb l'id ${employees[i].id
        } te un salari de ${res3()}€ al mes`
      );
    })
    .catch((err3) => {
      console.log(err3.message);
    });
}

//Nivell 2 Exercici 3: Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.
var searchId2 = [1, 2, 3];
for (let i = 0; i < searchId2.length; i++) {
  const getEmployee = searchId2 => {
    return new Promise((resolve, reject) => {
      if (employees.some((v) => v.id === searchId2[i])) {
        const nom = () => employees.find((x) => x.id === searchId2[i]).name;
        resolve(nom());
      } else {
        reject(new Error(`No hi ha cap empleat amb l'id ${searchId2[i]}`));
      }
    })
  };

  const getSalary = employees => {
    return new Promise((resolve, reject) => {
      if (salaries.some((v) => v.id === employees[i].id)) {
        const salari = () =>
          salaries.find((x) => x.id === employees[i].id).salary;
        resolve(salari());
      } else {
        reject(new Error(`No hi ha cap empleat amb l'id ${searchId2[i]}`));
      }
    })
  };

  Promise.all([getEmployee(searchId2), getSalary(employees)]).then((res) =>
    console.log(res)
  );
}

//Nivell 3 Exercici 3: Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.
//Ja resolt al Nivell 2 Exercici 1, donat que es fan servir Id's que no pertanyen a l'Array i mostra un error en conseqüencia

//Corretgit per Alex



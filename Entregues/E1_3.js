// Nivell 1 Exercici 1: Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

resultat = nota => {
  return new Promise((resolve, reject) => {
    if (nota >= 5) {
      const aprovat = `Has aprovat amb un ${nota}`;
      resolve(console.log(aprovat));
    } else {
      reject(new Error(`Has suspes amb un ${nota}, no pots continuar el curs`));
    }
  })
}

resultat(8);
resultat(4.2);

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
//S'ha fet a propòsit així perque sigui més "interessant"

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

const getEmployee = employeeId => {
  let found = false;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < employees.length; i++) {
      if (!found && employeeId === employees[i].id) {
        found = true;
        const empleat = (x, y) => ({
          id: x,
          nom: y,
        });
        resolve(empleat(employeeId, employees[i].name));
      }
    }
    if(!found){
      reject(new Error(`No hem trobat cap empleat amb l'id ${employeeId}`));
    }
  })
}

//Nivell 2 Exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

  const getSalary =  employee => {
    let found = false;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < salaries.length; i++) {
        if (!found && employee.id === salaries[i].id) {
          found = true;
          const salary =  salaries[i].salary;
          resolve(console.log(salary));
        }
      }
      if(!found){
        reject(new Error(`No hem trobat cap salari amb un id que coincideixi amb el id rebut`));
      }
    })
  }
//Nivell 2 Exercici 3: Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

function mostrarEmpleatSalari(x) {
  getEmployee(x)
      .then(console.log(getEmployee(x)))
      .then(getSalary)
      .catch(err => console.log(err.message))
}

mostrarEmpleatSalari(1);
mostrarEmpleatSalari(2);
mostrarEmpleatSalari(3);

//No he pogut resoldre-ho exactament com s'ha demanat

//Nivell 3 Exercici 3: Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.
//Realitzat a l'exercici anterior

//Corretgit per Alex 

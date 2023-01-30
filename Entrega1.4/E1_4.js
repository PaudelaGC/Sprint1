//Nivell 1 Exercici 1: Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
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

const getEmployee = z => {
    return new Promise((resolve, reject) => {
        if (employees.some((v) => v.id === z)) {
            const nom = employees.find((x) => x.id === z).name;
            resolve(nom);
        } else {
            reject(new Error(`No hi ha cap empleat amb l'id ${z}`));
        }
    })
};

const getSalary = y => {
    return new Promise((resolve, reject) => {
        if (employees.some((v) => v.name === y)) {
            const id = employees.find((l) => l.name === y).id;
            const salari = salaries.find((x) => x.id === id).salary;
            const empleat = (x, y) => ({
                nom: x,
                salari: y,
            });
            resolve(empleat(y, salari));
        } else {
            reject(new Error(`No hi ha cap empleat amb l'id ${y}`));
        }
    })

};

async function mostrarEmpleatSalari(x) {
    getEmployee(x)
        .then(getSalary)
        .then(res => console.log(res))
        .catch(err => console.log(err.message))
}

mostrarEmpleatSalari(1);
mostrarEmpleatSalari(2);
mostrarEmpleatSalari(3);
mostrarEmpleatSalari(4);


//Nivell 1 Exercici 2: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function prendreCafe() {
    console.log("Primer preparem cafe...")
    setTimeout(() => {
        prepararCafe()
            .then(beureCafe)
            .then(res => console.log(res));
    }, 2000);

}

const prepararCafe = () => {
    return new Promise((resolve) => {
        resolve("Cafe preparat");
    })
}

const beureCafe = (x) => {
    return new Promise((resolve) => {
        resolve(`${x}, a gaudir del cafe!`);
    })
}

prendreCafe();

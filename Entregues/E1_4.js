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

const getEmployee = employeeId => {
    let found = false;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < employees.length; i++) {
            if (!found && employeeId === employees[i].id) {
                found = true;
                resolve(employees[i]);
            }
        }
        if (!found) {
            reject(new Error(`No hem trobat cap empleat amb l'id ${employeeId}`));
        }
    })
}

const getSalary = employee => {
    let found = false;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < salaries.length; i++) {
            if (!found && employee.id === salaries[i].id) {
                found = true;
                const salary = salaries[i].salary;
                resolve(salary);
            }
        }
        if (!found) {
            reject(new Error(`No hem trobat cap salari amb un id que coincideixi amb el id rebut`));
        }
    })
}

async function mostrarEmpleatSalari(x) {
    let empleatTotal = [];
    try {
        empleatNom = await getEmployee(x);
        empleatTotal.push(empleatNom);
        empleatSalari = await getSalary(empleatNom);
        empleatTotal.push(empleatSalari);
        console.log(empleatTotal);
    }
    catch (err) {
        console.log(err.message);
    }
}

mostrarEmpleatSalari(1);
mostrarEmpleatSalari(2);
mostrarEmpleatSalari(3);
mostrarEmpleatSalari(4);
mostrarEmpleatSalari("d");


//Nivell 1 Exercici 2: Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function beureCafe() {
    console.log("Primer preparem cafe, trigarem 2 segons");
    preparat = await prepararCafe();

}

const prepararCafe = async () => {
    setTimeout(() => {
        return new Promise((resolve) => {
            resolve(cafePreparat());
        })
    }, 2000);

}

function cafePreparat(){
    console.log(`Cafè preparat i llest per beure!`);
}

beureCafe();
//Nivell 2 Exercici 1: Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

async function duplicar(x) {
    return new Promise((resolve, reject) => {
        console.log("El doble de " + x + " es...")
        if (Number.isInteger(x)) {

            x = x * 2;
            setTimeout(() => {
                resolve(x);
            }, 2000);
        } else {
            reject(new Error(`El parametre no es un número`));
        }
    })



}
async function sumarTresDobles(x, y, z) {
    let dx = 0, dy = 0, dz = 0;
    try {
        dx = await duplicar(x);
        console.log(dx);
        dy = await duplicar(y);
        console.log(dy);
        dz = await duplicar(z);
        console.log(dz);
        let total = dx + dy + dz;
        console.log("La suma dels tres dobles es " + total);
    } catch (err) {
        console.log(err.message);
    }
}

sumarTresDobles(2, "e", 4);
sumarTresDobles(5, 10, 20);
sumarTresDobles(5, 10, 333333);
sumarTresDobles(2, 4);
sumarTresDobles(1, 2, 3, 4);


//Nivell 3 Exercici 1: Força i captura tants errors com puguis dels nivells 1 i 2.
//Els try-catchs ja estan implementats


//Corretgit per Marta

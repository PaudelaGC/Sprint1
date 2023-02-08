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

async function trobarSalari(idBuscada) {
    let x = await getEmployee(idBuscada)
    let y = await getSalary(x);
    return console.log(y)
}

trobarSalari(1);
trobarSalari(2);
trobarSalari(3);
//Això funciona fora del testing, es pot comprovar fent console.log, a dins retorna "{}", no he aconseguit esbrinar perquè

module.exports = trobarSalari
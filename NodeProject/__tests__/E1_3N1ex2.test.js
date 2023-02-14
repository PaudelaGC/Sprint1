//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

const { escollir, starter } = require('../app/E1_3N1ex2');

describe('suite escollir inicial', () => {
test("Escollir un dels inicials nomenats t'otorga dit inicial", () => {
    expect(escollir("Bulbasaur", starter)).toBe(`Has escollit a Bulbasaur, de tipus planta`);
    expect(escollir("Squirtle", starter)).toBe(`Has escollit a Squirtle, de tipus aigua`);
    expect(escollir("Charmander", starter)).toBe(`Has escollit a Charmander, de tipus foc`);
});

test("Escollir cap altre cosa t'otorga a Pikachu", () => {
    expect(escollir("Rayquaza", starter)).toBe(`Has arribat tard! Ja no tenim els altres inicials, nomes ens queda Pikachu, de tipus electric`);
    expect(escollir("Deoxys", starter)).toBe(`Has arribat tard! Ja no tenim els altres inicials, nomes ens queda Pikachu, de tipus electric`);
    expect(escollir("Arceus", starter)).toBe(`Has arribat tard! Ja no tenim els altres inicials, nomes ens queda Pikachu, de tipus electric`);
    expect(escollir("fkjajklshfkjahsk", starter)).toBe(`Has arribat tard! Ja no tenim els altres inicials, nomes ens queda Pikachu, de tipus electric`);
});

test("No enviar dades o enviar-ne erronies t'explica com escollir el teu starter", () => {
    expect(escollir()).toBe(`Per escollir el teu starter has de nomenar primer l'inicial que vols i després la funció "starter"`);
    expect(escollir("fdalkfjk")).toBe(`Per escollir el teu starter has de nomenar primer l'inicial que vols i després la funció "starter"`);
    expect(escollir("a", "o", "e")).toBe(`Per escollir el teu starter has de nomenar primer l'inicial que vols i després la funció "starter"`);
    expect(escollir([1], [2,3])).toBe(`Per escollir el teu starter has de nomenar primer l'inicial que vols i després la funció "starter"`);
})
})

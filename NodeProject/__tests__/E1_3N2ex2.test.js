const trobarSalari = require('./app/E1_3N2ex2');

test("Pasar una ID que existeixi et retorna el salari de l'empleat amb aquesta ID", () => {
    expect(trobarSalari(1)).toBe(4000);
})

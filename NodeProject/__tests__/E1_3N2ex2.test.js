const trobarSalari = require('./app/E1_3N2ex2');

test("Pasar una ID que existeixi et retorna el salari de l'empleat amb aquesta ID", async () => {
     expect(await trobarSalari(1)).toBe(4000);
     expect(await trobarSalari(2)).toBe(1000);
     expect(await trobarSalari(3)).toBe(2000);
})


test("Pasar una ID que no existeixi et retorna un error", async () => {
     expect(await trobarSalari(0)).toThrow('error');
})

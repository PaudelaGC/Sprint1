const trobarSalari = require('./E1_3N2ex1&2');

describe('suite trobarSalari', () => {
    test("Pasar una ID que existeixi et retorna el salari de l'empleat amb aquesta ID", async () => {
        expect(await trobarSalari(1)).toBe(4000);
        expect(await trobarSalari(2)).toBe(1000);
        expect(await trobarSalari(3)).toBe(2000);
    })
    
    
    test("Pasar una ID que no existeixi, res o text et retorna un error", () => {
        expect(trobarSalari(0)).rejects.toThrow(`No hem trobat cap empleat amb l'id 0`);
        expect(trobarSalari()).rejects.toThrow(`No hem trobat cap empleat amb l'id undefined`);
        expect(trobarSalari("lol")).rejects.toThrow(`No hem trobat cap empleat amb l'id lol`);
    })
    
    test("Pasar una ID que eixsteixi dins una array nomes llegeix el primer valor i retorna el salari corresponent", async () => {
        expect(await trobarSalari([1])).toBe(4000);
        expect(await trobarSalari([2, 1])).toBe(1000);
        expect(await trobarSalari([3, 2, 1])).toBe(2000);
    })
    
    test("Pasar una ID que no existeixi, res o text dins un array et retorna un error del primer valor", () => {
        expect(trobarSalari([0])).rejects.toThrow(`No hem trobat cap empleat amb l'id 0`);
        expect(trobarSalari([])).rejects.toThrow(`No hem trobat cap empleat amb l'id undefined`);
        expect(trobarSalari(["lol"])).rejects.toThrow(`No hem trobat cap empleat amb l'id lol`);
        expect(trobarSalari(["lol", 2, 3, 4])).rejects.toThrow(`No hem trobat cap empleat amb l'id lol`);
    })
});

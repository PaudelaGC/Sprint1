const { suma, resta, multiplicar, dividir }  = require('./app/calculadora');


describe('suite operacions matemàtiques', () => {
//Suma
test('(+) add 1 to 2 equals 3', () => {
    expect(suma([1, 2])).toBe(3);
});

test('(+) using any letter or different character than a number returns "NaN"', () => {
    expect(suma(['a', 3, 4, 5])).toBe("NaN");
    expect(suma([2, 3, 4, 'c'])).toBe("NaN");
    expect(suma([2, '!', 4, 'c', '!'])).toBe("NaN");
});

test('(+) sending no values returns 0', () => {
    expect(suma()).toBe(0);
    expect(suma([])).toBe(0);
});

test('(+) sending one value returns the value', () => {
    expect(suma(0)).toBe(0);
    expect(suma([0])).toBe(0);
    expect(suma(1)).toBe(1);
    expect(suma([0])).toBe(0);
});

test('(+) sending more than one value will always return the first value (if its an array will return the operation)', () => {
    expect(suma(0, 1, 2)).toBe(0);
    expect(suma(3, 4)).toBe(3);
    expect(suma([8, 5, 9], 3, 0, 'a')).toBe(22);
});

test('(+) using decimals works', () => {
    expect(suma([7.6, 3.5])).toBe(11.1);
    expect(suma([7.63749729, 3.583221])).toBe(11.22071829);
});

test('(+) adding negative numbers work', () => {
    expect(suma([3, -2])).toBe(1);
    expect(suma([-3, -6, -8])).toBe(-17);
    expect(suma([25, -50, 100])).toBe(75);
});


//Resta
test('(-) deduct 1 from 3 equals 2', () => {
    expect(resta([3, 1])).toBe(2);
});

test('(-) using any letter or different character than a number returns "NaN"', () => {
    expect(resta(['a', 3, 4, 5])).toBe("NaN");
    expect(resta([2, 3, 4, 'c'])).toBe("NaN");
    expect(resta([2, '!', 4, 'c', '!'])).toBe("NaN");
});

test('(-) sending no values returns 0', () => {
    expect(resta()).toBe(0);
    expect(resta([])).toBe(0);
});

test('(-) sending one value returns the value', () => {
    expect(resta(0)).toBe(0);
    expect(resta([0])).toBe(0);
    expect(resta(1)).toBe(1);
    expect(resta([0])).toBe(0);
});

test('(-) sending more than one value will always return the first value (if its an array will return the operation)', () => {
    expect(resta(0, 1, 2)).toBe(0);
    expect(resta(-3, -4)).toBe(-3);
    expect(resta([8, 5, 9], 3, 0, 'a')).toBe(-6);
});

test('(-) using decimals works', () => {
    expect(resta([7.6, 3.5])).toBe(4.1);
    expect(resta([7.63749729, 3.583221])).toBe(4.05427629);
});

test('(-) adding negative numbers work', () => {
    expect(resta([3, -2])).toBe(5);
    expect(resta([-3, -6, -8])).toBe(11);
    expect(resta([25, -50, 100])).toBe(-25);
});


//Multiplicació
test('(*) multiply 2 by 3 to be 6', () => {
    expect(multiplicar([2, 3])).toBe(6);
});

test('(*) using any letter or different character than a number returns "NaN"', () => {
    expect(multiplicar(['a', 3, 4, 5])).toBe("NaN");
    expect(multiplicar([2, 3, 4, 'c'])).toBe("NaN");
    expect(multiplicar([2, '!', 4, 'c', '!'])).toBe("NaN");
});

test('(*) sending no values returns 0', () => {
    expect(multiplicar()).toBe(0);
    expect(multiplicar([])).toBe(0);
});

test('(*) sending one value returns the value', () => {
    expect(multiplicar(0)).toBe(0);
    expect(multiplicar([0])).toBe(0);
    expect(multiplicar(1)).toBe(1);
    expect(multiplicar([0])).toBe(0);
});

test('(*) sending more than one value will always return the first value (if its an array will return the operation)', () => {
    expect(multiplicar(0, 1, 2)).toBe(0);
    expect(multiplicar(-3, -4)).toBe(-3);
    expect(multiplicar([8, 5, 9], 3, 0, 'a')).toBe(360);
});

test('(*) using decimals works', () => {
    expect(multiplicar([7.6, 3.4])).toBe(25.84);
    expect(multiplicar([7.63749729, 3.583221])).toBe(27.36684067697109);
});

test('(*) adding negative numbers work', () => {
    expect(multiplicar([3, -2])).toBe(-6);
    expect(multiplicar([-3, -6, -8])).toBe(-144);
    expect(multiplicar([25, -50, 100])).toBe(-125000);
});


//Divisió
test('(/) divide 8 by 2 to be 4', () => {
    expect(dividir([8, 2])).toBe(4);
});

test('(/) divide more than one number in a row works', () => {
    expect(dividir([100, 2, 2, 5])).toBe(5);
    expect(dividir([100, 2, 2, 2, 2])).toBe(6.25);
});

test('(/) using any letter or different character than a number returns "NaN"', () => {
    expect(dividir(['a', 3, 4, 5])).toBe("NaN");
    expect(dividir([2, '!', 4, 'c', '!'])).toBe("NaN");
});

test('(/) sending no values returns 0', () => {
    expect(dividir()).toBe(0);
    expect(dividir([])).toBe(0);
});

test('(/) sending one value returns the value', () => {
    expect(dividir(0)).toBe(0);
    expect(dividir([0])).toBe(0);
    expect(dividir(1)).toBe(1);
    expect(dividir([0])).toBe(0);
});

test('(/) sending more than one value will always return the first value (if its an array will return the operation)', () => {
    expect(dividir(0, 1, 2)).toBe(0);
    expect(dividir(-3, -4)).toBe(-3);
    expect(dividir([8, 5, 9], 3, 0, 'a')).toBe(0.17777777777777778);
});

test('(/) using decimals works', () => {
    expect(dividir([7.5, 3])).toBe(2.5);
    expect(dividir([8.428, 4])).toBe(2.107);
});

test('(/) adding negative numbers work', () => {
    expect(dividir([3, -2])).toBe(-1.5);
    expect(dividir([-3, -6, -8])).toBe(-0.0625);
    expect(dividir([25, -50, 100])).toBe(-0.005);
});

test('(/) divide by 0 is not possible', () => {
    expect(dividir([100, 0])).toBe("Not possible");
    expect(dividir([0, 0])).toBe("Not possible");
    expect(dividir([0, 0, 0])).toBe("Not possible");
});
    
})

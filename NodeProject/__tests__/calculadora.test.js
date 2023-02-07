const operacions = require('./app/calculadora');
//En aquest testing sempre donarem per fet que l'operació que passem es una de les 4 possibles

//Suma
test('(+) add 1 to 2 equals 3', () => {
    expect(operacions('+', [1, 2])).toBe(3);
});

test('(+) using any letter or different character than a number returns "NaN"', () => {
    expect(operacions('+', ['a', 3, 4, 5])).toBe("NaN");
    expect(operacions('+', [2, 3, 4, 'c'])).toBe("NaN");
    expect(operacions('+', [2, '!', 4, 'c', '!'])).toBe("NaN");
});

test('(+) sending no values returns 0', () => {
    expect(operacions('+')).toBe(0);
    expect(operacions('+', [])).toBe(0);
});

test('(+) sending one value returns the value', () => {
    expect(operacions('+', [0])).toBe(0);
    expect(operacions('+', [1])).toBe(1);
});

test('(+) using decimals works', () => {
    expect(operacions('+', [7.6, 3.5])).toBe(11.1);
    expect(operacions('+', [7.63749729, 3.583221])).toBe(11.22071829);
});

test('(+) adding negative numbers work', () => {
    expect(operacions('+', [3, -2])).toBe(1);
    expect(operacions('+', [-3, -6, -8])).toBe(-17);
    expect(operacions('+', [25, -50, 100])).toBe(75);
});


//Resta
test('(-) deduct 1 from 3 equals 2', () => {
    expect(operacions('-', [3, 1])).toBe(2);
});

test('(-) using any letter or different character than a number returns "NaN"', () => {
    expect(operacions('-', ['a', 3, 4, 5])).toBe("NaN");
    expect(operacions('-', [2, 3, 4, 'c'])).toBe("NaN");
    expect(operacions('+', [2, '!', 4, 'c', '!'])).toBe("NaN");
});

test('(-) sending no values returns 0', () => {
    expect(operacions('-')).toBe(0);
    expect(operacions('-', [])).toBe(0);
});

test('(-) sending one value returns the value', () => {
    expect(operacions('-', [0])).toBe(0);
    expect(operacions('-', [1])).toBe(1);
});

test('(-) using decimals works', () => {
    expect(operacions('-', [7.6, 3.5])).toBe(4.1);
    expect(operacions('-', [7.63749729, 3.583221])).toBe(4.05427629);
});

test('(-) adding negative numbers work', () => {
    expect(operacions('-', [3, -2])).toBe(5);
    expect(operacions('-', [-3, -6, -8])).toBe(11);
    expect(operacions('-', [25, -50, 100])).toBe(-25);
});


//Multiplicació
test('(*) multiply 2 by 3 to be 6', () => {
    expect(operacions('*', [2, 3])).toBe(6);
});

test('(*) using any letter or different character than a number returns "NaN"', () => {
    expect(operacions('*', ['a', 3, 4, 5])).toBe("NaN");
    expect(operacions('*', [2, 3, 4, 'c'])).toBe("NaN");
    expect(operacions('*', [2, '!', 4, 'c', '!'])).toBe("NaN");
});

test('(*) sending no values returns 0', () => {
    expect(operacions('*')).toBe(0);
    expect(operacions('*', [])).toBe(0);
});

test('(*) sending one value returns the value', () => {
    expect(operacions('*', [0])).toBe(0);
    expect(operacions('*', [1])).toBe(1);
});

test('(*) using decimals works', () => {
    expect(operacions('*', [7.6, 3.4])).toBe(25.84);
    expect(operacions('*', [7.63749729, 3.583221])).toBe(27.36684067697109);
});

test('(*) adding negative numbers work', () => {
    expect(operacions('*', [3, -2])).toBe(-6);
    expect(operacions('*', [-3, -6, -8])).toBe(-144);
    expect(operacions('*', [25, -50, 100])).toBe(-125000);
});

//Divisió
test('(/) divide 8 by 2 to be 4', () => {
    expect(operacions('/', [8, 2])).toBe(4);
});

test('(/) divide more than one number in a row works', () => {
    expect(operacions('/', [100, 2, 2, 5])).toBe(5);
    expect(operacions('/', [100, 2, 2, 2, 2])).toBe(6.25);
});

test('(/) using any letter or different character than a number returns "NaN"', () => {
    expect(operacions('/', ['a', 3, 4, 5])).toBe("NaN");
    expect(operacions('/', [2, 0, 4, 'c'])).toBe("NaN");
    expect(operacions('/', [2, '!', 4, 'c', '!'])).toBe("NaN");
});

test('(/) sending no values returns 0', () => {
    expect(operacions('/')).toBe(0);
    expect(operacions('/', [])).toBe(0);
});

test('(/) sending one value returns the value', () => {
    expect(operacions('/', [0])).toBe(0);
    expect(operacions('/', [1])).toBe(1);
});

test('(/) using decimals works', () => {
    expect(operacions('/', [7.5, 3])).toBe(2.5);
    expect(operacions('/', [8.428, 4])).toBe(2.107);
});

test('(/) adding negative numbers work', () => {
    expect(operacions('/', [3, -2])).toBe(-1.5);
    expect(operacions('/', [-3, -6, -8])).toBe(-0.0625);
    expect(operacions('/', [25, -50, 100])).toBe(-0.005);
});

test('(/) divide by 0 is not possible', () => {
    expect(operacions('/', [100, 0])).toBe("Not possible");
    expect(operacions('/', [0, 0])).toBe("Not possible");
    expect(operacions('/', [0, 0, 0])).toBe("Not possible");
});

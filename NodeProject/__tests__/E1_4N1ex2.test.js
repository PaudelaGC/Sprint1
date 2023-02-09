const beureCafe = require('./E1_4N1ex2');
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test("cridar la funció funciona de forma normal en el temps establert", () => {
    beureCafe();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
})

test("cridar la funció amb cap paràmetre la invoca de forma normal", async() => {
    beureCafe("dfjlkdfjsldk");
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    beureCafe(9);
    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
})

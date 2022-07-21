const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One dollar should be 106.6 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(16)).toBeLessThan(1705.4);
})
test("One yen should be 0.006 punds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(160)).toBeCloseTo(1);
})
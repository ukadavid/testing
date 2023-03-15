const mathOperations = require('./calculator');

describe('Calculator tests', () => {
    test('adding 1 + 2 should return 10', () => {
        expect(mathOperations.sum(2, 3)).toBe(5)
    })
    test('substracting 1 - 2 should return -1', () => {
        expect(mathOperations.diff(2, 3)).toBe(-1);
        expect(mathOperations.diff(2, 3)).not.toBe(1);
    })
    test('Product 1 * 2 should return 2', () => {
        expect(mathOperations.product(2, 3)).toBe(6)
    })
    test('Division of 1 / 2 should return 0.5', () => {
        expect(mathOperations.divide(2, 3)).toBe(0.7)
    })
})

describe('Checking values of a and b', () => {
    test('Check a and b for truthy and falsy', ()=> {
        expect(mathOperations.a).not.toBeNull()
    })
    test('Check a and b for truthy and falsy', ()=> {
        expect(mathOperations.b).toBeTruthy()
    })
    test('Check a and b for truthy and falsy', ()=> {
        expect(mathOperations.a).not.toBeFalsy()
    })
    
})

describe('Further checking of the values of a and b', () => {
    test ('Greaterthan 0 or less than operation', () => {
        expect(mathOperations.b).toBeGreaterThan(0)
    })
    test ('Greaterthan 0 or less than operation', () => {
        expect(mathOperations.a).toBeLessThan(10)
    })
    test ('Greaterthan 0 or less than operation', () => {
        expect(mathOperations.b).toBeGreaterThanOrEqual(2)
    })
})

// //Check for strings
// describe('Checking if the values of a and b are strings', () => {
//     test('String check', () => {
//         expect(mathOperations.a).not.toMatch(/abc/)
//     })
//     test('String check', () => {
//         expect(mathOperations.b).not.toMatch(/abc/)
//     })
//     test('String check', () => {
//         expect(mathOperations.b).not.toMatch(/\D/)
//     })
//     test('String check', () => {
//         expect(mathOperations.a).not.toMatch(/\d/)
//     })
// })

// Jest Hooks
describe('Calculator tests', () => {
    let input1 = 0
    let input2 = 0
    beforeAll(() => {
        console.log('beforeAll called')
    });
    afterAll(() => {
        console.log('afterAll called')
    });
    beforeEach(() => {
        console.log('beforeEach called');
        input1 = 1;
        input2 = 2
    });
    afterEach(() => {
        console.log('afterEach called')
    })
    test('addition', () => {
        expect(mathOperations.sum(input1, input2)).toBe(0)
    })

})
const { rollDice } = require("../src/diceRolling")

beforeEach(() => { 
    console.log("A test has been started!")
});

afterAll(() => {
    console.log("All tests have been completed!")
});

describe('As a casual gamer...', () => { 
    
    test('...I want to roll a 6-sided die...', () => { 

        let result = rollDice();

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(6);


     })

 })
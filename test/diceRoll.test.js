const { rollDice } = require("../src/diceRolling");

// beforeEach(() => { 
//     console.log("A test has been started!")
// });

// afterAll(() => {
//     console.log("All tests have been completed!")
// });

describe('As a casual gamer...', () => { 
    
    test('...I want to roll a 6-sided die...', () => { 

        let result = rollDice();

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(6);


     });

 });

 describe('As a dungeon master...', () => { 
    describe('...I want to roll a vareity of dice sizes, such as...', () => { 

        let diceVarieties = [
            {
                diceSize: 4,
                diceName: "D4"
            },
            {
                diceSize: 6,
                diceName: "D6"
            },
            {
                diceSize: 8,
                diceName: "D8"
            },
            {
                diceSize: 10,
                diceName: "D10"
            },
            {
                diceSize: 12,
                diceName: "D12"
            },
            {
                diceSize: 20,
                diceName: "D20"
            }
        ]

        test.each(diceVarieties)("$diceName", (diceObject) => {
            let diceResult = rollDice(diceObject.diceSize);
            expect(diceResult).toBeGreaterThan(0);
            expect(diceResult).toBeLessThanOrEqual(diceObject.diceSize);
        })
        
     });
    

  });
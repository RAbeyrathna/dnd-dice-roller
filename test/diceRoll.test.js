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
    
    test('...roll with disadvantage', () => { 
        let rollDiceWithDisadvantage = jest.fn().mockReturnValue(
            {
                finalResult: 1,
                rolls: [1,20]
            }
        );

        let rollResult = rollDiceWithDisadvantage(20)

        expect(rollResult.finalResult).toBe(1);

     });

     test.skip('...roll with advantage', () => { 
        let rollResult = null;

        expect(rollResult.finalResult).toBe(20);
      });

     test('...I want to see how many natural 20s I get in a session where I roll 1000 D20s', () => { 
        
        let diceResults =[];

        for (let index = 0; index < 1000; index++) {
            diceResults.push(rollDice(20));           
        }

        console.log(diceResults);
        console.log(diceResults.length);

        let arrayOfNatural20s = diceResults.filter((roll) => roll == 20);
        console.log("Number of natural 20s is: " + arrayOfNatural20s.length);

        expect(diceResults.length).toBe(1000);
        expect(diceResults).toContain(20);


      })
  });
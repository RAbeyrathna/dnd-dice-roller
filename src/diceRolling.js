

/**
 * Generate a random between 1 and a given size.
 *
 * @param {number} [diceSize=6] - Number that represents the number of sides on the dice
 * @returns {*} - A random number between 1 and the given number of sides
 */
function rollDice(diceSize = 6) {
    let rollResult = Math.floor(Math.random() * diceSize) + 1;
    
    return rollResult;
}

/**
 * Generate a random between 1 and a given size twice, identifies the highest number of the two.
 *
 * @param {number} [diceSize=6] - Number that represents the number of sides on the dice
 * @returns {*} - A random number between 1 and the given number of sides twice, identifying the highest number of the two.
 */
function rollDiceWithAdvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]

    result.finalResult = Math.max(...result.rolls);

    return result;

}

/**
 * Generate a random between 1 and a given size twice, identifies the smallest number of the two.
 *
 * @param {number} [diceSize=6] - Number that represents the number of sides on the dice
 * @returns {*} - A random number between 1 and the given number of sides twice, identifying the smallest number of the two.
 */
function rollDiceWithDisadvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]

    result.finalResult = Math.min(...result.rolls);

    return result;

}


module.exports = {
    rollDice,
    rollDiceWithAdvantage,
    rollDiceWithDisadvantage
}
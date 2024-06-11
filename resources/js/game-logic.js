const Signs = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}
const Result = {
    win: 'win',
    lose: 'lose',
    draw: 'draw'
}
const RulesMatrix = {
    [Signs.rock]: {
        [Signs.rock]: Result.draw,
        [Signs.paper]: Result.lose,
        [Signs.scissors]: Result.win,
    },

    [Signs.paper]: {
        [Signs.rock]: Result.win,
        [Signs.paper]: Result.draw,
        [Signs.scissors]: Result.lose,
    },

    [Signs.scissors]: {
        [Signs.rock]: Result.lose,
        [Signs.paper]: Result.win,
        [Signs.scissors]: Result.draw,
    }
}
/**
 * Selecting/comparing 2 options between rock, paper scissors and determines who wins
 * @param {string} sign1
 * @param {string} sign2
 * @returns {string} Returns the result of the comparison
 */
function compareSign(sign1, sign2) {
    if (!(Object.values(Signs).includes(sign1))) {
        throw new Error(`sign1 is not allowed it has illegal value: ${sign1}`)
    }
    if (!(Object.values(Signs).includes(sign2))) {
        throw new Error(`sign2 is not allowed it has illegal value: ${sign2}`)
    }

    return RulesMatrix[sign1][sign2]

}

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
    switch (sign1) {
        case Signs.rock:
            switch (sign2) {
                case Signs.paper:
                    return Result.lose
                    break;
                case Signs.scissors:
                    return Result.win
                    break;
                case Signs.rock:
                    return Result.draw
                    break;
            }
        case Signs.paper:
            switch (sign2) {
                case Signs.paper:
                    return Result.draw
                    break;
                case Signs.scissors:
                    return Result.lose
                    break;
                case Signs.rock:
                    return Result.win
                    break;
            }
        case Signs.scissors:
            switch (sign2) {
                case Signs.paper:
                    return Result.win
                    break;
                case Signs.scissors:
                    return Result.draw
                    break;
                case Signs.rock:
                    return Result.lose
                    break;
            }
    }
}



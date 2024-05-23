/**
 * Selecting/comparing 2 options between rock, paper scissors and determines who wins
 * @param {string} a
 * @param {string} b
 * @returns {boolean} Returns true if the option a beats the option b. false otherwise.
 */
function compareSign(a, b) { 
    return a.length > b.length;
}
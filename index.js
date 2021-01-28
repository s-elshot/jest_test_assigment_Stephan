
// function getPositives#1 - schrijf een functie (getPositives) die enkel de positieve getallen van een array retourneert.

function getPositives(inArray) {

    const swapArray = [];

    for (let i = 0; i < inArray.length; i++) {
        let check = inArray[i];

        if (check >= 0) {
            swapArray.push(check);
        }
        return swapArray;
    }
}


// exported functions
module.exports = {
    getPositives: getPositives,
}


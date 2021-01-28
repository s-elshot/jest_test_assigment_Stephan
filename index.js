// function add#1
function add(number1,number2){
    sum = number1 + number2;
    return sum;
}
// function add#2
function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}


// function findByName#1
function findByName(users, name){
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.name === name ){
            console.log("found "+ name);
            return user
        }
    } return null
}

// function getPositives#1
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
    add: add,
    findByName: findByName,
    multiply: multiply,
    getPositives: getPositives,
}


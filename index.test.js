const {add, findByName, multiply,getPositives} = require("./index")

test("multiply() function should return the product of 2 numbers", ()=> {

//arrange
const num1 = 8;
const num2 = 7;

//act
const result = multiply(num1,num2)

//assert
expect(result).toBe(56);
})


test("add() function should return sum of 2 numbers", ()=> {

//arrange
    const number1 = 5;
    const number2 = 7;

//act
    const sum = add(number1,number2)

//assert
    expect(sum).toBe(12);
})




test("findByName() function returns an object from an array with a specified name", ()=> {

//arrange
const users = [
    {id:1,name:"Massaro"},
    {id:2,name:"Batistuta"},
    {id:3,name:"Romario"},
    {id:4,name:"Weah" }
    ];

//act
const usernameToFind = "Romario"
const user = findByName(users, usernameToFind)

//assert
expect(user).toEqual({id:3,name:"Romario"})
})



test("findByName should return null, if the element is not found", () => {

//arrange
    const users = [
        {id:1,name:"Massaro"},
        {id:2,name:"Batistuta"},
        {id:3,name:"Romario"},
        {id:4,name:"Weah" }
    ];

//act
    const usernameToFind = "Kees";
    const user = findByName(users, usernameToFind);

//assert
    expect(user).toBeNull();
})


test("getPositives() function returns an arraylist with only positive numbers", ()=> {

//arrange
    let inArray = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
//act
    let swapArray = getPositives(inArray);

//assert
    expect(swapArray).toEqual([10, 12, 5, 90, 0, 1])
})


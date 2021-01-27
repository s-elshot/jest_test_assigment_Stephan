function add(number1,number2){
    sum = number1+number2;
    return sum;
}

function findByName(users, name){
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.name === name ){
            console.log("found "+ name);
            return user
        }
    } return null
}




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
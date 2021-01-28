// import functions index.js
const {add, findByName, multiply,getPositives} = require("./index")

// test getPositives()
test("getPositives() function returns an arraylist with only positive numbers", ()=> {

//arrange
    let inArray = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
//act
    let swapArray = getPositives(inArray);

//assert
    expect(swapArray).toEqual([10, 12, 5, 90, 0, 1])
})


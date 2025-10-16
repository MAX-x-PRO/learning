'use strict'

const constObj = { name: "John" };
let letObj = { name: "Smith" };

const anotherObj = { name: "Alice" };

letObj.name = "Doe";
constObj.name = "Brown"; 
// We can change field inside of object even if it's const

letObj = anotherObj;
/*constObj = anotherObj; <- This code will cause an error*/
// Cuz we cant change const object itself to another one

const createUser = (name, city) => {
    return { name, city };
}

const userName = "Bob";
const city = "Lviv";

console.log(`User with name ${userName}: ${JSON.stringify(createUser(userName, city))}\n`);
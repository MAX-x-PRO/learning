'use strict'

const phoneBook = [ 
    { name: 'Alice', phone: '+380998882244'}, 
    { name: 'Bob', phone: '+380667771122' }, 
    { name: 'Charlie', phone: '+380639993333' },
    { name: 'David', phone: '+380501112222' },
    { name: 'Eve', phone: '+380731234567' } 
];

const findPhoneByName = (name) => {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
    
    return 'Not found';
}

console.log(`Phone of Bob is ${findPhoneByName('Bob')}\n`);
console.log(`Phone of John is ${findPhoneByName('John')}\n`);

const phoneBookHash = {};
for (let curPhone of phoneBook) {
    phoneBookHash[curPhone.name] = curPhone.phone;
}

const findPhoneByNameHash = (name) => {
    return phoneBookHash[name] || 'Not found';
}
console.log(`Phone of Alice is ${findPhoneByNameHash('Alice')} (found by using hash)\n`);
console.log(`Phone of John is ${findPhoneByNameHash('John')}(found by using hash) \n`);
'use strict'

const random = (min = 0, max) => {
    if (min >= max) { return null }
    
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(`Random number between 100 and 2000 is ${random(100, 2000)}\n`)

module.exports = { random }
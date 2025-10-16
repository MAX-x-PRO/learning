'use strict'

const { random } = require("./randomNumber")

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const getRandomKey = (length = 16, characterSet) => {
    if (length <= 0) { return '' }
    let key = ''

    for (let i = 0; i < length; i++) {
        const index = random(0, characterSet.length - 1)
        key += characterSet[index]
    }

    return key
}

console.log(`Random key is ${getRandomKey(32, characters)}`)
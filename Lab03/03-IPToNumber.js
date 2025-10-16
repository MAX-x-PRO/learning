'use strict'

const ipToNumber = (ip) => {
    const segments = ip.split('.')
    let number = 0

    for (let i = 0; i < segments.length; i++){
        number += segments[i] << (((segments.length - 1) - i) * 8 )
    }

    return number
}

console.log(`IP 127.0.0.1 to number is ${ipToNumber('127.0.0.1')}\n`)
console.log(`IP 192.168.1.10 to number is ${ipToNumber('192.168.1.10')}\n`)
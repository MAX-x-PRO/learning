'use strict'

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}

const objectIntrospection = (object) =>{
    const funcObj = Object.keys(object)
    .filter(key => typeof(object[key])  === 'function')
    .map(key => [key, object[key].length])

    return funcObj
}

console.log(`Introspection for iface object is\n ${JSON.stringify(objectIntrospection(iface))}\n`)
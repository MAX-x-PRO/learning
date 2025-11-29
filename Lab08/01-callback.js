'use strict';

const iterate = (obj, callback) => {
  const keys = Object.keys(obj);

  for (const key of keys) {
    const value = obj[key];
    callback(key, value, obj);
  }
};

const exampleObj = {
  name: 'Alice',
  age: 30,
  city: 'New York'
}
iterate(exampleObj, (key, value) => {
    console.log(`${key}: ${value}`);
})
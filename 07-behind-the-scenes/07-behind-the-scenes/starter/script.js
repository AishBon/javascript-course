'use strict';

// console.log(varX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// let age = 30;
// let oldage = age;
// age = 31;

// console.log('age', age);
// console.log('oldage', oldage);

// const me = { name: 'Aisha', age: 22 };

// const friend = me;

// friend.name = 'Enzo';
// friend.age = 24;

// console.log('me', me);
// console.log('friend', friend);

// const original = {
//   name: 'Aisha',
//   age: 22,
//   hobbies: ['volleyball', 'eating'],
// };

// const shallowCopy = { ...original };
// shallowCopy.name = 'Enzo';

// console.log('original name: ', original.name);
// console.log('copy name: ', shallowCopy.name);

// shallowCopy.hobbies.push('basketball');

// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);

const deepOriginal = {
  name: 'Aisha',
  age: 22,
  address: { city: 'Tokyo', country: 'Japan' },
  hobbies: ['volleyball', 'eating'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'Kyoto';
deepCopy.hobbies.push('basketball');
deepCopy.name = 'Enzo';

console.log(deepOriginal);
console.log(deepCopy);

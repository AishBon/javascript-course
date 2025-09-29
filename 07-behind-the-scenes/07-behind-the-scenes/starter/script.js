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

// const deepOriginal = {
//   name: 'Aisha',
//   age: 22,
//   address: { city: 'Tokyo', country: 'Japan' },
//   hobbies: ['volleyball', 'eating'],
// };

// const deepCopy = structuredClone(deepOriginal);

// deepCopy.address.city = 'Kyoto';
// deepCopy.hobbies.push('basketball');
// deepCopy.name = 'Enzo';

// console.log(deepOriginal);
// console.log(deepCopy);

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello I am ${this.name}`);
//   },
// };

// person.greet();

// const anotherPerson = { name: 'Sarah' };
// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// const greetFuction = person.greet;
// greetFuction();

// const obj = {
//   name: 'Objects',
//   regularMethod: function () {
//     console.log('Regular: ', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow: ', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished.`);
//     }, 1000);
//   },
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern.`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log(arguments);
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
//functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

console.log("Part 2: Functions ready!");

// functions - declarations and expressions
console.log("=== FUNCTIONS ===");

function logger() {
    console.log("This function is working");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function expression
const calcAge = function(birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge(2000);
console.log(age1);

function calcAge2(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}

const myAge = calcAge(1991, 2037);
const herAge = calcAge(2005, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46));
console.log(introduce("Sarah"));

function calcAge3(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(2003, "Aisha"));
console.log(yearsUntilRetirement(1950, "Mike"));

// Global scope
const globalVar = "I am global";

function testScope() {
  const localVar = "I am local";
  console.log(globalVar); 
  console.log(localVar); 
}

testScope();
console.log(globalVar);
// console.log(localVar);

const userName = "Jonas"; // Global

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`; 
  const timestamp = new Date().toLocaleTimeString();
  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));


// 1. Calculate average of 3 scores
function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}

// 2. Check winner
function checkWinner(dolphins, koalas) {
  if (dolphins >= koalas * 2) {
    return `Dolphins win (${dolphins} vs. ${koalas})`;
  } else if (koalas >= dolphins * 2) {
    return `Koalas win (${koalas} vs. ${dolphins})`;
  } else {
    return 'No winner';
  }
}

// Test Data 1
let avgD = calcAverage(44, 23, 71);
let avgK = calcAverage(65, 54, 49);
console.log(checkWinner(avgD, avgK));

// Test Data 2
avgD = calcAverage(85, 54, 41);
avgK = calcAverage(23, 34, 27);
console.log(checkWinner(avgD, avgK));

// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("===VARIABLES===")

// let firstName = "Aisha";
// console.log(firstName);

// let age = 21;
// console.log(age);
// age = 22;
// console.log(age);

// const birthYear = 2003;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// //do not use var
// var job = "Programmer";

// let lastName = "Bonoan";
// let myCurrentJob = "Developer";
// let PIZ = 3.14;

// const country = "portugal";
// const language = "Portuguese";
// const population = 10;

// let ageNow = 25;
// ageNow = 26;

// console.log("=== DATA TYPES ===");

// let weight = 45;
// console.log(weight);
// console.log(typeof age);

// //String
// let username = "Max";
// console.log(username);
// console.log(typeof username);

// //Boolean
// let javascriptisFun = true;
// console.log(javascriptisFun);
// console.log(typeof javascriptisFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now i am a string";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


//////////////////

// // Basic Operators - Math operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now -2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations");
// console.log("Addition:", 10 + 5);
// console.log("Subraction:",  20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// //String concat

// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + ' ' + lastName);

// console.log("hello " + "World" + "!");
// console.log("I am " + 25 + " years old");

// // Assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x);

// x /= 2;
// console.log("x starts as:", x);

// x++;
// console.log("x starts as:", x);

// x--;
// console.log("x starts as:", x);

// /////////////

// console.log("=== COMPARISON OPERATIONS ===");

// console.log("Age Comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison:");
// console.log(25 >20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);
// console.log(ageJonas > ageSarah);

//Operator precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

// ///////////////

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;

// const bmiJohn = massJohn / heightJohn ** 2;

// console.log("Mark BMI:", + bmiMark);
// console.log("John BMI:", + bmiJohn);

// console.log("Does Mark have a higher BMI than John:", + bmiMark > bmiJohn);

// Strings and Template literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm $ {2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`); // true

console.log(`this is a regular string`);

///////////

//Taking decisions: if /else statements

const age = 10;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

//////////////

//Truthy and Falsey values
console.log(Boolean(0)); // false
console.log(Boolean (undefined));
console.log(Boolean("Jonas"));


const money = 0;

if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); 
}

if (height !== undefined) {
  console.log("Height is defined");
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;

if (markHigherBMI) {
  console.log(`Mark's BMI is higher than John's by a ${BMIMark - BMIJohn} margin`);
} else {
  console.log(`John's BMI is higher than Mark's by a ${BMIJohn - BMIMark} margin`);
}


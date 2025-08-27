// console.log("Part 2: Functions ready!");

// // functions - declarations and expressions
// console.log("=== FUNCTIONS ===");

// function logger() {
//     console.log("This function is working");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //function expression
// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// };

// const age1 = calcAge(2000);
// console.log(age1);

// function calcAge2(birthYear, currentYear) {
//   const age = currentYear - birthYear;
//   return age;
// }

// const myAge = calcAge(1991, 2037);
// const herAge = calcAge(2005, 2037);

// console.log(`I am ${myAge} years old`);
// console.log(`She is ${herAge} years old`);

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46));
// console.log(introduce("Sarah"));

// function calcAge3(birthYear) {
//   return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge3(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(2003, "Aisha"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// // Global scope
// const globalVar = "I am global";

// function testScope() {
//   const localVar = "I am local";
//   console.log(globalVar); 
//   console.log(localVar); 
// }

// testScope();
// console.log(globalVar);
// // console.log(localVar);

// const userName = "Jonas"; // Global

// function createWelcomeMessage(user) {
//   const message = `Welcome back, ${user}!`; 
//   const timestamp = new Date().toLocaleTimeString();
//   return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));


// // 1. Calculate average of 3 scores
// function calcAverage(a, b, c) {
//   return (a + b + c) / 3;
// }

// // 2. Check winner
// function checkWinner(dolphins, koalas) {
//   if (dolphins >= koalas * 2) {
//     return `Dolphins win (${dolphins} vs. ${koalas})`;
//   } else if (koalas >= dolphins * 2) {
//     return `Koalas win (${koalas} vs. ${dolphins})`;
//   } else {
//     return 'No winner';
//   }
// }

// // Test Data 1
// let avgD = calcAverage(44, 23, 71);
// let avgK = calcAverage(65, 54, 49);
// // console.log(checkWinner(avgD, avgK));

// // // Test Data 2
// // avgD = calcAverage(85, 54, 41);
// // avgK = calcAverage(23, 34, 27);
// // console.log(checkWinner(avgD, avgK));

// const student1Grade = 85;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const mixed = ["Jonas", 27, true, grades];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // access array element
// console.log(grades[0]);
// console.log(grades[3]);

// console.log(grades.length);

// console.log(grades[0]);
// grades[0] = 99;
// console.log(grades);

// console.log(grades[0]);
// console.log(grades[0]);

// const calcAge = function(birthYear) {
//   return 2025 - birthYear;
// };

// const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
// console.log(ages);
// ages[1] = calcAge(1950);
// console.log(ages);

// //array methods
// const friends = ["Michael", "Steven","Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// //remove elements
// const poped = friends.pop();
// console.log(poped);
// console.log(friends);

// //pop()
// //shift()

// console.log(friends.indexOf("Michael"));
// console.log(friends.indexOf("John"));

// console.log(friends.includes("Michael"));
// // console.log(friends.includes("John"));

// const friends = ["Michael", "Steven", "Peter"];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// friends.forEach(function(friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//   total += grades[i];
// }

// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passCount =0;
// grades.forEach(grade => {
//     if (grade >= 70) passCount++;
// });

// console.log(`${passCount} out of ${grades.length} students passed.`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);


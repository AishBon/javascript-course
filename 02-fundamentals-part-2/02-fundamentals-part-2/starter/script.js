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

// // console.log(`${passCount} out of ${grades.length} students passed.`);

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

////////////////////////////////////
// The Array Problem
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // console.log(jonasArray[0]); 
// // console.log(jonasArray[1]); 
// // console.log(jonasArray[2]); 

// ////////////////////////////////////
// // Objects - Creation with Object Literal Syntax
// console.log("=== OBJECTS ===");

// const jonas = {
//   firstName: "Jonas", 
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher", 
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   46,
//   "teacher",
// //   ["Michael", "Peter", "Steven"],
// // ];

// // const jonasObject = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   age: 46,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// // };

// // // Dot notation - clean and readable
// // console.log(jonas.firstName); 
// // console.log(jonas.lastName); 
// // console.log(jonas.age); 
// // console.log(jonas.job);
// // console.log(jonas.friends);

// // // Bracket notation - uses strings
// // console.log(jonas["firstName"]);
// // console.log(jonas["lastName"]);
// // console.log(jonas["age"]);

// // // Bracket notation with expressions - compute property names!
// // // const nameKey = "Name";
// // // console.log(jonas["first" + nameKey]);
// // // console.log(jonas["last" + nameKey]);

// // // // Both notations work for modification
// // // jonas.job = "programmer";
// // // jonas["age"] = 35;
// // // console.log(jonas);

// // // // Objects can grow - add properties after creation
// // // jonas.location = "Portugal";
// // // jonas["twitter"] = "@jonasschmedtman";
// // // jonas.hasDriversLicense = true;
// // // console.log(jonas);

// // // // Objects - Creation with Object Literal Syntax
// // // console.log("=== MY OBJECTS ===");

// // // // 1. Create a 'book' object
// // // const book = {
// // //   title: "Miss Peregrine's Home for Peculiar Children",
// // //   author: "Ransom Riggs",
// // //   pages: 352,
// // //   isRead: false,
// // // };
// // // console.log(book);

// // // // 2. Create a 'playlist' object
// // // const playlist = {
// // //   name: "Mellow bar",
// // //   creator: "Aisha",
// // //   songs: ["Fabric of Reality", "Potential for Love", "Mind-Altering Substance", "Ecstasy"],
// // //   genre: "Bedroom R&B",
// // // };
// // // console.log(playlist);

// // // // 3. Access and log different properties using both dot and bracket notation
// // // console.log(book.title); 
// // // console.log(book.author); 
// // // console.log(book.pages);
// // // console.log(book.isRead);

// // // console.log(playlist["name"]);
// // // console.log(playlist["creator"]);
// // // console.log(playlist["songs"]);
// // // console.log(playlist["genre"]);

// // // // 4. Add a new property to each object
// // // book.yearPublished = 2011;
// // // playlist["likes"] = 103;

// // // console.log(book);
// // // console.log(playlist);

// // // // 5. Modify an existing property in each object
// // // book.isRead = true;
// // // playlist.genre = "Chill R&B";

// // // console.log(book);
// // // console.log(playlist);

// // // Ordered, indexed data - think lists
// // const listOfYears = [1991, 1984, 2008, 2020];
// // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // const testScores = [85, 92, 78, 96];

// // // Named, descriptive data - think entities
// // const person = {
// //   name: "Jonas",
// //   age: 46,
// //   occupation: "teacher",
// // };

// // const car = {
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   color: "blue",
// // };

// // // Objects can contain arrays, arrays can contain objects
// // const student = {
// //   name: "Sarah",
// //   grades: [85, 92, 78],
// //   address: {

// //     street: "123 Main St",
// //     city: "New York",
// //   },
// // };

// // console.log(student.grades[0]);
// // console.log(student.address.city);

// // ////////////////////////////////////
// // // Object Methods

// // const jonas = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   // Method - function inside object
// //   calcAge: function (birthYear) {
// //     return 2037 - birthYear;
// //   },
// // };

// // // Call methods using dot notation
// // console.log(jonas.calcAge(1991));
// // console.log(jonas.calcAge(jonas.birthYear));

// // const jonasImproved = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// // //   birthYear: 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge: function () {
// // //     console.log(this);
// // //     return 2037 - this.birthYear;
// // //   },
// // // };

// // // console.log(jonasImproved.calcAge());

// // // const jonasAdvanced = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   birthYear: 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge: function () {
// // //     this.age = 2037 - this.birthYear; // Store result as new property
// // //     return this.age;
// // //   },

// // //   getSummary: function () {
// // //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// // //       this.job
// // //     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
// // //   },
// // // };

// // // console.log(jonasAdvanced.calcAge());
// // // console.log(jonasAdvanced.age);
// // // console.log(jonasAdvanced.getSummary());

// // // Create a 'calculator' object
// // const calculator = {
// //   num1: 10,
// //   num2: 5,
// //   operator: "+",

// //   // Methods
// //   add: function () {
// //     return this.num1 + this.num2;
// //   },

// //   subtract: function () {
// //     return this.num1 - this.num2;
// //   },

// //   multiply: function () {
// //     return this.num1 * this.num2;
// //   },

// //   divide: function () {
// //     return this.num1 / this.num2;
// //   },

// //   // Decide which operation to perform
// //   calculate: function () {
// //     if (this.operator === "+") return this.add();
// //     if (this.operator === "-") return this.subtract();
// //     if (this.operator === "*") return this.multiply();
// //     if (this.operator === "/") return this.divide();
// //     return "Invalid operator";
// //   },

// //   // Summary method
// //   getResult: function () {
// //     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
// //   },
// // };

// // // Test your calculator
// // console.log(calculator.calculate()); // Performs calculation
// // console.log(calculator.getResult()); // Returns formatted string

// // // Change operator and test again
// // calculator.operator = "*";
// // console.log(calculator.calculate());
// // console.log(calculator.getResult());

// // User Profile System
// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],

//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],

//   isActive: true,

//   // 1. calcAge()
//   calcAge: function () {
//     this.age = 2025 - this.birthYear; 
//     return this.age;
//   },

//   // 2. addFriend(name, status)
//   addFriend: function (name, status) {
//     this.friends.push({ name: name, status: status });
//   },

//   // 3. getActiveFriends()
//   getActiveFriends: function () {
//     let count = 0;
//     for (let friend of this.friends) {
//       if (friend.status === "active") count++;
//     }
//     return count;
//   },

//   // 4. getSummary()
//   getSummary: function () {
//     return `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year-old from ${
//       this.location
//     }. Interests include ${this.interests.join(", ")}. 
// Currently ${this.isActive ? "active" : "inactive"} on the platform, 
// and has ${this.getActiveFriends()} active friends out of ${
//       this.friends.length
//     } total.`;
//   },

//   // 5. toggleStatus()
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },
// };

// // ==== Testing the user profile system ====
// console.log(user.calcAge()); 
// console.log(user.getActiveFriends());
// console.log(user.getSummary());       

// // Add a new friend
// user.addFriend("Sophia", "active");
// console.log(user.getSummary());

// // Toggle user’s status
// user.toggleStatus();
// console.log(user.getSummary());

// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// ////////////////////////////////////
// // Selecting DOM Elements

// // querySelector - works with any CSS selector
// const message = document.querySelector(".message"); 
// const button = document.querySelector("#btn");
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess"); 

// console.log(message);
// console.log(button);
// console.log(heading);

// // Different selector types
// document.querySelector(".className"); 
// document.querySelector("#idName"); 
// document.querySelector("tagName"); 
// document.querySelector('[type="text"]'); 
// document.querySelector("div p"); 

// // getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button); 

// // querySelectorAll - gets ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs.length);

// // // 1. Select the element with class 'guess' and log it
// // const guessInput = document.querySelector(".guess");
// // console.log(guessInput);

// // // 2. Select the element with ID 'btn' using both querySelector and getElementById
// // const buttonQuery = document.querySelector("#btn");
// // console.log(buttonQuery);
// // console.log(buttonById);
// // console.log(buttonQuery === buttonById);

// // // 3. Select all span elements and log the collection
// // const allSpans = document.querySelectorAll("span");
// // console.log(allSpans);

// // // 4. Select the first span element and log its textContent
// // const firstSpan = document.querySelector("span");
// // console.log(firstSpan.textContent);

// // // 5. Experiment with different CSS selectors
// // console.log(document.querySelector("div p"));
// // console.log(document.querySelector('[type="text"]'));
// // console.log(document.querySelector("h1"));
// // console.log(document.querySelector(".message"));

// ////////////////////////////////////
// // Modifying Element Content

// const message = document.querySelector(".message");

// // textContent - gets/sets just the text, no HTML
// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";

// // innerHTML - includes HTML tags (more powerful but be careful)
// message.innerHTML = "<strong>Bold text from JS!</strong>";

// // innerText - respects styling (what user actually sees)
// console.log(message.innerText);

// // Input elements use .value property, not textContent
// const input = document.querySelector(".guess");

// console.log(input.value); // Current input value
// input.value = "Default text"; // Set input value
// input.placeholder = "Type here"; // Change placeholder

// // Changing element styles with the style property
// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow"; // Note: camelCase!
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";


// // Practice event listeners:
// // 1. Add a click event to the h1 that changes its color
// // 2. Create an input event that displays character count as user types
// // 3. Add a keydown event that responds to the spacebar
// // 4. Make the button change its text when hovered (mouseover event)
// // 5. Create a double-click event that does something special

// // Your code here...
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// // 1. Click event on h1
// heading.addEventListener("click", function () {
//   heading.style.color = "purple";
// });

// // 2. Character count display
// input.addEventListener("input", function () {
//   const count = input.value.length;
//   message.textContent = `Character count: ${count}`;
// });

// // 3. Spacebar response
// document.addEventListener("keydown", function (event) {
//   if (event.key === " ") {
//     message.textContent = "Spacebar pressed!";
//   }
// });

// // 4. Hover effect
// button.addEventListener("mouseover", function () {
//   button.textContent = "Hovering!";
// });

// button.addEventListener("mouseout", function () {
//   button.textContent = "Click Me!";
// });

// // 5. Double-click event
// heading.addEventListener("dblclick", function () {
//   heading.textContent = "Double-clicked!";
//   heading.style.backgroundColor = "lightblue";
// });


// =============================
// Interactive Score Tracker
// =============================

// Game state object to keep everything organized
const gameState = {
  scores: [0, 0], // Player 1 = index 0, Player 2 = index 1
  winningScore: 5,
  gameActive: true,

  // Reset the game
  reset() {
    this.scores = [0, 0];
    this.gameActive = true;
    this.updateDisplay();
    this.clearWinner();
  },

  // Add points for a player
  addPoint(playerIndex) {
    if (!this.gameActive) return;

    this.scores[playerIndex]++;
    this.updateDisplay();
    this.checkWinner(playerIndex);
  },

  // Update the display for scores + target
  updateDisplay() {
    document.getElementById("score-1").textContent = this.scores[0];
    document.getElementById("score-2").textContent = this.scores[1];
    document.querySelector(".target").textContent = this.winningScore;
  },

  // Check if someone has won
  checkWinner(playerIndex) {
    if (this.scores[playerIndex] >= this.winningScore) {
      this.gameActive = false;
      this.showWinner(playerIndex);
    }
  },

  // Show winner styling + message
  showWinner(playerIndex) {
    const players = document.querySelectorAll(".player");
    const winnerName = `Player ${playerIndex + 1}`;

    players[playerIndex].classList.add("winner");
    players[1 - playerIndex].classList.add("loser");

    const winnerMessage = document.querySelector(".winner");
    winnerMessage.classList.remove("hidden");
    winnerMessage.querySelector(".winner-name").textContent = winnerName;
  },

  // Clear winner state on reset
  clearWinner() {
    const players = document.querySelectorAll(".player");
    players.forEach(player => player.classList.remove("winner", "loser"));

    const winnerMessage = document.querySelector(".winner");
    winnerMessage.classList.add("hidden");
  }
};

// =============================
// DOM Elements
// =============================
const addButtons = document.querySelectorAll(".btn-add");
const resetButton = document.getElementById("btn-reset");
const winningScoreInput = document.getElementById("winning-score");

// =============================
// Event Listeners
// =============================

// Add points buttons
addButtons.forEach(button => {
  button.addEventListener("click", function () {
    const playerIndex = parseInt(this.dataset.player) - 1;
    gameState.addPoint(playerIndex);
  });
});

// Reset button
resetButton.addEventListener("click", () => {
  gameState.reset();
});

// Winning score input
winningScoreInput.addEventListener("input", () => {
  const value = parseInt(winningScoreInput.value);
  if (value > 0) {
    gameState.winningScore = value;
    gameState.updateDisplay();
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", event => {
  if (event.key === "1") {
    gameState.addPoint(0); // Player 1
  } else if (event.key === "2") {
    gameState.addPoint(1); // Player 2
  } else if (event.key.toLowerCase() === "r") {
    gameState.reset(); // Reset game
  }
});

// =============================
// Initialize game
// =============================
gameState.updateDisplay();

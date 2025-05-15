// Variables

var age = 22;

console.log(age);

let a = 20;

console.log(a);

const name = "Birat";

console.log(name);

// Objects

const person = {
  firstName: "Birat",
  lastName: "Garg",
  age: 22,
  isLoggedIn: true,
  lastLoginDate: null,
};

console.log(person);

// Boolean

const isLoggedIn = true;

console.log(isLoggedIn + 10);

// Misc

console.log("1" + "1"); // String 11

console.log(typeof ("123" * 1)); // Number 123

console.log(typeof ("1" + 1)); // String 11

console.log(typeof (1 + "1")); // String 11

console.log(typeof (1 + "1" + 1)); // String 111

console.log(typeof ("1" + "1" + 1)); // String 111

console.log(typeof ("a" * 1)); // Number NaN

// Truthy vs Falsy

const tf1 = 0;

console.log("We are checking Truthy vs Falsy");

if (tf1) {
  console.log(true);
}

// Ternary Operator

const var1 = 90;

age >= 18 ? console.log("Valid") : console.log("Invalid");

// Switch

const opt = -1;

switch (opt) {
  case 1: {
    console.log("Namaste!");
    break;
  }
  case 2: {
    console.log("Correct");
    break;
  }
  default:
    console.log("Default");
}

// Function

function sayHello() {
  console.log("Hey Birat!");
}

sayHello();

// Unlimited Args

function add(a, b, c) {
  console.log(a, b, c);
  console.log(arguments);
  console.log("Printing Args");
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

add(1, 2, 3, 4, 5);

// Spead Operator
console.log("We are using the spread operator and testing hoisting");
addNum(10, 20, 30, 40);

function addNum(...numbs) {
  for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
  }
}

// Arrow Func

console.log("We are working on arrow function");

const arr1 = (...nums) => {
  return nums;
};

result = arr1(2, 3);
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

// This keyword

console.log("We are understanding this keyword");

const obj = {
  value: 20,
  myFunction: function () {
    console.log(this.value);
  },
};

obj.myFunction();

// High Order and Callback

console.log("We are trying High Order Function");

function addNums(a, b, cb) {
  let result = a + b;
  cb(result);
}

addNums(2, 4, function (val) {
  console.log(val);
});

console.log("We are trying High Order Function Arrow Function");

function addNums(a, b, cb) {
  let result = a + b;
  cb(result);
}

addNums(2, 4, (val) => {
  console.log(val);
});

// HOF Returns Function

function addHOF(a, b, c) {
  let result = a + b;

  return () => console.log(result);
}

let resultFunction = addHOF(2, 4, () => {});
resultFunction();

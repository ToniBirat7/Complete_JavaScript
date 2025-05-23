const myName = document.getElementById("uname");
const btn = document.getElementById("btn");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }

  return changeSize;
}

const size12 = makeTextSizer(12);
const size100 = makeTextSizer(100);

btn.addEventListener("click", size12);

function init() {
  var name = "Birat";

  function displayName() {
    // Closure Function
    console.log(name);
  }

  return displayName;
}

const fname = init();
fname();

// Arguments in the Closure

function adder(num) {
  function displayName(b) {
    console.log(num + b);
  }

  return displayName;
}

const lname = adder(5);
lname(5);
lname(10);

// Currying

function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));

// Email

function sendEmail(to) {
  return function (subject) {
    return function (body) {
      return `Sending Email to ${to} with subject ${subject} and body ${body} `;
    };
  };
}

const step1 = sendEmail("birat");
const step2 = step1("hello");
const step3 = step2("how are you");
console.log(step3);

console.log(sendEmail("birat")("helllo")("how are you?"));

// ES6+

const sendEmailEs = (to) => (subject) => (body) =>
  `Sending Email to ${to} with subject ${subject} and body ${body}`;

console.log(1);

console.log(sendEmailEs("birat")("helllo")("how are you?"));

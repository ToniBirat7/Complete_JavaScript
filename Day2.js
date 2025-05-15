// Array

const student = ["Birat", "Suman"];

console.log(student.length);

student[0] = "Hi";

console.log(student[0]);

student.reverse();

console.log(student);

// Higher Order Function

// ForEach

student.forEach((item) => {
  console.log(item);
});

// Map

const numb = [1, 2, 3, 4];

function double(num) {
  return num * 2;
}

const newArr = numb.map(double);

console.log(newArr);

// Find

const target = numb.find((num) => num === 0);

console.log(target);

// Filter

const filteredArr = numb.filter((item) => item % 2 == 0);

console.log(filteredArr);

// Slice

const slicedArr = numb.slice(0, 4);

console.log(slicedArr);

// Splice

const splicedArr = numb.splice(0, 3);

console.log(numb);

console.log(splicedArr);

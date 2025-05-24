function add(a, b) {
  return a + b;
}

function square(val) {
  return val * val;
}

function addTwoandSquare(a, b) {
  return square(add(a, b));
}

console.log(addTwoandSquare(2, 3));

// Composition

function composeTwoFunction(fn1, fn2) {
  return function (a, b) {
    return fun2(fun1(a, b));
  };
}

// Multiple

function compose(...fns) {
  return function (...args) {
    return fns.reduceRight((acc, fn, index) => {
      return fn(acc);
    }, args);
  };
}

const task = compose(add, square);

console.log(task(2, 3));

const arr = [1, 2, 3];

const result = arr.reduceRight((acc, fn, index) => {
  return;
}, 0);

console.log(result); // 6

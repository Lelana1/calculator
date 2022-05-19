window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});

const numberButtons = [...document.getElementsByClassName("data-number")];
const operationButtons = document.querySelectorAll(".data-operation");
const screen = document.getElementById("screen");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("userInputs");
    display(button.innerHTML);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display(button.innerHTML);
  });
});

const operations = {
  sin: (x) => Math.sin(x),
  cos: (x) => Math.cos(x),
  tan: (x) => Math.tan(x),
  lan: (x) => Math.log(x),
  log: (x) => Math.log10(x),
  euler: (x) => Math.E(x),
};

// operations["*"] = (first, second) => first * second;
// operations["+"] = (first, second) => first + second;
// operations["-"] = (first, second) => first - second;
// operations["/"] = (first, second) => first / second;

// operations["+"] = (numbers) =>
//   numbers.reduce((accumulated, current) => accumulated + current);

// operations["-"] = (numbers) =>
//   numbers.reduce((accumulated, current) => accumulated - current, 1);

// operations["/"] = (numbers) =>
//   numbers.reduce((accumulated, current) => accumulated / current, 0);

// operations["*"] = (numbers) =>
//   numbers.reduce((accumulated, current) => accumulated * current, 1);

//operations["%"] = (first, second) => (first / second) * 100 + "%";

const userInputs = "";
const getDisplayNumber = () =>
  userInputs.reduce((acc, curr) => acc + "" + curr, "");

function display(disValue) {
  //  let lastInput = '';
  // if(!isNaN(lastInput) && !isNaN(disValue)){
  //   userInputs.push(`${lastInput}${disValue}`) // can be turned into a ternary operator
  // }else {
  //   userInputs.push(lastInput)
  //   userInputs.push(disValue)
  // }
  console.log(userInputs);
  //const screen = document.getElementById("screen");
  screen.value += disValue;
}

// function equate(){
//   let userInputs;
//   let left= '',  right = '',  op;


function equate(str) {
  const opPattern = /[\+\-\*\/]/g;
  const numbers = /\-?\d+/g;
  const opsFromString = str.match(opPattern);
  const arrayNumbers = str.match(numbers).map((x) => +x);
  let ans = 0;
  for (let i = 0; i < opsFromString.length; i++) {
    if (opsFromString[i] == "/") {
      ans = arrayNumbers[i] / arrayNumbers[i + 1];
      arrayNumbers.splice(i, 2, ans);
      opsFromString.splice(i, 1);
    }
    if (opsFromString[i] == "*") {
      ans = arrayNumbers[i] * arrayNumbers[i + 1];
      arrayNumbers.splice(i, 2, ans);
      opsFromString.splice(i, 1);
    }
  }

  return arrayNumbers.reduce((acc, curr) => acc + curr);
}

  // let equal = document.getElementById("equal");
  // equal.addEventListener("click", (equate()) => {
  //   screen.value =
  // });

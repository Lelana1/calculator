window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
});

const numberButtons = [...document.getElementsByClassName("data-number")];
const operationButtons = document.querySelectorAll(".data-operation");
const screen = document.getElementById("screen");

const ce = document.getElementById("ce");
ce.addEventListener("click", backspace);

const ac = document.getElementById("ac");
ac.addEventListener("click", reset);

const sine = document.getElementById("sine");
sine.addEventListener("click", sin);

const tane = document.getElementById("tane");
tane.addEventListener("click", tan);

const cosine = document.getElementById("cosine");
cosine.addEventListener("click", cos);

const rad = document.getElementById("rad");
rad.addEventListener("click", radi);

const ln = document.getElementById("ln");
ln.addEventListener("click", lan);

const pie = document.getElementById("pie");
pie.addEventListener("click", pi);

const logart = document.getElementById("logart");
logart.addEventListener("click", log);

const sqroot = document.getElementById("sqroot");
sqroot.addEventListener("click", sqrt);

const eulers = document.getElementById("eulers");
eulers.addEventListener("click", euler);

// const perc = document.getElementById("perc");
// perc.addEventListener("click", percentage);

const pow = document.getElementById("pow");
pow.addEventListener("click", squared);

const cub = document.getElementById("cub");
cub.addEventListener("click", Cubic);

const fact = document.getElementById("fact");
fact.addEventListener("click", factorial);

function reset() {
  screen.value = "";
}

function radi() {
  let radian = screen.value;
  let radia = (radian * 180) / 3.14159265359;
  screen.value = radia;
}

function sin() {
  let valuetoSin = screen.value;
  let sinedValue = Math.sin(valuetoSin);
  screen.value = sinedValue;
}

function cos() {
  let valueToCos = screen.value;
  let cosedValue = Math.cos(valueToCos);
  screen.value = cosedValue;
}

function tan() {
  let valueToTan = screen.value;
  let tanedValue = Math.tan(valueToTan);
  screen.value = tanedValue;
}

function log() {
  let logarithm = screen.value;
  let evaluatedlog = Math.log10(logarithm);
  screen.value = evaluatedlog;
}

function lan() {
  let valueToLan = screen.value;
  let evaluatedlan = Math.log(valueToLan);
  screen.value = evaluatedlan;
}

function squared() {
  screen.value = Math.pow(screen.value, 2);
}

function Cubic() {
  screen.value = Math.cbrt(screen.value, 3);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function pi() {
  let py = screen.value * 3.14159265359;
  screen.value = py;
}

function euler() {
  let eulersNum = screen.value;
  euleredValue = Math.E(eulersNum);
  screen.value = euleredValue;
}

function factorial() {
  let factorialNumber = 1,
    num = screen.value;
  if (num < 0) {
    screen.value = undefined;
  } else {
    for (let i = 1; i <= num; i++) {
      factorialNumber = factorialNumber * i;
    }
    screen.value = factorialNumber;
  }
}

function backspace() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
}

function reset() {
  screen.value = "";
}

function backspace() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
}

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

// const operations = {
//   sin: (x) => Math.sin(x),
//   cos: (x) => Math.cos(x),
//   tan: (x) => Math.tan(x),
//   lan: (x) => Math.log(x),
//   log: (x) => Math.log10(x),
//   euler: (x) => Math.E(x),
// };

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

// operations["%"] = (first, second) => (first / second) * 100 + "%";

const userInputs = "";
const getDisplayNumber = () =>
  userInputs.reduce((acc, curr) => acc + "" + curr, "");

function display(disValue) {
  screen.value += disValue;
}


  function equate(str) {
    console.log(str);
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

  let equal = document.getElementById("equal");
  equal.addEventListener("click", () => {
    screen.value = equate(screen.value);
  });
  console.log(equate("2+3"));
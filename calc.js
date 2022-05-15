const numberButtons = document.querySelectorAll(".data-number");
const operationButtons = document.querySelectorAll(".data-operation");
const screen = document.getElementById("screen");

const ce = document.getElementById("ce");
ce.addEventListener("click", backspace);

// const ac = document.getElementById("ac");
// ac.addEventListener("click", reset);

// const sine = document.getElementById("sine");
// sine.addEventListener("click", sin);

// const cosine = document.getElementById("cosine");
// cosine.addEventListener("click", cos);

// const rad = document.getElementById("rad");
// rad.addEventListener("click", radi);

// const ln = document.getElementById("ln");
// ln.addEventListener("click", lan);

// const pie = document.getElementById("pie");
// pie.addEventListener("click", pi);

// const logart = document.getElementById("logart");
// logart.addEventListener("click", log);

const sqroot = document.getElementById("sqroot");
sqroot.addEventListener("click", sqrt);

// const eulers = document.getElementById("eulers");
// eulers.addEventListener("click", euler);
function reset() {
  screen.value = "";
}

function backspace() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
}

// const equal = document.getElementById("equal");
//  equal.addEventListener("click", calculate);



// const perc = document.getElementById("perc");
// perc.addEventListener("click", percentage);

const pow = document.getElementById("pow");
pow.addEventListener("click", squared);

const cub = document.getElementById("cub");
cub.addEventListener("click", Cubic);

// const fact = document.getElementById("fact");
// fact.addEventListener("click", factorial);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.value += button.innerHTML
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

operations["+"] = (first, second) => first + second;
operations["-"] = (first, second) => first - second;
operations["/"] = (first, second) => first / second;
operations["*"] = (first, second) => first * second;
operations["%"] = (first, second) => (first / second) * 100 + "%";

console.log("hello World", operations, operations["sin"](2));

const displayValue = [];
const getDisplayNumber = () =>
  displayValue.reduce((accumulated, current) => accumulated + "" + current, "");

function display(number) {
  const last = displayValue.pop();

  if (!isNaN(last) && !isNaN(number)) {
    displayValue.push(`${last}${number}`);
  } else {
    displayValue.push(last);
    displayValue.push(number);
  }

  display.value = getDisplayNumber();
}


// operations.forEach((operation) => {
//   button.addEventListener("click", () => {
//     screen.value += button.innerHTML
//   });
// });
const perc = document.getElementById("perc");
perc.addEventListener("click", () => (screen.value += "%"));

const tane = document.getElementById("tane");
tane.addEventListener("click", () => (screen.value += `tan(`)); //

  function squared() {
    screen.value = Math.pow(screen.value, 2);
  }

  function Cubic() {
    screen.value = Math.cbrt(screen.value, 3);
  }

  function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
  }

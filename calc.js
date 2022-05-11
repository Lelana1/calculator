const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

const ce = document.getElementById("ce");
ce.addEventListener("click", backspace);

const ac = document.getElementById("ac");
ac.addEventListener("click", reset);

function reset() {
  screen.value = "";
}

function perc (){
  window.Function(screen.value * 100)
}

for (item of btn) {
  item.addEventListener("click", (e) => {
    let btntext = e.target.innerText;

    if (btntext == "x") {
      btntext = "*";
    }
    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}
function log() {
  screen.value = Math.log(screen.value);
}
function pow() {
  screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function pi() {
  screen.value = Math.PI(screen.value);
}
function eulers() {
  screen.value = Math.E(screen.value);
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
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function darkMode() {
  let element = document.calculator;
  element.classList.toggle("dark-mode");
}

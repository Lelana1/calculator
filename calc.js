// selectors

const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

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

const perc = document.getElementById("perc");
perc.addEventListener("click", percentage);

const pow = document.getElementById("pow");
pow.addEventListener("click", squared);

const cub = document.getElementById("cub");
cub.addEventListener("click", Cubic);

const fact = document.getElementById("fact");
fact.addEventListener("click", factorial);

function reset() {
  screen.value = "";
}

// const equal = document.getElementById("equal");
// equal.addEventListener("click", calculate);

function percentage() {
  window.Function(screen.value * 100 + "%");
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
  let py = screen.value;
  let phy = py * 3.14159265359;
  screen.value = phy;
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

function darkMode() {
  let element = document.calculator;
  element.classList.toggle("dark-mode");
}

// function calculate(){
//   const parser = math.parser()
//   let valuetoSumUp = screen.value;
//   parser.evaluate(valuetoSumUp)

// }

// function calculate() {
//   let valuetoSumUp = screen.value;
//   let SumValue = Math.parser(valuetoSumUp);
//   screen.value = SumValue;
// }

function trigonometricFunctions() {
  switch (trig) {
    case "sin":
      Math.sin(display.value);

      break;

    case "cos":
      Math.cos(display.value);

      break;

    case "tan":
      Math.tan(display.value);

      break;

    case "log":
      Math.log10(display.value);

      break;

    case "lan":
      Math.log(display.value);

      break;
    default: return;
      break;
  }
}

function bodmas(){

  let equation;

  for(let i =0; i < equation.length; i++){
    if(equation.contains("(") && !equation.contains(")")) {
      return SyntaxError;

    } else if(equation.chatAt(index -1 == "(") && equation.chatAt(index + 1 == ")")){
        
    }
    }

  }

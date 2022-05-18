window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});
const numberButtons = document.querySelectorAll(".data-number");
const operationButtons = document.querySelectorAll(".data-operation");
const screen = document.getElementById("screen");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.value += button.innerHTML;
  });
});

operationButtons.forEach((button) => {
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

// operations["+"] = (numbers) =>
//   numbers.reduce((accumulated, current) => accumulated + current);
//    //
// operations["-"] = (...numbers) =>
// numbers.reduce((accumulated, current) => accumulated - current, 1);

// operations["/"] = (numbers) =>
// numbers.reduce((accumulated, current) => accumulated / current, 0);

// operations["*"] = (numbers) =>
// numbers.reduce((accumulated, current) => accumulated * current, 1);

//operations["%"] = (first, second) => (first / second) * 100 + "%";

operations["*"] = (first, second) => first * second;
operations["+"] = (first, second) => first + second;
operations["-"] = (first, second) => first - second;
operations["/"] = (first, second) => first / second;

const userInputs = [];
const getDisplayNumber = () => userInputs.reduce((acc, curr) => acc + '' + curr, '')

function display(disValue) {
  const lastInput = userInputs.pop();
  if(!isNaN(lastInput) && !isNaN(disValue)){
    userInputs.push(`${lastInput}${disValue}`)
  }else {
    userInputs.push(lastInput)
    userInputs.push(disValue)
  }
  //const screen = document.getElementById("screen");
  screen.value = getDisplayNumber();
}

  function equate(){
    userInputs.reduce((acc, curr, i, inputs) =>{

    }, 0)
    const x = screen.value
    screen.value = calculate ();
    }

    function calculate (e) {
//   solve simple calulator first / adding multiple numbers
//   for loop
//   input[i]
//  []userinputs -store in an array

let op = ['*']
 
  let equal = document.getElementById("equal");
  equal.addEventListener("click", () => {
    
    let userInputs = screen.value.split(`${op}`);
    console.log(userInputs)

       if (userInputs.includes("*")) {
    screen.value = operations["*"](userInputs);
    }
    if (userInputs.includes("+")) {
      screen.value = operations["+"](numbers);
    }
    if (userInputs.includes("-")) {
      userInputs = operations["-"](numbers);
  }
    if (userInputs.includes("÷")) {
    screen.value = operations["/"](numbers);
  }
  });
   
  }


 

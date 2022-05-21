//let str = "4*3+5*5-2/1-10*4-10-15";
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
console.log(equate("4*3+5*5-2/1-10*4-10-15"))
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let firstNumber = null;
let operator = null;

const qoshish = (a, b) => a + b;
const ayirish = (a, b) => a - b;
const kopaytirish = (a, b) => a * b;
const bolish = (a, b) => {
    if (b == 0) {
        alert('Sonni nolga bo\'lish mumkin emas!');
        return null;
    } else {
        return a / b;
    }
}   

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === "C") {
      currentInput = "";
      firstNumber = null;
      operator = null;
      display.textContent = "0";
    } else if (value === "=") {
      if (firstNumber !== null && operator && currentInput !== "") {
        const secondNumber = parseFloat(currentInput);
        let result;
        if (operator === "+") result = qoshish(firstNumber, secondNumber);
        if (operator === "-") result = ayirish(firstNumber, secondNumber);
        if (operator === "*") result = kopaytirish(firstNumber, secondNumber);
        if (operator === "/") result = bolish(firstNumber, secondNumber);

        display.textContent = result;
        currentInput = result.toString();
        firstNumber = null;
        operator = null;
      }
    } else {
      if (currentInput !== "") {
        firstNumber = parseFloat(currentInput);
        operator = value;
        currentInput = "";
      }
    }
  });
});

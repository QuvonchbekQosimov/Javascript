const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = ''; 
let operator = null;   
let firstNumber = null; 

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

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            operator = null;
            firstNumber = null;
            display.textContent = '0';
        } else if (value === '=') {
            if (operator && firstNumber !== null && currentInput !== '') {
                const secondNumber = parseFloat(currentInput);
                let result;
                switch (operator) {
                    case '+':
                        result = qoshish(firstNumber, secondNumber);
                        break;
                    case '-':
                        result = ayirish(firstNumber, secondNumber);
                        break;
                    case '*':
                        result = kopaytirish(firstNumber, secondNumber);
                        break;
                    case '/':
                        result = bolish(firstNumber, secondNumber);
                        break;
                }
                display.textContent = result;
                currentInput = result;
                operator = null;
                firstNumber = null;
            }
        } else {
            if (currentInput !== '') {
                firstNumber = parseFloat(currentInput);
                operator = value;
                currentInput = '';
            }
        }
    });
});

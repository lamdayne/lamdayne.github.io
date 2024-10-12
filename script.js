// script.js

const display = document.querySelector('#display');
const keys = document.querySelectorAll('.keys button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        const keyValue = e.target.textContent;

        if (keyValue === 'C') {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            display.value = '';
        } else if (keyValue === '←') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (keyValue === '=') {
            if (operator) {
                const result = calculate(previousNumber, currentNumber, operator);
                display.value = result;
                currentNumber = result;
                previousNumber = '';
                operator = '';
            }
        } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
            operator = keyValue;
            previousNumber = currentNumber;
            currentNumber = '';
            display.value = previousNumber + ' ' + operator;
        } else {
            currentNumber += keyValue;
            display.value = currentNumber;
        }
    });
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case '*':
            return parseFloat(num1) * parseFloat(num2);
        case '/':
            return parseFloat(num1) / parseFloat(num2);
        default:
            return 0;
    }
}

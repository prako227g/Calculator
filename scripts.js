// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const calculatorScreen = document.querySelector('.calculator-screen');
    const keys = document.querySelector('.calculator-keys');
    let operator = '';
    let previousValue = '';
    let currentValue = '';

    keys.addEventListener('click', event => {
        const { target } = event;
        const { value } = target;

        if (!target.matches('button')) return;

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                handleOperator(value);
                break;
            case '=':
                calculate();
                break;
            case 'all-clear':
                clear();
                break;
            case '.':
                inputDecimal(value);
                break;
            default:
                inputNumber(value);
        }

        updateScreen();
    });

    function handleOperator(nextOperator) {
        if (operator && currentValue) {
            calculate();
        }

        operator = nextOperator;
        previousValue = currentValue;
        currentValue = '';
    }

    function calculate() {
        let result = 0;
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);

        if (operator === '+') {
            result = prev + current;
        } else if (operator === '-') {
            result = prev - current;
        } else if (operator === '*') {
            result = prev * current;
        } else if (operator === '/') {
            result = prev / current;
        }

        currentValue = result;
        operator = '';
    }

    function clear() {
        previousValue = '';
        currentValue = '';
        operator = '';
    }

    function inputNumber(num) {
        currentValue = currentValue === '' ? num : currentValue + num;
    }

    function inputDecimal(dot) {
        if (!currentValue.includes(dot)) {
            currentValue += dot;
        }
    }

    function updateScreen() {
        calculatorScreen.value = currentValue;
    }
});


// Named function for addition
function add(a, b) {
    return a + b;
}

// Anonymous function for subtraction
const subtract = function(a, b) {
    return a - b;
};

// Arrow function for multiplication
const multiply = (a, b) => a * b;

// Named function for division
function divide(a, b) {
    if (b === 0) {
        alert("Error: Division by zero is not allowed.");
        return "Error";
    }
    return a / b;
}

// Calculator object with methods
const calculator = {
    equation: '',

    // assign the add, subtract, multiply and divide functions to object properties
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,

    updateEquation: function(value) {
        this.equation += value + " "; // add space so parsing works
        document.getElementById('equation').value = this.equation;
    },
    clearEquation: function() {
        this.equation = '';
        document.getElementById('equation').value = this.equation;
    },
    calculate: function() {
        const equation = this.equation.trim().split(' ');
        const a = parseFloat(equation[0]);
        const operation = equation[1];
        const b = parseFloat(equation[2]);
        let result;

        switch (operation) {
            case '+':
                result = this.add(a, b);
                break;
            case '-':
                result = this.subtract(a, b);
                break;
            case '*':
                result = this.multiply(a, b);
                break;
            case '/':
                result = this.divide(a, b);
                break;
            default:
                result = 'Invalid Operation';
        }

        this.equation = result.toString();
        document.getElementById('equation').value = this.equation;
    }
};

// Event listeners
document.querySelectorAll('button[name="input"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        calculator.updateEquation(value);
    });
});

document.querySelectorAll('button[name="operation"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        calculator.updateEquation(value);
    });
});

document.querySelector('button[name="calculate"]').addEventListener('click', () => {
    calculator.calculate();
});

document.querySelector('button[name="clear"]').addEventListener('click', () => {
    calculator.clearEquation();
});

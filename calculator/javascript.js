function operate(a, b, operator) {
    if (operator == "+") {
        return a + b;
    }
    else if (operator == "-") {
        return a - b;
    }
    else if (operator == "*") {
        return a * b;
    }
    else if (operator == "/") {
        return a / b;
    }
}

console.log(operate(18, 6, "/"));
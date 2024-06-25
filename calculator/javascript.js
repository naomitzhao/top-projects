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

const buttonRows = document.querySelectorAll(".buttonRow");
buttonRows.forEach((buttonRow) => {
    for (i = 0; i < 4; i ++) {
        const newButton = document.createElement("div");
        newButton.classList.add("calculatorButton");
        buttonRow.appendChild(newButton);
    }
});
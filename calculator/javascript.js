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

const buttonDiv = document.querySelector(".buttonDiv");

let rowIdx = 0;
let layoutIdx = 0;
const layout = ["AC", "√", "<", "+/-", "7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"]

for (i = 0; i < 5; i ++) {
    const buttonRow = document.createElement("div");
    buttonRow.classList.add("buttonRow");
    for (j = 0; j < 4; j ++) {
        const btn = document.createElement("div");
        btn.classList.add("calculatorButton");
        btn.addEventListener("mousedown", () => {
            btn.classList.add("activeButton");
        });
        btn.addEventListener("mouseup", () => {
            btn.classList.remove("activeButton");
        });
        btn.addEventListener("mouseleave", () => {
            btn.classList.remove("activeButton");
        });
        btn.id = layout[layoutIdx];
        btn.textContent = layout[layoutIdx];
        layoutIdx ++;
        buttonRow.appendChild(btn);
    }
    buttonDiv.appendChild(buttonRow);
}
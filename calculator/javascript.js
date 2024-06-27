function operate(a, b, operator) {
    if (operator == "+") {
        return a + b;
    }
    else if (operator == "-") {
        return a - b;
    }
    else if (operator == "x") {
        return a * b;
    }
    else if (operator == "/") {
        return a / b;
    }
}

function displayOnMain(content) {
    const mainDisplay = document.querySelector("#mainDisplay");
    mainDisplay.textContent = content;
}

function displayHistory(content) {
    const history = document.querySelector("#history");
    history.textContent = content;
}

let a = null;
let b = null;
let op = null;
let result = null;
let newHistory = null;

ops = ["+", "-", "x", "/"];

function handleButtonPress(func){
    console.log(newHistory);
    if (newHistory != null) {
        displayHistory(newHistory);
        newHistory = null;
    }
    const funcInt = parseInt(func);
    if (isNaN(funcInt)) {
        if (ops.includes(func)){
            if (op == null){
                op = func;
                displayOnMain(a + " " + op);
            }
        }
        else if (func == "="){
            if (a != null && b != null && op != null) {
                result = operate(a, b, op);
                displayOnMain(result);
                newHistory = a + " " + op + " " + b + " = " + result;
                console.log(newHistory);
                a = result;
                b = null;
                op = null;
            }
        }
    }
    else {
        if (op == null) {
            if (a == null || a == result){
                a = 0;
            }
            a = a * 10 + funcInt;
            displayOnMain(a);
        }
        else {
            if (b == null) {
                b = 0;
            }
            b = b * 10 + funcInt;
            displayOnMain(a + " " + op + " " + b);
        }
    }
}

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
        btn.id = layout[layoutIdx];
        btn.textContent = layout[layoutIdx];
        layoutIdx ++;
        btn.addEventListener("mousedown", () => {
            btn.classList.add("activeButton");
            handleButtonPress(btn.id);
        });
        btn.addEventListener("mouseup", () => {
            btn.classList.remove("activeButton");
        });
        btn.addEventListener("mouseleave", () => {
            btn.classList.remove("activeButton");
        });
        buttonRow.appendChild(btn);
    }
    buttonDiv.appendChild(buttonRow);
}
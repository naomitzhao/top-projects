const ops = ["+", "-", "x", "/"];

let ab = [null, null];
let op = null;
let result = null;
let place = [1, 1];
let leadingZeros = [0, 0];

let mainMessage = "";
let historyMessage = "";

function operate(operator) {
    a = ab[0];
    b = ab[1];
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
        if (b == 0){
            return NaN;
        }
        return a / b;
    }
    else if (operator == "√") {
        return Math.sqrt(a);
    }
    else if (operator == "+/-") {
        return -a;
    }
    else if (operator == null) {
        return a;
    }
}

function findPlace(num) {
    res = 0;
    for (i = 1; i < 8; i++) {
        if ((num * Math.pow(10, i)) % 10 != 0) {
            res = i;
        }
    }
    return 1 / Math.pow(10, res);
}

function roundNum(a){
    const PLACES = 7;
    if (a > Math.pow(10, PLACES)) {
        return Number.parseFloat(a).toExponential(PLACES);
    }
    return Math.round(a * Math.pow(10, PLACES)) / Math.pow(10, PLACES);
}

function refreshMain(){
    const mainDisplay = document.querySelector("#mainDisplay");
    mainDisplay.textContent = mainMessage;
}

function refreshHistory(){
    const history = document.querySelector("#history");
    history.textContent = historyMessage;
}

function reset(){
    ab[0] = null;
    ab[1] = null;
    op = null;
    result = null;
    place = [1, 1];
    mainMessage = "";
    historyMessage = "";
    leadingZeros = [0, 0];
}

function errorMessage() {
    reset();
    mainMessage = "ERROR";
    historyMessage = "";
    refreshMain();
    refreshHistory();
}

function appendToMain(content) {
    mainMessage += content;
    refreshMain();
}

function operateAndWrite(operator){
    result = roundNum(operate(operator));
    if (ops.includes(operator)){
        historyMessage = mainMessage + " = " + result;
    }
    else {
        if (operator == "√") {
            historyMessage = "√" + a + " = " + result;
        }
        else if (operator == "+/-") {
            historyMessage = "-(" + a + ") = " + result;
        }
        else if (operator == null) {
            historyMessage = result + " = " + result;
        }
    }
    if (isNaN(result)) {
        errorMessage();
        return;
    }
    mainMessage = result;
    refreshHistory();
    refreshMain();
    ab[0] = result;
    op = null;
    ab[1] = null;
    place = [findPlace(result) / 10, 1];
    leadingZeros = [1, 0];
}

function handleButtonPress(func){
    if (mainMessage == "ERROR") {
        mainMessage = "";
    }
    a = ab[0];
    b = ab[1];
    const funcInt = parseInt(func);
    if (isNaN(funcInt)){ // not number key
        if (a == null && func != "AC" && func != "." && func != "<") {
            errorMessage();
        }
        else {
            if (ops.includes(func)){ // + - x /
                if (op == null) { // first operation
                    op = func;
                    appendToMain(" " + func + " ");
                }
                else { // not first operation
                    if (b != null) { // chained operation
                        operateAndWrite(op);
                        op = func;
                    } // result is still a
                    else { // trying to use two ops when b not defined yet
                        errorMessage();
                    }
                }
            }
            else if (func == "=") { // calculate
                operateAndWrite(op);
            } // result is still a
            else if (func == ".") { 
                // if already writing decimal, do nothing.
                abIdx = 0;
                if (op != null) {
                    abIdx = 1;
                }
                if (place[abIdx] == 1) { // not already writing decimals
                    if ((a == result && op == null) || a == null) { // need to start new a
                        result = null;
                        ab[0] = 0;
                        appendToMain("0");
                        leadingZeros[0] = 1;
                    }
                    else if (op != null && b == null) { // start new b
                        ab[1] = 0;
                        appendToMain("0");
                        leadingZeros[1] = 1;
                    }
                    if (op == null) {
                        place[0] /= 10;
                    }
                    else {
                        place[1] /= 10;
                    }
                    appendToMain(".");
                }
            }
            else if (func == "AC") {
                reset();
                refreshHistory();
                refreshMain();
            }
            else if (func == "<") {
                if (b == null && op != null) { // delete op
                    mainMessage = mainMessage.slice(0, -3);
                    op = null;
                }
                else { // delete a or b
                    let abIdx = 0; // default to delete a
                    if (b != null) { // actually, delete b
                        abIdx = 1;
                    }
                    if (place[abIdx] == 1){
                        if (ab[abIdx] == 0 && ab[abIdx] % 10 == 0) {
                            leadingZeros[abIdx] --;
                        }
                        else {
                            ab[abIdx] = Math.floor(ab[abIdx]/10);
                        }
                    }
                    else {
                        place[abIdx] *= 10;
                        if (place[abIdx] != 1) {
                            ab[abIdx] = Math.floor ((ab[abIdx] / place[abIdx]) / 10);
                            ab[abIdx] *= place[abIdx] * 10;
                        }
                    }
                    if (ab[abIdx] == 0 && place[abIdx] == 1 && leadingZeros[abIdx] == 0) {
                        ab[abIdx] = null;
                    }
                    mainMessage = String(mainMessage).slice(0, -1);
                }
                refreshMain();
            }
            else { 
                operateAndWrite(func);
            }
        }
    }
    else { // is number key
        let abIdx = 0;
        if (op != null) { // write b
            abIdx = 1;
        }
        if (ab[abIdx] == null) {
            ab[abIdx] = 0;
        }
        if (place[abIdx] == 1){ // not writing decimal
            ab[abIdx] = ab[abIdx] * 10 + funcInt;
            if (ab[abIdx] == 0) {
                leadingZeros[abIdx] ++;
            }
        }
        else { // writing decimal
            ab[abIdx] = ab[abIdx] + funcInt * place[abIdx];
            place[abIdx] /= 10;
        }
        appendToMain(func);
    }
    // console.log("a: " + ab[0] + "\nb: " + ab[1] + "\nresult: " + result + "\nop: " + op + "\nplace: " + place + "\nleading zeros: " + leadingZeros);
}

const buttonDiv = document.querySelector(".buttonDiv");

let layoutIdx = 0;
const layout = ["AC", "√", "<", "+/-", "7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"]

for (i = 0; i < 5; i ++) {
    const buttonRow = document.createElement("div");
    buttonRow.classList.add("buttonRow");
    for (j = 0; j < 4; j ++) {
        const btn = document.createElement("div");
        btn.classList.add("calculatorButton");
        btn.id = layout[layoutIdx];
        if (i == 0 && j == 0) {
            btn.style.backgroundColor = "var(--ac-button)";
            btn.style.boxShadow = "5px 5px 0px var(--bs-ac)"; 
            btn.style.color = "var(--text-ac)";
        }
        else {
            btn.style.backgroundColor = "var(--row-" + i + ")";
            btn.style.boxShadow = "5px 5px 0px var(--bs-" + i + ")"; 
            btn.style.color = "var(--text-" + i + ")";
        }
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

const eventToButton = new Map([
    ["0", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
    ["+", "+"],
    ["-", "-"],
    ["x", "x"],
    ["*", "x"],
    ["/", "/"],
    ["=", "="],
    ["Enter", "="],
    ["Backspace", "<"],
    ["s", "√"], 
    ["c", "AC"],
    ["_", "+/-"],
    [".", "."], 
]);

document.addEventListener("keydown", (event) => {
    if (eventToButton.has(event.key)) {
        const downedKey = eventToButton.get(event.key);
        handleButtonPress(downedKey);
        const downedButton = document.getElementById(downedKey);
        downedButton.classList.add("activeButton");
    }
});

document.addEventListener("keyup", (event) => {
    if (eventToButton.has(event.key)) {
        document.getElementById(eventToButton.get(event.key)).classList.remove("activeButton");
    }
});
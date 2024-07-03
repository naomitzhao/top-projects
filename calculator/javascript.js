const ops = ["+", "-", "x", "/"];

let a = null;
let b = null;
let op = null;
let result = null;
let place = 1;
let extraZeros = 0;

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
        if (b == 0){
            return NaN;
        }
        return a / b;
    }
}

function roundNum(a){
    const PLACES = 7;
    if (a > Math.pow(10, PLACES)) {
        return Number.parseFloat(a).toExponential(PLACES);
    }
    return Math.round(a * Math.pow(10, PLACES)) / Math.pow(10, PLACES);
}

function displayOnMain(a, op = null, b = null, roundA = true, roundB = true){
    content = a;
    if (roundA) {
        content = roundNum(a);
    }
    if (op != null){
        content += " " + op;
    }
    if (b != null){
        if (roundB) {
            content += " " + roundNum(b);
        }
        else {
            content += " " + roundNum(b);
        }
    }
    if (extraZeros != 0){
        content += ".";
        for (i = 0; i < extraZeros; i++){
            content += "0";
        }
    }
    displayMainMessage(content);
}

function displayHistory(a, op, result, b = null){
    content = ""
    if (op == "√") {
        content = op + roundNum(a) + " = " + roundNum(result);
    }
    else if (op == "+/-") {
        content = "-(" + roundNum(a) + ") = " + roundNum(result);
    }
    else {
        content = roundNum(a) + " " + op + " " + roundNum(b) + " = " + roundNum(result);
    }
    displayHistoryMessage(content);
}

function displayMainMessage(content){
    const mainDisplay = document.querySelector("#mainDisplay");
    mainDisplay.textContent = content;
}

function displayHistoryMessage(content){
    const history = document.querySelector("#history");
    history.textContent = content;
}

function reset(){
    a = null;
    b = null;
    op = null;
    result = null;
    place = 1;
    extraZeros = 0;
}

function errorMessage() {
    reset();
    displayMainMessage("ERROR");
    displayHistoryMessage("");
}


function handleButtonPress(func){
    const funcInt = parseInt(func);
    if (funcInt == 0 && place != 1){
        extraZeros ++;
    }
    else if (func != "<") {
        extraZeros = 0;
    }
    if (isNaN(funcInt)) {
        if (ops.includes(func)){ // + - x /
            if (op == null){
                if (a == null) {
                    errorMessage();
                }
                else {
                    op = func;
                    place = 1;
                    displayOnMain(a, op);
                }
            }
            else if (a != null && b != null && op != null){ // full expression
                result = operate(a, b, op);
                if (isNaN(result)) {
                    errorMessage();
                }
                else {
                    displayHistory(a, op, result, b);
                    a = result;
                    b = null;
                    op = func;
                    place = 1;
                    displayOnMain(a, op);
                }
            }
            else { // tried to operate without full expression
                errorMessage();
            }
        }
        else if (func == "="){
            if (a != null && b != null && op != null) {
                result = operate(a, b, op);
                if (isNaN(result)) {
                    errorMessage();
                }
                else {
                    displayOnMain(result, null, null, true);
                    displayHistory(a, op, result, b);
                    a = result;
                    b = null;
                    op = null;
                    place = 1;
                }
            }
        }
        else if (func == "√") {
            if (op == null && a != null) {
                result = Math.sqrt(a);
                if (isNaN(result)) {
                    errorMessage();
                }
                else {
                    displayOnMain(result);
                    displayHistory(a, "√", result);
                    a = result;
                }
            }
        }
        else if (func == "+/-") {
            if (op == null && a != null) {
                result = a * -1;
                displayOnMain(result);
                displayHistory(a, "+/-", result);
                a = result;
            }
        }
        else if (func == "AC") {
            reset();
            displayMainMessage("");
            displayHistoryMessage("");
        }
        else if (func == ".") {
            if (place == 1){
                place /= 10;
                if (op == null){
                    if (a == null || (a == result && place == 1)){
                        a = 0;
                    }
                    displayMainMessage(a + ".");
                }
                else {
                    displayMainMessage(roundNum(a) + " " + op + " " + roundNum(b) + ".");
                }
            }
            else{
                errorMessage();
            }
        }
        else if (func == "<") {
            if (b == null && op == null) { // backspace a
                if (extraZeros != 0){
                    extraZeros --;
                }
                if (place == 0.1) {
                    place = 1;
                }
                else {
                    let deletePlace = place * 10;
                    if (place == 1){
                        deletePlace = 1;
                    }
                    a = Math.floor((a / deletePlace) / 10) * deletePlace;
                    if (place != 1){
                        a *= 10;
                        place *= 10;
                        if (place == 0.1) {
                            place = 1;
                        }
                    }
                }
                displayOnMain(a);
            }
            else if (op != null && b != null) { // backspace b
                if (extraZeros != 0){
                    extraZeros --;
                }
                if (place == 0.1) {
                    place = 1;
                }
                else {
                    let deletePlace = place * 10;
                    if (place == 1){
                        deletePlace = 1;
                    }
                    b = Math.floor((b / deletePlace) / 10) * deletePlace;
                    if (place != 1){
                        b *= 10;
                        place *= 10;
                        if (place == 0.1) {
                            place = 1;
                        }
                    }
                }
                displayOnMain(a, op, b);
            }
            else {
                errorMessage();
            }
        }
    }
    else { // number button
        if (op == null) { // write a
            if (a == null || (a == result && place == 1)){
                a = 0;
            }
            if (place == 1){
                a = a * 10 + funcInt;
            }
            else {
                a = a + funcInt * place;
                place /= 10;
            }
            displayOnMain(a);
        }
        else { // write b
            if (b == null) {
                b = 0;
            }
            if (place == 1){
                b = b * 10 + funcInt;
            }
            else {
                b = b + funcInt * place;
                place /= 10;
            }
            displayOnMain(a, op, b);
        }
    }
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
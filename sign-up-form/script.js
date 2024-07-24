const MIN_EMAIL_LENGTH = 8;
const EMAIL_REG_EXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

addValidationListeners();
setButtonBehavior();

function addValidationListeners () {
    const inputContainers = document.querySelectorAll(".inputContainer");
    inputContainers.forEach((container) => {
        const errorMessage = document.createElement("span");
        errorMessage.classList.add("errorMessage");
        container.appendChild(errorMessage);
    
        const input = container.querySelector("input");
    
        input.addEventListener("input", () => {
            validate(container, input);
        });
    });
}

function setButtonBehavior () {
    const btn = document.querySelector("button");
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        checkAllFields();
    });
}

function validate(container, input) {
    const error = checkContent(container);
    const errorMessage = container.querySelector("span");

    if (error) {
        input.classList.add("invalid");
        errorMessage.textContent = error;
    } else {
        input.classList.remove("invalid");
    }
    errorMessage.textContent = error;
}

function checkContent (container) {
    const input = container.querySelector("input");
    const inputValue = input.value;
    let error = "";
    if (inputValue.length == 0) {
        return "This field is required.";
    } 
    if (input.id == "email") {
        if (!EMAIL_REG_EXP.test(inputValue)) {
            error = "Must be a valid email.";
        }
    } else if (input.id == "password") {
        if (inputValue.length < MIN_EMAIL_LENGTH) {
            error = "Password must be at least 8 characters."
        }
    } 
    return error;
}

function checkAllFields() {
    const inputContainers = document.querySelectorAll(".inputContainer");
    inputContainers.forEach((container) => {
        const errorMessage = container.querySelector("span");
        const input = container.querySelector("input");
        const error = checkContent(container);

        if (error) {
            input.classList.add("invalid");
            errorMessage.textContent = error;
        } else if (input.id == "confirm-password") {
            const confirmError = container.querySelector("span");

            if (input.value != document.getElementById("password").value) {
                input.classList.add("invalid");
                confirmError.textContent = "Passwords must match."
                return;
            }
        }
        errorMessage.textContent = error;
    });
}
export function showDropdown() {
    const body = document.querySelector("body");
    const content = document.getElementById("content");

    const dropdown = document.createElement("div");
    dropdown.id = "dropdown";

    body.insertBefore(dropdown, content);
}

export function hideDropdown(){
    const body = document.querySelector("body");
    const dropdown = document.getElementById("dropdown");
    body.removeChild(dropdown);
}


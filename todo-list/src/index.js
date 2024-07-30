import './styles.css';
import Plus from './assets/plus.svg';

let idx = 0;
let currentGroup = "ungrouped";
let newCategoryOpen = false;

const todos = [];

const categories = new Map();
categories.set("ungrouped", generateList("ungrouped"));
categories.set("grouped", generateList("grouped"));

loadAddTask();
populateNav();
loadAddCategory();

const content = document.getElementById("content")
content.append(categories.get("ungrouped"));

addTodo("test todo", "thu 7/25", 0, "grouped", "hello hello!");
addTodo("walk gerald", "fri 7/26", 2, "ungrouped", "take gerald for a walk");
addTodo("water the sink", "sat 7/27", 0, "ungrouped", "the sink is thirsty");
addTodo("do something cool", "sun 7/29", 1, "grouped", "what is cool?");

function loadAddCategory () {
    const nav = document.querySelector("nav");
    const addCategoryButton = document.getElementById("addCategoryButton");
    addCategoryButton.querySelector("img").src = Plus;

    addCategoryButton.addEventListener("click", () => {
        if (!newCategoryOpen) {
            const newCategoryDiv = document.createElement("div");
            newCategoryDiv.id = 'newCategory';
            const name = document.createElement("input");
            name.type = 'text';
            name.name = 'name';
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "submitCategoryButton";

            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "X";
            cancelBtn.id = "cancelCategoryButton";
            newCategoryDiv.append(name, cancelBtn, btn);
            
            nav.appendChild(newCategoryDiv);
            name.focus();
            newCategoryOpen = true;

            name.addEventListener("keydown", (e) => {
                if (e.key == 'Enter') {
                    addCategory(name.value, newCategoryDiv);
                }
            });

            btn.addEventListener("click", () => {
                addCategory(name.value, newCategoryDiv);
            });

            cancelBtn.addEventListener("click", () => {
                addCategory('', newCategoryDiv);
            });
        }
    });
}

function addCategory (newCategoryName, newCategoryDiv) {
    if (newCategoryName) {
        categories.set(newCategoryName, generateList(newCategoryName));
        addDOMCategory(newCategoryName);
        switchTab(newCategoryName);
    }
    newCategoryDiv.remove();

    newCategoryOpen = false;
}

function addDOMCategory (category) {
    const nav = document.querySelector("nav");
    const btn = document.createElement("button");
    btn.textContent = category;

    btn.addEventListener("click", () => {
        switchTab(category);
    });

    nav.appendChild(btn);
}

function loadAddTask () {
    const addTask = document.getElementById("addTask");
    addTask.querySelector("img").src = Plus;
    const dialogOverlay = document.getElementById("dialogOverlay");
    const addTaskButton = document.getElementById("addTaskButton")

    dialogOverlay.addEventListener("click", () => {
        hideDialog();
    });

    addTask.addEventListener("click", () => {
        showDialog();
    });

    addTaskButton.addEventListener("click", (e) => {
        e.preventDefault();
        const addTaskForm = document.getElementById("addTaskForm");

        const title =addTaskForm.elements["title"].value;
        const date = addTaskForm.elements["date"].value;
        const priority = addTaskForm.elements["priority"].value;
        const category = addTaskForm.elements["category"].value;
        const description = addTaskForm.elements["description"].value;

        addTodo(title, date, priority, category, description);

        hideDialog();
        clearDialog(addTaskForm);
    });
}

function loadAddTaskCategories () {
    const categoryDropDown = document.createElement("select");
    categoryDropDown.classList.add("addTaskInput");
    categoryDropDown.name = "category";
    for (let category of categories.keys()){
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        if (category == currentGroup) {
            option.selected = true;
        }

        categoryDropDown.appendChild(option);
    }
    return categoryDropDown;
}

function populateNav() {
    const nav = document.querySelector("nav");

    for (let category of categories.keys()) {
        const btn = document.createElement("button");
        btn.textContent = category;

        btn.addEventListener("click", () => {
            switchTab(category);
        });

        nav.appendChild(btn);
    }
}

function generateList(category) {
    const tasks = document.createElement("div");
    tasks.id = "tasks";
    todos.forEach((todo) => {
        if (todo.category == category) {
            const item = document.createElement("div");
            item.classList.add("item");
            
            const priorityBar = document.createElement("div");
            priorityBar.classList.add("priorityBar");
            priorityBar.style.backgroundColor = `var(--priority-${todo.priority})`;

            const itemContent = document.createElement("div");
            itemContent.classList.add("itemContent");

            const nameCheck = document.createElement("nameCheck");
            nameCheck.classList.add("nameCheck");

            const check = document.createElement("button");
            check.classList.add("check");
            
            const h5 = document.createElement("h5");
            h5.textContent = todo.title;

            nameCheck.append(check, h5);

            const dateP = document.createElement("p");
            dateP.textContent = todo.date;

            itemContent.append(nameCheck, dateP);

            item.append(priorityBar, itemContent);

            tasks.appendChild(item);
        }
    });
    return tasks;
}

function switchTab(category) {
    content.querySelector("h2").textContent = category;
    content.removeChild(document.getElementById("tasks"));
    content.append(categories.get(category));
    currentGroup = category;
}

function addTodo(title, date, priority, category, description = ""){
    const todo = makeTodo(title, date, priority, category, description);
    addDomTodo(todo);
}

function makeTodo(title, date, priority, category, description) {
    return {
        title: title,
        date: date,
        priority: priority, 
        category: category, 
        description: description,
        complete: false, 
        id: idx++
    };
}

function addDomTodo(todo) {
    const item = document.createElement("div");
    item.classList.add("item");
    
    const priorityBar = document.createElement("div");
    priorityBar.classList.add("priorityBar");
    priorityBar.style.backgroundColor = `var(--priority-${todo.priority})`;

    const itemContent = document.createElement("div");
    itemContent.classList.add("itemContent");

    const nameCheck = document.createElement("div");
    nameCheck.classList.add("nameCheck");

    const check = document.createElement("button");
    check.classList.add("check");
    
    const h5 = document.createElement("h5");
    h5.textContent = todo.title;

    nameCheck.append(check, h5);

    const dateP = document.createElement("p");
    dateP.textContent = todo.date;

    itemContent.append(nameCheck, dateP);

    item.append(priorityBar, itemContent);

    categories.get(todo.category).append(item);

    check.addEventListener("click", () => {
        if (check.classList.contains("checkedCheck")) {
            check.classList.remove("checkedCheck");
            h5.classList.remove("checkedName");
            item.classList.remove("checkedItem");
        }
        else {
            check.classList.add("checkedCheck");
            h5.classList.add("checkedName");
            item.classList.add("checkedItem");
        }
    });
}

function showDialog() {
    const dialogContainer = document.getElementById("dialogContainer");
    dialogContainer.style.display = "flex";
    const dialog = document.querySelector("dialog");
    dialog.show();

    const categoryField = document.getElementById("categoryField");
    const categoryDropDown = categoryField.querySelector("select");
    categoryDropDown.remove();

    categoryField.appendChild(loadAddTaskCategories());
}

function hideDialog() {
    const dialogContainer = document.getElementById("dialogContainer");
    dialogContainer.style.display = "none";
    const dialog = document.querySelector("dialog");
    dialog.close();
}

function clearDialog(form) {
    form.querySelectorAll("input, textarea").forEach((field) => {
        field.value = "";
    });
}
import './styles.css';
import Plus from './assets/plus.svg';

let idx = 0;

const todos = [
    {
        title: "walk gerald", 
        date: "fri 7/26", 
        priority: 2, 
        category: "ungrouped", 
        description: "take gerald for a walk", 
        id: -3
    },
    {
        title: "water the sink", 
        date: "sat 7/27", 
        priority: 0, 
        category: "ungrouped",
        description: "the sink is thirsty.", 
        id: -2
    },
    {
        title: "do something cool", 
        date: "sun 7/29", 
        priority: 1, 
        category: "grouped",
        description: "what is cool?", 
        id: -1
    }
];

const categories = new Map();
categories.set("ungrouped", generateList("ungrouped"));
categories.set("grouped", generateList("grouped"));

loadAddTask();
populateNav();

const content = document.getElementById("content")
content.append(categories.get("ungrouped"));

addTodo("test todo", "thu 7/25", 0, "grouped", "hello hello!");

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

    categories.get(todo.category).append(item);
}

function showDialog() {
    const dialogContainer = document.getElementById("dialogContainer");
    dialogContainer.style.display = "flex";
    const dialog = document.querySelector("dialog");
    dialog.show();

    const categoryField = document.getElementById("categoryField");
    const categoryDropDown = categoryField.querySelector("select");
    if (categoryDropDown) {
        categoryDropDown.remove();
    }
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
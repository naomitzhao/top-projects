import './styles.css';
import Plus from './assets/plus.svg';

let idx = 0;
let currentGroup = "ungrouped";
let newCategoryOpen = false;
let currTodoEdit = null;

const todos = [];

const categories = (function () {
    const map = new Map();

    const addCategory = function (newCategoryName) {
        const div = document.createElement("div");
        div.id = 'tasks';
        map.set(newCategoryName, div);
    };

    const get = function (key) {
        return map.get(key);
    };

    const keys = function () {
        return map.keys();
    };

    const getMap = function () {
        return map;
    };

    addCategory("ungrouped");
    addCategory("grouped");

    return { addCategory, get, keys, getMap };
    
}) ();

const domStuff = (function () {
    const addTodo = function (todo) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.id = "item" + todo.id;
        
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

        categories.get(todo.category).appendChild(item);
    
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
    
        h5.addEventListener("click", () => {
            currTodoEdit = todo;
            showDialog();
        });
    };

    const loadAddCategory = function () {
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
                    closeAddCategory();
                });
            }
        });
    };

    const addCategory = function (category, newCategoryDiv) {
        if (category != '') {
            const nav = document.querySelector("nav");
            const btn = document.createElement("button");
            btn.textContent = category;
        
            btn.addEventListener("click", () => {
                switchTab(category);
            });
        
            nav.appendChild(btn);
            
            categories.addCategory(category, newCategoryDiv);
        }
        closeAddCategory();
    };

    const closeAddCategory = function () {
        newCategoryOpen = false;
        const newCategoryDiv = document.getElementById('newCategory');
        newCategoryDiv.remove();
    };

    return { addTodo, loadAddCategory, addCategory };
})();

const todoList = (function () {
    const addCategory = function (name, inputDiv) {
        if (name) {
            categories.addCategory(name);
            domStuff.addCategory(name);
            switchTab(name);
        }
        inputDiv.remove();
    
        newCategoryOpen = false;
    };

    return { addCategory }
})();

loadAddTask();
populateNav();
domStuff.loadAddCategory();

const content = document.getElementById("content")

addTodo("test todo", "thu 7/25", 0, "grouped", "hello hello!");
addTodo("walk gerald", "fri 7/26", 2, "ungrouped", "take gerald for a walk");
addTodo("water the sink", "sat 7/27", 0, "ungrouped", "the sink is thirsty");
addTodo("do something cool", "sun 7/29", 1, "grouped", "what is cool?");

content.append(categories.get("ungrouped"));

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
        if (currTodoEdit != null) {
            handleEditTask(currTodoEdit.id);
        }
        else {
            handleAddTask();
        }
    });
}

function handleAddTask() {
    const addTaskForm = document.getElementById("addTaskForm");

    const title = addTaskForm.elements["title"].value;
    const date = addTaskForm.elements["date"].value;
    const priority = addTaskForm.elements["priority"].value;
    const category = addTaskForm.elements["category"].value;
    const description = addTaskForm.elements["description"].value;

    addTodo(title, date, priority, category, description);

    hideDialog();
}

function handleEditTask(taskId) {
    const addTaskForm = document.getElementById("addTaskForm");

    const title = addTaskForm.elements["title"].value;
    const date = addTaskForm.elements["date"].value;
    const priority = addTaskForm.elements["priority"].value;
    const category = addTaskForm.elements["category"].value;
    const description = addTaskForm.elements["description"].value;

    editTodo(taskId, title, date, priority, category, description);

    hideDialog();
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

function switchTab(category) {
    content.querySelector("h2").textContent = category;
    content.removeChild(document.getElementById("tasks"));
    content.append(categories.get(category));
    currentGroup = category;
}

function addTodo(title, date, priority, category, description = ""){
    const todo = makeTodo(title, date, priority, category, description);
    todos.push(todo);
    domStuff.addTodo(todo);
}

function editTodo(id, title, date, priority, category, description = "") {
    todos.forEach((todo) => {
        if (todo.id == id) {
            const oldCategory = todo.category;
            todo.title = title;
            todo.date = date;
            todo.priority = priority;
            todo.category = category;
            todo.description = description;
            editDomTodo(todo, oldCategory);
            return;
        }
    });
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

function editDomTodo(todo, oldCategory) {
    const item = document.getElementById("item" + todo.id);
    
    const priorityBar = item.querySelector(".priorityBar");
    priorityBar.style.backgroundColor = `var(--priority-${todo.priority})`;
    
    const h5 = item.querySelector("h5");
    h5.textContent = todo.title;

    const dateP = item.querySelector("p");
    dateP.textContent = todo.date;

    if (todo.category != oldCategory) {
        categories.keys().forEach((key) => {
            if (key == oldCategory) {
                categories.get(key).removeChild(item);
            }
            else if (key == todo.category) {
                categories.get(key).appendChild(item);
            }
        });
    }
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

    if (currTodoEdit != null) {
        document.getElementById("titleInput").value = currTodoEdit.title;
        document.getElementById("dateInput").value = currTodoEdit.date;
        document.getElementById("descriptionInput").value = currTodoEdit.description;
    }
}

function hideDialog() {
    const dialogContainer = document.getElementById("dialogContainer");
    dialogContainer.style.display = "none";
    const dialog = document.querySelector("dialog");
    clearDialog(document.getElementById("addTaskForm"));
    dialog.close();
}

function clearDialog(form) {
    form.querySelectorAll("input, textarea").forEach((field) => {
        field.value = "";
    });
    currTodoEdit = null;
}
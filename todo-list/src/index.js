import './styles.css';
import Plus from './assets/plus.svg';

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
    let newCategoryOpen = false;

    const content = document.getElementById("content")

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
            todoList.currTodoEdit = todo;
            domStuff.showDialog();
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
                        todoList.addCategory(name.value, newCategoryDiv);
                    }
                });
    
                btn.addEventListener("click", () => {
                    todoList.addCategory(name.value, newCategoryDiv);
                });
    
                cancelBtn.addEventListener("click", () => {
                    closeAddCategory();
                });
            }
        });
    };

    const addCategory = function (category) {
        if (category != '') {
            const nav = document.querySelector("nav");
            const btn = document.createElement("button");
            btn.textContent = category;
        
            btn.addEventListener("click", () => {
                switchTab(category);
            });
        
            nav.appendChild(btn);
        }
        closeAddCategory();
    };

    const closeAddCategory = function () {
        newCategoryOpen = false;
        const newCategoryDiv = document.getElementById('newCategory');
        newCategoryDiv.remove();
    };

    const switchTab = function (category) {
        content.querySelector("h2").textContent = category;
        content.removeChild(document.getElementById("tasks"));
        content.append(categories.get(category));
        currentGroup = category;
    };

    const editTodo = function (todo, oldCategory) {
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
    };

    const loadAddTaskCategories = function () {
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
    };

    const showDialog = function () {
        const dialogContainer = document.getElementById("dialogContainer");
        dialogContainer.style.display = "flex";
        const dialog = document.querySelector("dialog");
        dialog.show();
    
        const categoryField = document.getElementById("categoryField");
        const categoryDropDown = categoryField.querySelector("select");
        categoryDropDown.remove();
    
        categoryField.appendChild(loadAddTaskCategories());
    
        if (todoList.currTodoEdit != null) {
            document.getElementById("titleInput").value = todoList.currTodoEdit.title;
            document.getElementById("dateInput").value = todoList.currTodoEdit.date;
            document.getElementById("descriptionInput").value = todoList.currTodoEdit.description;
        }
    };
    
    const hideDialog = function () {
        const dialogContainer = document.getElementById("dialogContainer");
        dialogContainer.style.display = "none";
        const dialog = document.querySelector("dialog");
        clearDialog(document.getElementById("addTaskForm"));
        dialog.close();
    };
    
    const clearDialog = function (form) {
        form.querySelectorAll("input, textarea").forEach((field) => {
            field.value = "";
        });
        todoList.currTodoEdit = null;
    };

    const getFormData = function () {
        const addTaskForm = document.getElementById("addTaskForm");

        const title = addTaskForm.elements["title"].value;
        const date = addTaskForm.elements["date"].value;
        const priority = addTaskForm.elements["priority"].value;
        const category = addTaskForm.elements["category"].value;
        const description = addTaskForm.elements["description"].value;

        domStuff.hideDialog();

        return { title, date, priority, category, description };
    };

    content.append(categories.get("ungrouped"));

    return { newCategoryOpen, addTodo, loadAddCategory, addCategory, switchTab, editTodo, showDialog, hideDialog, clearDialog, getFormData };
})();

const todoList = (function () {
    const todos = [];
    let currTodoEdit = null;
    let idx = 0;

    const addCategory = function (name, newCategoryDiv) {
        if (name) {
            categories.addCategory(name);
            domStuff.addCategory(name);
            domStuff.switchTab(name);
        }
        newCategoryDiv.remove();
    
        domStuff.newCategoryOpen = false;
    };

    const addTodo = function (title, date, priority, category, description = ""){
        const todo = makeTodo(title, date, priority, category, description);
        todos.push(todo);
        domStuff.addTodo(todo);
    };
    
    const editTodo = function (id, title, date, priority, category, description = "") {
        todos.forEach((todo) => {
            if (todo.id == id) {
                const oldCategory = todo.category;
                todo.title = title;
                todo.date = date;
                todo.priority = priority;
                todo.category = category;
                todo.description = description;
                domStuff.editTodo(todo, oldCategory);
                return;
            }
        });
    };

    const makeTodo = function (title, date, priority, category, description) {
        return {
            title: title,
            date: date,
            priority: priority, 
            category: category, 
            description: description,
            complete: false, 
            id: idx++
        };
    };

    const handleAddTask = function () {
        const data = domStuff.getFormData();
        addTodo(data.title, data.date, data.priority, data.category, data.description);
    };

    const handleEditTask = function (taskId) {
        const data = domStuff.getFormData()
        editTodo(taskId, data.title, data.date, data.priority, data.category, data.description);
    };

    return { currTodoEdit, addCategory, addTodo, editTodo, handleAddTask, handleEditTask }
})();

const init = (function () {
    const loadAddTask = function () {
        const addTask = document.getElementById("addTask");
        addTask.querySelector("img").src = Plus;
        const dialogOverlay = document.getElementById("dialogOverlay");
        const addTaskButton = document.getElementById("addTaskButton")
    
        dialogOverlay.addEventListener("click", () => {
            domStuff.hideDialog();
        });
    
        addTask.addEventListener("click", () => {
            domStuff.showDialog();
        });
    
        addTaskButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (currTodoEdit != null) {
                todoList.handleEditTask(currTodoEdit.id);
            }
            else {
                todoList.handleAddTask();
            }
        });
    };

    const loadNav = function () {
        const nav = document.querySelector("nav");
    
        for (let category of categories.keys()) {
            const btn = document.createElement("button");
            btn.textContent = category;
    
            btn.addEventListener("click", () => {
                domStuff.switchTab(category);
            });
    
            nav.appendChild(btn);
        }
    };

    return { loadAddTask, loadNav }
})();

init.loadAddTask();
init.loadNav();
domStuff.loadAddCategory();

todoList.addTodo("test todo", "thu 7/25", 0, "grouped", "hello hello!");
todoList.addTodo("walk gerald", "fri 7/26", 2, "ungrouped", "take gerald for a walk");
todoList.addTodo("water the sink", "sat 7/27", 0, "ungrouped", "the sink is thirsty");
todoList.addTodo("do something cool", "sun 7/29", 1, "grouped", "what is cool?");
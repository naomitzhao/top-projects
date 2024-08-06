import Trash from '../assets/trash.svg';

// domStuff handles the majority of dom manipulation in this app. 

export function makeDomStuff (categories, todoList) {
    let newCategoryOpen = false;
    let currentGroup = "ungrouped";

    const content = document.getElementById("content");

    // getter for currentGroup
    const getCurrentGroup = function () {
        return currentGroup;
    };

    // adds a todo (task) to the DOM
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

        const dateDelete = document.createElement("div");
        dateDelete.classList.add("dateDelete");
    
        const dateP = document.createElement("p");
        dateP.textContent = todo.date;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("todoDeleteButton");

        const deleteIcon = document.createElement("img");
        deleteIcon.src = Trash;
        deleteButton.appendChild(deleteIcon);

        dateDelete.append(dateP, deleteButton);
    
        itemContent.append(nameCheck, dateDelete);
    
        item.append(priorityBar, itemContent);
        categories.get(todo.category).appendChild(item);
    
        // clicking the checkmark toggles the appearance of the item
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
    
        // clicking the header opens the form with info / edit for this todo
        h5.addEventListener("click", () => {
            todoList.setCurrTodoEdit(todo);
            showDialog();
        });

        // clicking the delete button deletes the todo from the DOM
        deleteButton.addEventListener("click", () => {
            deleteTodo(todo);
        });
    };

    // clicking the add category button opens a form in the nav
    const handleClickAddCategory = function () {
        if (!newCategoryOpen) { // check there isn't already an open form
            const nav = document.querySelector("nav");
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

            // create a new category when form submitted
            btn.addEventListener("click", () => {
                if (name.value) {
                    categories.addCategory(name.value);
                    addCategory(name.value);
                    switchTab(name.value);
                }
            });

            // pressing enter while input also submits the form
            name.addEventListener("keydown", (e) => {
                if (e.key == 'Enter') {
                    if (name.value) {
                        categories.addCategory(name.value);
                        addCategory(name.value);
                        switchTab(name.value);
                    }
                }
            });

            // clicking the cancel button closes the form without making a new category
            cancelBtn.addEventListener("click", () => {
                closeAddCategory();
            });
        }
    }

    // add a new category to the DOM and switches to it
    const addCategory = function (category) {
        const nav = document.querySelector("nav");
        const btn = document.createElement("button");
        btn.textContent = category;
        btn.id = "category-" + category;
    
        btn.addEventListener("click", () => {
            switchTab(category);
        });
    
        nav.appendChild(btn);
        closeAddCategory();
    };

    // closes the add category form
    const closeAddCategory = function () {
        if (newCategoryOpen) {
            newCategoryOpen = false;
            const newCategoryDiv = document.getElementById('newCategory');
            newCategoryDiv.remove();
        }
    };

    // deletes a category from the DOM
    const deleteCategory = function (category) {
        const categoryButton = document.getElementById("category-" + category);
        categoryButton.remove();
    }

    // switches the content div's content to a different category's content
    const switchTab = function (category) {
        content.querySelector("h2").textContent = category;
        content.removeChild(document.getElementById("tasks"));
        content.append(categories.get(category));
        currentGroup = category;
    };

    // edits the DOM of a specific todo
    const editTodo = function (todo, oldCategory) {
        const item = document.getElementById("item" + todo.id);

        const priorityBar = item.querySelector(".priorityBar");
        priorityBar.style.backgroundColor = `var(--priority-${todo.priority})`;
        
        const h5 = item.querySelector("h5");
        h5.textContent = todo.title;

        const dateP = item.querySelector("p");
        dateP.textContent = todo.date;
    
        // if the category was edited, move the todo from the old category to the new one
        if (todo.category != oldCategory) {
            item.remove();
            categories.keys().forEach((key) => {
                if (key == todo.category) {
                    categories.get(key).appendChild(item);
                }
            });
        }
    };

    // delete a todo from the DOM
    const deleteTodo = function (todo) {
        const item = document.getElementById("item" + todo.id);
        item.remove();
    };

    // load the dropdown used to select category in the task form
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

    const loadSelectedPriority = function (selected) {
        const priorityInput = document.getElementById("priorityInput");
        for (let i = 0; i < 3; i ++) {
            if (priorityInput.options[i].value == selected) {
                priorityInput.options[i].selected = true;
            }
        }
    }

    // show the task form dialog
    const showDialog = function () {
        const dialogContainer = document.getElementById("dialogContainer");
        dialogContainer.style.display = "flex";
        const dialog = document.querySelector("dialog");
        dialog.show();
    
        const categoryField = document.getElementById("categoryField");
        const categoryDropDown = categoryField.querySelector("select");
        categoryDropDown.remove();
    
        categoryField.appendChild(loadAddTaskCategories());
        loadSelectedPriority(0);
    
        if (todoList.getCurrTodoEdit() != null) {
            loadSelectedPriority(todoList.getCurrTodoEdit().priority);

            document.getElementById("titleInput").value = todoList.getCurrTodoEdit().title;
            document.getElementById("dateInput").value = todoList.getCurrTodoEdit().date;
            document.getElementById("descriptionInput").value = todoList.getCurrTodoEdit().description;
        }
    };
    
    // hide the task form dialog
    const hideDialog = function () {
        const dialogContainer = document.getElementById("dialogContainer");
        dialogContainer.style.display = "none";
        const dialog = document.querySelector("dialog");
        clearDialog(document.getElementById("addTaskForm"));
        dialog.close();
    };
    
    // clear the task form
    const clearDialog = function (form) {
        form.querySelectorAll("input, textarea").forEach((field) => {
            field.value = "";
        });
        todoList.setCurrTodoEdit(null);
    };

    content.append(categories.get("ungrouped"));

    return { getCurrentGroup, addTodo, handleClickAddCategory, addCategory, deleteCategory, switchTab, editTodo, showDialog, hideDialog, clearDialog };
}
import Trash from '../assets/trash.svg';

// domStuff handles the majority of dom manipulation in this app. 

export function makeDomStuff (todoList, localStorage) {
    let newCategoryOpen = false;
    let currentGroup = "ungrouped";
    const categoryDivs = new Map();

    const content = document.getElementById("content");

    // getter for currentGroup
    const getCurrentGroup = function () {
        return currentGroup;
    };

    const formatDate = function(dateObj) {
        const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        const dayText = daysOfWeek[dateObj.getDay()];
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth() + 1;
        let day = dateObj.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (year != (new Date()).getFullYear()) {
            return `${month}/${day}/${year}`;
        }
        return `${dayText} ${month}/${day}`;
    }

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
        let dateText = "";
        if (todo.date) {
            dateText = formatDate(todo.date);
        }
        dateP.textContent = dateText;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("todoDeleteButton");

        const deleteIcon = document.createElement("img");
        deleteIcon.src = Trash;
        deleteButton.appendChild(deleteIcon);

        dateDelete.append(dateP, deleteButton);
    
        itemContent.append(nameCheck, dateDelete);
    
        item.append(priorityBar, itemContent);
        categoryDivs.get(todo.category).appendChild(item);

        if (todo.complete == true) {
            check.classList.add("checkedCheck");
            h5.classList.add("checkedName");
            item.classList.add("checkedItem");
        }
    
        // clicking the checkmark toggles the appearance of the item and toggles complete
        check.addEventListener("click", () => {
            todoList.toggleTodoComplete(todo.id);
            if (check.classList.contains("checkedCheck")) {
                check.classList.remove("checkedCheck");
                h5.classList.remove("checkedName");
                item.classList.remove("checkedItem");
                localStorage.update();
            }
            else {
                check.classList.add("checkedCheck");
                h5.classList.add("checkedName");
                item.classList.add("checkedItem");
                localStorage.update();
            }
        });
    
        // clicking the header opens the form with info / edit for this todo
        h5.addEventListener("click", () => {
            todoList.setCurrTodoEdit(todo);
            showDialog();
        });

        // clicking the delete button deletes the todo
        deleteButton.addEventListener("click", () => {
            deleteTodo(todo);
            todoList.deleteTodo(todo.id);
            localStorage.update();
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

            function listAndDOMAddCategory (categoryName) {
                categoryDivs.set(categoryName, []);
                addCategory(categoryName);
                todoList.addCategory(categoryName);
                localStorage.update();
                switchTab(categoryName);
            }

            // create a new category when form submitted
            btn.addEventListener("click", () => {
                if (name.value) {
                    listAndDOMAddCategory(name.value);
                }
            });

            // pressing enter while input also submits the form
            name.addEventListener("keydown", (e) => {
                if (e.key == 'Enter') {
                    if (name.value) {
                        listAndDOMAddCategory(name.value);
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
        
        const div = document.createElement("div");
        div.id = 'tasks';
        categoryDivs.set(category, div);

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
        categoryDivs.delete(category);
        localStorage.update();
    }

    // switches the content div's content to a different category's content
    const switchTab = function (category) {
        content.querySelector("h2").textContent = category;
        if (document.getElementById("tasks")) {
            content.removeChild(document.getElementById("tasks"));
        }
        content.append(categoryDivs.get(category));
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
        let dateText = "";
        if (todo.date) {
            dateText = formatDate(todo.date);
        }
        dateP.textContent = dateText;
    
        // if the category was edited, move the todo from the old category to the new one
        if (todo.category != oldCategory) {
            item.remove();
            categoryDivs.forEach((key) => {
                if (key == todo.category) {
                    categoryDivs.get(key).appendChild(item);
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
        for (let category of categoryDivs.keys()){
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
            const todoDate = todoList.getCurrTodoEdit().date;
            if (todoDate) {
                let month = todoDate.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                let day = todoDate.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                document.getElementById("dateInput").value = `${todoDate.getFullYear()}-${month}-${day}`;
            }
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

    return { getCurrentGroup, addTodo, handleClickAddCategory, addCategory, deleteCategory, switchTab, editTodo, showDialog, hideDialog, clearDialog };
}
import Trash from '../assets/trash.svg';

export function makeDomStuff (categories, todoList) {
    let newCategoryOpen = false;
    let currentGroup = "ungrouped";

    const content = document.getElementById("content")

    const getCurrentGroup = function () {
        return currentGroup;
    };

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
            todoList.setCurrTodoEdit(todo);
            showDialog();
        });

        deleteButton.addEventListener("click", () => {
            deleteTodo(todo);
        });
    };

    const handleClickAddCategory = function () {
        if (!newCategoryOpen) {
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

            name.addEventListener("keydown", (e) => {
                if (e.key == 'Enter') {
                    todoList.addCategory(name.value);
                    addCategory(name.value);
                    switchTab(name.value);
                }
            });

            btn.addEventListener("click", () => {
                todoList.addCategory(name.value);
                addCategory(name.value);
                switchTab(name.value);
            });

            cancelBtn.addEventListener("click", () => {
                closeAddCategory();
            });
        }
    }

    const addCategory = function (category) {
        if (category != '') {
            const nav = document.querySelector("nav");
            const btn = document.createElement("button");
            btn.textContent = category;
            btn.id = "category-" + category;
        
            btn.addEventListener("click", () => {
                switchTab(category);
            });
        
            nav.appendChild(btn);
        }
        closeAddCategory();
    };

    const deleteCategory = function (category) {
        const categoryButton = document.getElementById("category-" + category);
        categoryButton.remove();
    }

    const closeAddCategory = function () {
        if (newCategoryOpen) {
            newCategoryOpen = false;
            const newCategoryDiv = document.getElementById('newCategory');
            newCategoryDiv.remove();
        }
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
            item.remove();
            categories.keys().forEach((key) => {
                if (key == todo.category) {
                    categories.get(key).appendChild(item);
                }
            });
        }
    };

    const deleteTodo = function (todo) {
        const item = document.getElementById("item" + todo.id);
        item.remove();
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
    
        if (todoList.getCurrTodoEdit() != null) {
            document.getElementById("titleInput").value = todoList.getCurrTodoEdit().title;
            document.getElementById("dateInput").value = todoList.getCurrTodoEdit().date;
            document.getElementById("descriptionInput").value = todoList.getCurrTodoEdit().description;
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
        todoList.setCurrTodoEdit(null);
    };

    content.append(categories.get("ungrouped"));

    return { getCurrentGroup, addTodo, handleClickAddCategory, addCategory, deleteCategory, switchTab, editTodo, showDialog, hideDialog, clearDialog };
}
import Plus from '../assets/plus.svg';

export function makeInit (categories, todoList, domStuff) {
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
            const ctde = todoList.getCurrTodoEdit();
            if (ctde) {
                const oldCategory = ctde.category;
                todoList.handleFormSubmit();
                domStuff.editTodo(ctde, oldCategory);
            }
            else {
                domStuff.addTodo(todoList.handleFormSubmit());
            }
            domStuff.hideDialog();
        });
    };

    const loadNav = function () {
        domStuff.addCategory("ungrouped");
        domStuff.addCategory("grouped");
    };

    const loadAddCategory = function () {
        const addCategoryButton = document.getElementById("addCategoryButton");
        addCategoryButton.querySelector("img").src = Plus;
    
        addCategoryButton.addEventListener("click", () => {
            domStuff.handleClickAddCategory();
        });
    };

    const loadDeleteCategory = function () {
        const deleteCategory = document.getElementById("deleteCategory");

        deleteCategory.addEventListener("click", () => {
            const current = domStuff.getCurrentGroup();
            if (current == "ungrouped") {
                alert("you can't delete the default group!");
            }
            else {
                domStuff.switchTab("ungrouped");
                categories.deleteCategory(current);
                domStuff.deleteCategory(current);
            }
        });
    }

    const addTodo = function (title, date, priority, category, description) {
        const todo = todoList.addTodo(title, date, priority, category, description);
        domStuff.addTodo(todo);
    };

    loadAddTask();
    loadNav();
    loadAddCategory();
    loadDeleteCategory();

    return { addTodo }
}
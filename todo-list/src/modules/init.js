import Plus from '../assets/plus.svg';

// initialization of various dom elements
export function init (todoList, domStuff, localStorage) {

    const loadData = function () {
        if (localStorage.isPopulated()) {
            localStorage.loadCategories();
            localStorage.loadTodos();
            for (let category of todoList.getCategories()) {
                domStuff.addCategory(category);
            }
            for (let todo of todoList.getTodos()) {
                domStuff.addTodo(todo);
            }
        } else {
            todoList.addCategory("ungrouped");
            todoList.addCategory("school");
            domStuff.addCategory("ungrouped");
            domStuff.addCategory("school");
            addTodo("welcome to tudu!", new Date(2024, 7, 15), 2, "ungrouped", ":D");
            addTodo("click me :3", new Date(2024, 7, 29), 1, "ungrouped", "you can change any of these fields! tudu uses your browser's local storage, so clear your cookies to reset.");
            addTodo("buy eggs", new Date(2024, 7, 31), 0, "ungrouped", "trader joes");
            addTodo("study for cs exam", new Date(2024, 7, 15), 1, "school", "i hope i ace this one!");
            localStorage.update();
        }
        domStuff.switchTab("ungrouped");
    }
    
    

    // this plus sign icon shows the add task dialog form when clicked.
    const loadAddTask = function () {
        const addTask = document.getElementById("addTask");
        addTask.querySelector("img").src = Plus;
        const dialogOverlay = document.getElementById("dialogOverlay");
        const addTaskButton = document.getElementById("addTaskButton")
    
        // clicking outside of the dialog closes it.
        dialogOverlay.addEventListener("click", () => {
            domStuff.hideDialog();
        });
    
        // clicking the add task icon opens the add task dialog form.
        addTask.addEventListener("click", () => {
            domStuff.showDialog();
        });
    
        // clicking the submit button of the form either adds a new task or edits an existing one.
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
            localStorage.update();
        });
    };

    // the plus sign in the side bar makes a form to create a new category. 
    const loadAddCategory = function () {
        const addCategoryButton = document.getElementById("addCategoryButton");
        addCategoryButton.querySelector("img").src = Plus;
    
        addCategoryButton.addEventListener("click", () => {
            domStuff.handleClickAddCategory();
        });
    };

    // clicking "delete this category" deletes the category the viewer is using
    // unless it is the "ungrouped" category.
    const loadDeleteCategory = function () {
        const deleteCategory = document.getElementById("deleteCategory");

        deleteCategory.addEventListener("click", () => {
            const current = domStuff.getCurrentGroup();
            if (current == "ungrouped") {
                alert("you can't delete the default category!");
            }
            else {
                domStuff.switchTab("ungrouped");
                todoList.deleteCategory(current);
                domStuff.deleteCategory(current);
                localStorage.update();
            }
        });
    }

    // add a todo to the todo data structure as well as add it to the dom
    // this function is only used to add the default todos.
    const addTodo = function (title, date, priority, category, description) {
        const todo = todoList.addTodo(title, date, priority, category, description);
        domStuff.addTodo(todo);
        localStorage.update();
    };

    loadData();
    loadAddTask();
    loadAddCategory();
    loadDeleteCategory();

    return { addTodo }
}
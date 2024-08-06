import Plus from '../assets/plus.svg';

// initialization of various dom elements
export function makeInit (categories, todoList, domStuff) {

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
        });
    };

    // load the default categories of the app.
    const loadNav = function () {
        domStuff.addCategory("ungrouped");
        domStuff.addCategory("school");
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
                categories.deleteCategory(current);
                domStuff.deleteCategory(current);
            }
        });
    }

    // add a todo to the todo data structure as well as add it to the dom
    // this function is only used to add the default todos.
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
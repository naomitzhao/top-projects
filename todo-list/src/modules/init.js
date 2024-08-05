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

    const loadAddCategory = function () {
        const addCategoryButton = document.getElementById("addCategoryButton");
        addCategoryButton.querySelector("img").src = Plus;
    
        addCategoryButton.addEventListener("click", () => {
            domStuff.handleClickAddCategory();
        });
    };

    loadAddTask();
    loadNav();
    loadAddCategory();
}
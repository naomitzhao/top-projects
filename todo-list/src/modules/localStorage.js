export function makeLocalStorage (todoList) {
    // check if there is any data in local storage
    const isPopulated = function () {
        if (localStorage.getItem("categories")) {
            return true;
        } else {
            return false;
        }
    }

    const loadCategories = function () {
        const categories = localStorage.getItem("categories").split(String.fromCharCode(30));
        if (categories) {
            todoList.setCategories(categories);
        }
    }

    const loadTodos = function () {
        const todoStrings = localStorage.getItem("todos").split(String.fromCharCode(29));
        for (let i = 0; i < todoStrings.length; i ++){
            // title, date, priority, category, description, complete
            const todoAttributes = todoStrings[i].split(String.fromCharCode(30));
            let complete = todoAttributes[5];
            if (complete == "true") {
                complete = true;
            } else {
                complete = false;
            }
            const date = new Date(todoAttributes[1]);
            todoList.addTodo(todoAttributes[0], date, todoAttributes[2], todoAttributes[3], todoAttributes[4], complete);
        }
    }

    const update = function () {
        let todoString = "";
        const todos = todoList.getTodos();
        for (let i = 0; i < todos.length; i ++) {
            const todo = todos[i];
            // title, date, priority, category, description
            const date = todo.date;
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const dateString = `${date.getFullYear()}-${(month < 10) ? "0" + month : month}-${(day < 10) ? "0" + day : day}T00:00:00`;
            console.log(dateString);
            todoString += `${todo.title}${String.fromCharCode(30)}${dateString}${String.fromCharCode(30)}${todo.priority}${String.fromCharCode(30)}${todo.category}${String.fromCharCode(30)}${todo.description}${String.fromCharCode(30)}${todo.complete}`;
            if (i != todos.length - 1) {
                todoString += String.fromCharCode(29);
            }
        }

        let categoriesString = "";
        const categories = todoList.getCategories();
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            categoriesString += category;
            if (i != categories.length - 1) {
                categoriesString += String.fromCharCode(30);
            }
        }
        localStorage.setItem("categories", categoriesString);
        localStorage.setItem("todos", todoString);
    }

    return { isPopulated, loadCategories, loadTodos, update }
}
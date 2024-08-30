import { getFormData } from "./formData";

// the todo list handles all things to do with the actual data
export function makeTodoList () {
    const todos = [];
    let currTodoEdit = null;
    let idx = 0;
    const categories = [];

    // make a new todo and add it to the todo array
    const addTodo = function (title, date, priority, category, description = ""){
        const todo = makeTodo(title, date, priority, category, description);
        todos.push(todo);
        return todo;
    };
    
    // find a todo in the todo array using a given id
    // and edit the attributes of that todo
    const editTodo = function (id, title, date, priority, category, description = "") {
        todos.forEach((todo) => {
            if (todo.id == id) {
                todo.title = title;
                todo.date = date;
                todo.priority = priority;
                todo.category = category;
                todo.description = description;
                return todo;
            }
        });
    };

    // factory function to make todo objects
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

    // returns null if a todo was edited
    // returns the new todo is a todo was created
    const handleFormSubmit = function () {
        if (currTodoEdit != null) {
            editTodoFromForm(currTodoEdit.id);
            return null;
        }
        else {
            return addTodoFromForm();
        }
    }

    // get form data and add a new todo to the todo array
    // returns the new todo
    const addTodoFromForm = function () {
        const data = getFormData();
        return addTodo(data.title, data.date, data.priority, data.category, data.description);
    };

    // get form data and edit the existing todo
    // returns the edited todo
    const editTodoFromForm = function (taskId) {
        const data = getFormData();
        return editTodo(taskId, data.title, data.date, data.priority, data.category, data.description);
    };

    // getter for currTodoEdit
    const getCurrTodoEdit = function () {
        return currTodoEdit;
    }

    // setter for currTodoEdit
    const setCurrTodoEdit = function (todo) {
        currTodoEdit = todo;
    }

    // return the array of todos
    const getTodos = function () {
        return todos;
    }

    // return the array of categories
    const getCategories = function () {
        return categories;
    }

    // add a category to the categories array
    const addCategory = function (category) {
        categories.push(category);
    }

    // delete a category from the categories array
    const deleteCategory = function (category) {
        const idx = categories.indexOf(category);
        if (idx > -1) {
            idx.splice(idx, 1);
        } else {
            throw Error(category + " not found");
        }
    }

    return { addTodo, editTodo, handleFormSubmit, addTodoFromForm, editTodoFromForm, getCurrTodoEdit, setCurrTodoEdit, getTodos, getCategories, addCategory, deleteCategory }
}
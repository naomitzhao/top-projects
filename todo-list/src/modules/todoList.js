import { getFormData } from "./formData";

export function makeTodoList (categories) {
    const todos = [];
    let currTodoEdit = null;
    let idx = 0;

    const addCategory = function (name) {
        if (name) {
            categories.addCategory(name);
        }
    };

    const addTodo = function (title, date, priority, category, description = ""){
        const todo = makeTodo(title, date, priority, category, description);
        todos.push(todo);
        return todo;
    };
    
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

    const handleFormSubmit = function () {
        if (currTodoEdit != null) {
            const oldCategory = currTodoEdit.category;
            editTodoFromForm(currTodoEdit.id);
            return oldCategory;
        }
        else {
            return addTodoFromForm();
        }
    }

    const addTodoFromForm = function () {
        const data = getFormData();
        return addTodo(data.title, data.date, data.priority, data.category, data.description);
    };

    const editTodoFromForm = function (taskId) {
        const data = getFormData();
        return editTodo(taskId, data.title, data.date, data.priority, data.category, data.description);
    };

    const getCurrTodoEdit = function () {
        return currTodoEdit;
    }

    const setCurrTodoEdit = function (todo) {
        currTodoEdit = todo;
    }

    return { addCategory, addTodo, editTodo, handleFormSubmit, addTodoFromForm, editTodoFromForm, getCurrTodoEdit, setCurrTodoEdit }
}
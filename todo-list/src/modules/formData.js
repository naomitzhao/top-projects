// function to extract data from the task dialog form

export function getFormData () {
    const addTaskForm = document.getElementById("addTaskForm");

    const title = addTaskForm.elements["title"].value;
    const date = addTaskForm.elements["date"].value;
    const priority = addTaskForm.elements["priority"].value;
    const category = addTaskForm.elements["category"].value;
    const description = addTaskForm.elements["description"].value;

    return { title, date, priority, category, description };
}
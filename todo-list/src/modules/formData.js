// function to extract data from the task dialog form

export function getFormData () {
    const addTaskForm = document.getElementById("addTaskForm");

    const title = addTaskForm.elements["title"].value;
    const priority = addTaskForm.elements["priority"].value;
    const category = addTaskForm.elements["category"].value;
    const description = addTaskForm.elements["description"].value;

    let date = addTaskForm.elements["date"].value;
    if (date) {
        const dateYear = parseInt(date.slice(0, 4));
        const dateMonth = parseInt(date.slice(5, 7)) - 1;
        const dateDate = parseInt(date.slice(8, 10));
        date = new Date(dateYear, dateMonth, dateDate);
    } else {
        date = null;
    }
    
    return { title, date, priority, category, description };
}
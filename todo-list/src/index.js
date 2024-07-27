import './styles.css';

let idx = 0;

const todos = [
    {
        title: "walk gerald", 
        date: "fri 7/26", 
        priority: 2, 
        category: "ungrouped", 
        description: "take gerald for a walk", 
        id: -3
    },
    {
        title: "water the sink", 
        date: "sat 7/27", 
        priority: 0, 
        category: "ungrouped",
        description: "the sink is thirsty.", 
        id: -2
    },
    {
        title: "do something cool", 
        date: "sun 7/29", 
        priority: 1, 
        category: "grouped",
        description: "what is cool?", 
        id: -1
    }
];

const categories = ["ungrouped", "grouped"]

populateNav();
populateList("ungrouped");

function populateNav() {
    const nav = document.querySelector("nav");
    for (let i = 0; i < categories.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = categories[i];
        nav.appendChild(btn);
    }
}

function populateList(category) {
    const tasksDiv = document.getElementById("tasks");
    todos.forEach((todo) => {
        if (todo.category == category) {
            const item = document.createElement("div");
            item.classList.add("item");
            
            const priorityBar = document.createElement("div");
            priorityBar.classList.add("priorityBar");

            const itemContent = document.createElement("div");
            itemContent.classList.add("itemContent");

            const nameCheck = document.createElement("nameCheck");
            nameCheck.classList.add("nameCheck");

            const check = document.createElement("button");
            check.classList.add("check");
            
            const h5 = document.createElement("h5");
            h5.textContent = todo.title;

            nameCheck.append(check, h5);

            const dateP = document.createElement("p");
            dateP.textContent = todo.date;

            itemContent.append(nameCheck, dateP);

            item.append(priorityBar, itemContent);

            tasksDiv.appendChild(item);
        }
        
    });
}
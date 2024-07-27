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

const categories = new Map();
categories.set("ungrouped", generateList("ungrouped"));
categories.set("grouped", generateList("grouped"));

populateNav();

const content = document.getElementById("content")
content.append(categories.get("ungrouped"));

function populateNav() {
    const nav = document.querySelector("nav");
    for (let category of categories.keys()) {
        const btn = document.createElement("button");
        btn.textContent = category;

        btn.addEventListener("click", () => {
            switchTab(category);
        });

        nav.appendChild(btn);
    }
}

function generateList(category) {
    const tasks = document.createElement("div");
    tasks.id = "tasks";
    todos.forEach((todo) => {
        if (todo.category == category) {
            const item = document.createElement("div");
            item.classList.add("item");
            
            const priorityBar = document.createElement("div");
            priorityBar.classList.add("priorityBar");
            priorityBar.style.backgroundColor = `var(--priority-${todo.priority})`;

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

            tasks.appendChild(item);
        }
    });
    return tasks;
}

function switchTab(category) {
    content.querySelector("h2").textContent = category;
    content.removeChild(content.querySelector("div"));
    content.append(categories.get(category));
}
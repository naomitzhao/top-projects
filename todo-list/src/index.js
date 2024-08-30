import './styles.css';

import { makeDomStuff } from './modules/domStuff';
import { makeTodoList } from './modules/todoList';
import { makeInit } from './modules/init';
import { makeLocalStorage } from './modules/localStorage';

const todoList = makeTodoList();
const domStuff = makeDomStuff(todoList);
const init = makeInit(todoList, domStuff);
const localStorage = makeLocalStorage(todoList);

init.addTodo("welcome to tudu!", "mon 8/5", 2, "ungrouped", ":D");
init.addTodo("click me to see more info or edit!", "", 1, "ungrouped", "you can change any of these fields!");
init.addTodo("local storage coming soon.", "?", 0, "ungrouped", "for now... just never ever ever close your tab lol.");
init.addTodo("study for cs exam", "mon 8/5", 1, "school", "i hope i ace this one!");
console.log(document.getElementById("content"));


// localStorage.populateLocalStorage();
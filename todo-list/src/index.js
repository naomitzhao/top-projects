import './styles.css';

import { makeCategories } from './modules/categories';
import { makeDomStuff } from './modules/domStuff';
import { makeTodoList } from './modules/todoList';
import { makeInit } from './modules/init';

const categories = makeCategories();
const todoList = makeTodoList(categories);
const domStuff = makeDomStuff(categories, todoList);
const init = makeInit(categories, todoList, domStuff);

init.addTodo("welcome to tudu!", new Date(2024, 7, 15), 2, "ungrouped", ":D");
init.addTodo("click me to see more info or edit!", null, 1, "ungrouped", "you can change any of these fields!");
init.addTodo("local storage coming soon.", null, 0, "ungrouped", "for now... just never ever ever close your tab lol.");
init.addTodo("study for cs exam", null, 1, "school", "i hope i ace this one!");
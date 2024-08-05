import './styles.css';

import { makeCategories } from './modules/categories';
import { makeDomStuff } from './modules/domStuff';
import { makeTodoList } from './modules/todoList';
import { makeInit } from './modules/init';

const categories = makeCategories();
const todoList = makeTodoList(categories);
const domStuff = makeDomStuff(categories, todoList);
const init = makeInit(categories, todoList, domStuff);

init.addTodo("test todo", "thu 7/25", 0, "grouped", "hello hello!");
init.addTodo("walk gerald", "fri 7/26", 2, "ungrouped", "take gerald for a walk");
init.addTodo("water the sink", "sat 7/27", 0, "ungrouped", "the sink is thirsty");
init.addTodo("do something cool", "sun 7/29", 1, "grouped", "what is cool?");
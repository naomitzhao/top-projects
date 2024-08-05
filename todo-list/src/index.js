import './styles.css';

import { makeCategories } from './modules/categories';
import { makeDomStuff } from './modules/domStuff';
import { makeTodoList } from './modules/todoList';
import { makeInit } from './modules/init';

const categories = makeCategories();
const todoList = makeTodoList(categories);
const domStuff = makeDomStuff(categories, todoList);

makeInit(categories, todoList, domStuff);

todoList.addTodo("test todo", "thu 7/25", 0, "grouped", "hello hello!");
todoList.addTodo("walk gerald", "fri 7/26", 2, "ungrouped", "take gerald for a walk");
todoList.addTodo("water the sink", "sat 7/27", 0, "ungrouped", "the sink is thirsty");
todoList.addTodo("do something cool", "sun 7/29", 1, "grouped", "what is cool?");
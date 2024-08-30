import './styles.css';

import { makeDomStuff } from './modules/domStuff';
import { makeTodoList } from './modules/todoList';
import { makeLocalStorage } from './modules/localStorage';
import { init } from './modules/init';

const todoList = makeTodoList();
const localStorage = makeLocalStorage(todoList);
const domStuff = makeDomStuff(todoList, localStorage);
init(todoList, domStuff, localStorage);

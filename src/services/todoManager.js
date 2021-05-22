import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idlength } = config;

const getTodo = (text) => ({
	id: rndString(idlength),
	text: text,
});

const addTodo = (todos, text) => todos.concat(getTodo(text));

const TodoManager = {
	addTodo,
};

export default TodoManager;

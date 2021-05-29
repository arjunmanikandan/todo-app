import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idlength } = config;

const getTodo = (text) => ({
	id: rndString(idlength),
	text: text,
	completed: false,
});

const addTodo = (todos, text) => todos.concat(getTodo(text));

const toggleTodo = (todos, data) => todos.map((todo) => (todo.id !== data.id
	? todo
	:	{
		...todo,
		completed: !data.completed,
	}
));

const removeTodo = (todos, todo) =>
	todos.filter((current) => current.id !== todo.id);

const toggleAllTodo = (todos, isComplete) => todos.map((todo) => ({
	...todo,
	completed: isComplete,
}));

const getTodoCount = (todos) => todos.length;

const clearButton = (todos) => todos.filter((todo) => !todo.completed);

const TodoManager = {
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAllTodo,
	getTodoCount,
	clearButton,
};

export default TodoManager;

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

const Filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};

const getTodoCount = (todos) => todos.filter(Filters.active).length;

const clearButton = (todos) => todos.filter(Filters.active);

const getNoCompletedCount = (todos) => todos.length;

const getCompletedCount = (todos) => todos.filter(Filters.completed).length;

const filterTodos = (todos, filter) => todos.filter(Filters[filter]);

const hasNoTodos = (todos) => todos.length;

const editTodo = (
	todos, editing, text
) =>
	todos.map((todo) => (todo.id !== editing.id
		? todo
		: {
			...todo,
			text,
		}
	));
const toCheckDisabledButton = ({ state }) => state.input === '';

const isChecked = (todos) => getTodoCount(todos) === 0;

const TodoManager = {
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAllTodo,
	getTodoCount,
	clearButton,
	getNoCompletedCount,
	filterTodos,
	hasNoTodos,
	getCompletedCount,
	editTodo,
	toCheckDisabledButton,
	isChecked,
};

export default TodoManager;

import TodoManager from '../services/todoManager';

const updateInputValue = (dummy, input) => ({
	input,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
});

const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const removeTodo = ({ state }, todo) => ({
	todos: TodoManager.removeTodo(state.todos, todo),
});

const toggleAllTodo = (context, isComplete) => ({
	todos: TodoManager.toggleAllTodo(context.state.todos, isComplete),
});

const clearButton = ({ state }) => ({
	todos: TodoManager.clearButton(state.todos),
});

const setFilter = (context, filter) => ({
	filter,
});

const setEditing = (context, todo) => ({
	editing: todo,
	input: todo.text,
});

const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});

const actions = {
	updateInputValue,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAllTodo,
	clearButton,
	setFilter,
	editTodo,
	setEditing,
};

export default actions;

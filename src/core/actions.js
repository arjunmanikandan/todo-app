import TodoManager from '../services/todoManager';

const updateInputValue = (dummy, evt) => ({
	input: evt.target.value,
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

const actions = {
	updateInputValue,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAllTodo,
	clearButton,
	setFilter,
};

export default actions;

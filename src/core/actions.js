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

const actions = {
	updateInputValue,
	addTodo,
	toggleTodo,
	removeTodo,
};

export default actions;

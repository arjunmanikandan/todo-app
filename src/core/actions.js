import TodoManager from '../services/todoManager';

const updateInputValue = (dummy, evt) => ({
	input: evt.target.value,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
});

const actions = {
	updateInputValue,
	addTodo,
};

export default actions;

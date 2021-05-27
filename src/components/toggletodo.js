import context from '../core/context';
import { React } from 'react';

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;

const Toggletodo = () => {
	const isChecked = getActiveCount(context.state.todos) === 0;

	return (
		<input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.toggleAllTodo(!isChecked) }
		/>
	);
};

export default Toggletodo;

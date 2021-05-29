import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const ClearButton = () => {
	const { todos } = context.state;
	const NoCompletedTodos = TodoManager.getNoCompletedCount(todos) === 0;

	return NoCompletedTodos
		? null
		: <button onClick={ context.actions.clearButton }>ClearButton</button>;
};

export default ClearButton;

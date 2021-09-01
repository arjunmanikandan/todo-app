/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const ClearButton = () => {
	const { todos } = context.state;
	const hasNoTodos = TodoManager.getCompletedCount(todos) === 0;

	return hasNoTodos
		? null
		: <button
				role="clearButton"
				onClick={ context.actions.clearButton }
		  >ClearButton</button>;
};

export default ClearButton;

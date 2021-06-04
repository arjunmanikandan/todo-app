/* eslint-disable indent */
import context from '../core/context';
import { React } from 'react';
import TodoManager from '../services/todoManager';

const Toggletodo = () => {
	const isChecked = TodoManager.getTodoCount(context.state.todos) === 0;
	const notodos = TodoManager.hasNoTodos(context.state.todos) === 0;

	return notodos
		? null
		:	<input
				type="checkbox"
				checked={ isChecked }
				onChange={ () => context.actions.toggleAllTodo(!isChecked) }
				/>;
};

export default Toggletodo;

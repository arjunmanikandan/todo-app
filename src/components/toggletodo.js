/* eslint-disable indent */
import context from '../core/context';
import { React } from 'react';
import TodoManager from '../services/todoManager';

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;

const Toggletodo = () => {
	const isChecked = getActiveCount(context.state.todos) === 0;
	const notodos = TodoManager.getTodoCount(context.state.todos) === 0;

	return notodos
		? null
		:	<input
				type="checkbox"
				checked={ isChecked }
				onChange={ () => context.actions.toggleAllTodo(!isChecked) }
				/>;
};

export default Toggletodo;

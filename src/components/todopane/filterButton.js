/* eslint-disable indent */
import context from '../../core/context';
import { React } from 'react';
import TodoManager from '../../services/todoManager';

const FilterButton = (filter) => {
	const { todos } = context.state;
	const notodos = TodoManager.getNoCompletedCount(todos) === 0;

	return notodos
		? null
		: <button
				className="FilterBtn"
				onClick={ () => context.actions.setFilter(filter) }
				>
			{filter} </button>;
};

export default FilterButton;

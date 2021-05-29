import context from '../core/context';
import { React } from 'react';

const FilterButton = (filter) =>
	<button onClick={ () => context.actions.setFilter(filter) }>
		{filter} </button>;

export default FilterButton;

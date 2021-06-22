import { React } from 'react';
import FilterButton from './filterButton';
const filters = ['all', 'active', 'completed'];

const FilterBar = () =>
	<div className="Btnspacing"> {filters.map(FilterButton)} </div>;

export default FilterBar;

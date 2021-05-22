import { React } from 'react';
import context from '../core/context';

const TodoInput = () =>
	<input
		value={ context.state.input }
		onChange={ (evt) => context.actions.updateInputValue(evt) }
	/>;

export default TodoInput;

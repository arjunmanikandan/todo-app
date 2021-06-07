import { React } from 'react';
import context from '../../core/context';

const AddTodo = () =>
	<button
		disabled={ context.state.input === '' }
		onClick={ context.actions.addTodo }
	>+</button>;

export default AddTodo;

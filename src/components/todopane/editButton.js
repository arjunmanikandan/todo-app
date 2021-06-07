import context from '../../core/context';
import { React } from 'react';

const EditButton = () =>
	<button
		disabled={ context.state.input === '' }
		onClick={ context.actions.editTodo }
	>	OK</button>;

export default EditButton;

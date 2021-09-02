import context from '../../core/context';
import { React } from 'react';
import TodoManager from '../../services/todoManager';

const EditButton = () =>
	<button
		role="editButton"
		disabled={ TodoManager.toCheckDisabledButton(context) }
		onClick={ () => context.actions.editTodo() }
	>	OK</button>;

export default EditButton;

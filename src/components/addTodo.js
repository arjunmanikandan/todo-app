import { React } from 'react';
import context from '../core/context';

const AddTodo = () =>
	<button onClick={ context.actions.addTodo }>Add</button>;

export default AddTodo;

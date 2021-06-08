import { React } from 'react';
import context from '../../core/context';

const Task = (task) => {
	const { id, text } = task;
	const removeButton = (todo) =>
		<button onClick={ () => context.actions.removeTask(todo) }>X</button>;

	return (
		<div key={ id }>
			<span>{ text }</span>
			<span>{ removeButton(task) }</span>
		</div>
	);
};

export default Task;

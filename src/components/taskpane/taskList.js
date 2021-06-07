import context from '../../core/context';
import Task from './task';
import { React } from 'react';

const TaskList = () => {
	const { tasks } = context.state;

	return (
		<div>
			{tasks.map(Task)}
		</div>
	);
};

export default TaskList;

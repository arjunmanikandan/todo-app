import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import context from '../core/context';

const getTask = (Task) => ({
	id: rndString(config.idlength),
	text: Task,
});

const removeTask = (tasks, task) =>
	tasks.filter((data) => data.id !== task.id);

const addTask = (tasks, task) =>
	tasks.concat(getTask(task));

const init = () => {
	context.actions.addTask('Task 1');
	context.actions.addTask('Task 2');
	context.actions.addTask('Task 3');
};

const TaskManager = {
	getTask,
	removeTask,
	init,
	addTask,
};

export default TaskManager;

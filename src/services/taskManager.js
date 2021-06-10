import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import context from '../core/context';

const getTask = (Task) => ({
	id: rndString(config.idlength),
	text: Task,
});

const removeTask = (tasks, task) =>
	tasks.filter((data) => data.id !== task.id);

const init = () => context.actions.setTasks([
	getTask('Task1'),
	getTask('Task 2'),
	getTask('Task 3'),
]);

const TaskManager = {
	getTask,
	removeTask,
	init,
};

export default TaskManager;

/* eslint-disable max-lines-per-function */
import taskManager from './taskManager';
import * as random from '@laufire/utils/random';
import config from '../core/config';

describe('test taskManager', () => {
	const { addTask } = taskManager;
	const { removeTask } = taskManager;
	const { getTask } = taskManager;

	test('to  check addTask method', () => {
		const tasks = [{ id: '12233', text: 'apple' }];
		const result = addTask(tasks, 'bike');

		expect(result).toHaveLength(2);
		expect(tasks[0]).toMatchObject(result[0]);
		expect(tasks[0].text).toEqual(result[0].text);
		expect(result[1].id).not.toBeUndefined();
	});

	test('to  check removeTask method', () => {
		const taskToRemove = { id: '12777', text: 'orange' };
		const retainTasks = [{ id: '12233', text: 'apple' }, taskToRemove];
		const result = removeTask(retainTasks, taskToRemove);

		expect(retainTasks[0]).toMatchObject(result[0]);
	});

	test('to  check getTask method', () => {
		const task = 'RedBull';

		jest.spyOn(random, 'rndString');

		const result = getTask(task);

		expect(result.text).toEqual('RedBull');
		expect(result.id).not.toBeUndefined();
		expect(random.rndString).toHaveBeenCalled();
		expect(random.rndString).toHaveBeenCalledWith(config.idlength);
	});
});

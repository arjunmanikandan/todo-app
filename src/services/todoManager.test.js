/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import TodoManager from './todoManager';
import * as random from '@laufire/utils/random';
import config from '../core/config';

describe('test todoManager', () => {
	const { addTodo, removeTodo, toggleAllTodo } = TodoManager;

	test('to check addTodo method', () => {
		const todos = [
			{ id: '12233', text: 'apple', completed: false },
			{ id: '12233', text: 'airplane', completed: true },
		];

		jest.spyOn(random, 'rndString');

		const result = addTodo(todos, 'bike');

		expect(result).toHaveLength(3);
		expect(todos[0]).toMatchObject(result[0]);
		expect(todos[1]).toMatchObject(result[1]);
		expect(result[2].text).toEqual('bike');
		expect(result[2].completed).toEqual(false);
		expect(random.rndString).toHaveBeenCalled();
		expect(random.rndString).toHaveBeenCalledWith(config.idlength);
	});

	test('to check removeTodo method', () => {
		const todos = [
			{ id: '12273', text: 'apple', completed: false },
			{ id: '12883', text: 'airplane', completed: true },
			{ id: '12999', text: 'atombomb', completed: true },
		];

		const todoToRemove = { id: '12273', text: 'apple', completed: false };
		const result = removeTodo(todos, todoToRemove);

		expect(result).toHaveLength(2);
		expect(todos[1]).toMatchObject(result[0]);
		expect(result[0].completed).toEqual(true);
		expect(result[0].id).not.toBeUndefined();
		expect(result[0].text).toEqual('airplane');
	});

	test.only('to check toggleAllTodo method', () => {
		const todos = [
			{ id: '12273', text: 'apple', completed: false },
			{ id: '12883', text: 'airplane', completed: true },
			{ id: '12999', text: 'atombomb', completed: true },
		];

		const completed = Symbol('completed');
		const completedTrue = toggleAllTodo(todos, completed);

		completedTrue.forEach((todo) => expect(todo.completed).toEqual(completed));
	});
});

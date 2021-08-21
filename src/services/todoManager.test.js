import TodoManager from './todoManager';

describe('test todoManager', () => {
	const { addTodo } = TodoManager;

	test('to check addTodo method', () => {
		const todos = [
			{ id: '12233', text: 'apple', completed: false },
			{ id: '12233', text: 'airplane', completed: true },
		];

		const result = addTodo(todos, 'bike');

		expect(result).toHaveLength(3);
		expect(todos[0]).toMatchObject(result[0]);
		expect(todos[1]).toMatchObject(result[1]);
		expect(result[2].text).toEqual('bike');
		expect(result[2].completed).toEqual(false);
	});
});

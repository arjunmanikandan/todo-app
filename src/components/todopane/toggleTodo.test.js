/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import { fireEvent, render } from '@testing-library/react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import Toggletodo from './toggletodo';

jest.mock('../../core/context', () => ({
	state: { todos: Symbol('todos') },
	actions: { toggleAllTodo: jest.fn() },
}));

describe('test CheckBoxes', () => {
	test(' toggleAllTodo to be visible on screen ', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(1);
		jest.spyOn(TodoManager, 'isChecked').mockReturnValue(false);
		const component = render(Toggletodo()).getByRole('toggleTodo');

		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith(context.state.todos);

		expect(TodoManager.isChecked)
			.toHaveBeenCalledWith(context.state.todos);

		expect(component).not.toBeChecked();
		expect(component).toBeInTheDocument();
	});

	// test.only(' toggleAllTodo not visible on screen ', () => {
	// 	jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(0);

	// 	const component = Toggletodo();

	// 	expect(TodoManager.hasNoTodos)
	// 		.toHaveBeenCalledWith(context.state.todos);

	// 	expect(component).toBeNull();
	// });

	test('onChange event', () => {
		const { actions } = context;

		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(1);
		jest.spyOn(TodoManager, 'isChecked').mockReturnValue(false);
		const component = render(Toggletodo()).getByRole('toggleTodo');

		fireEvent.click(component);
		expect(TodoManager.isChecked)
			.toHaveBeenCalledWith(context.state.todos);

		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith(context.state.todos);

		expect(actions.toggleAllTodo).toHaveBeenCalled();

		expect(component).not.toBeChecked();

		expect(component).toBeInTheDocument();
	});
});

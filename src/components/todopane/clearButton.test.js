/* eslint-disable max-lines-per-function */
import ClearButton from './clearButton';
import { fireEvent, render } from '@testing-library/react';
import TodoManager from '../../services/todoManager';
import context from '../../core/context';


jest.mock('../../core/context', () => ({
	state: { todos: Symbol('todos') },
	actions: { clearButton: jest.fn() },
}));

describe('test Buttons', () => {
	test('clearButton to be visible on screen ', () => {
		jest.spyOn(TodoManager, 'getCompletedCount').mockReturnValue(1);

		const component = render(ClearButton()).getByRole('clearButton');

		expect(TodoManager.getCompletedCount)
			.toHaveBeenCalledWith(context.state.todos);

		expect(component).toBeInTheDocument();
	});

	test('clearButton not visible on screen', () => {
		jest.spyOn(TodoManager, 'getCompletedCount').mockReturnValue(0);

		const component = ClearButton();

		expect(TodoManager.getCompletedCount)
			.toHaveBeenCalledWith(context.state.todos);

		expect(component).toBeNull();
	});

	test('click event', () => {
		jest.spyOn(TodoManager, 'getCompletedCount').mockReturnValue(1);
		const component = render(ClearButton()).getByRole('clearButton');

		fireEvent.click(component);

		expect(context.actions.clearButton)
			.toHaveBeenCalled();

		expect(component).toBeInTheDocument();
	});
});

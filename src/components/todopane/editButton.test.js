/* eslint-disable max-lines-per-function */
import editButton from './editButton';
import { fireEvent, render } from '@testing-library/react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

jest.mock('../../core/context', () => ({
	actions: { editTodo: jest.fn() },
}));

describe('test Buttons', () => {
	test('editButton to be visible on screen ', () => {
		jest.spyOn(TodoManager, 'toCheckDisabledButton').mockReturnValue(false);

		const component = render(editButton()).getByRole('editButton');

		expect(TodoManager.toCheckDisabledButton)
			.toHaveBeenCalledWith(context);

		expect(component).toBeEnabled();
		expect(component).toBeInTheDocument();
	});

	test('editButton not visible on screen ', () => {
		jest.spyOn(TodoManager, 'toCheckDisabledButton').mockReturnValue(true);

		const component = render(editButton()).getByRole('editButton');

		expect(TodoManager.toCheckDisabledButton)
			.toHaveBeenCalledWith(context);

		expect(component).toBeDisabled();
		expect(component).toBeInTheDocument();
	});

	test('click event', () => {
		jest.spyOn(TodoManager, 'toCheckDisabledButton').mockReturnValue(false);
		const component = render(editButton()).getByRole('editButton');

		fireEvent.click(component);
		expect(context.actions.editTodo)
			.toHaveBeenCalledWith();
		expect(component).toBeInTheDocument();
	});
});

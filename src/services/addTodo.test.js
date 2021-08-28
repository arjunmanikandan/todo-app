import AddTodo from '../components/todopane/addTodo';
import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';

jest.mock('../core/context', () => ({
	state: { input: Symbol('input') },
	actions: { addTodo: jest.fn() },
}));

describe('test Buttons', () => {
	const { actions } = context ;

	test('to  check addTodo Button', () => {
		const component = render(AddTodo()).getByRole('addButton');

		expect(component).toBeInTheDocument();
	});

	test('click event', () => {
		jest.spyOn(actions, 'addTodo');

		const component = render(AddTodo()).getByRole('addButton');

		fireEvent.click(component);

		expect(actions.addTodo).toHaveBeenCalled();
	});
});

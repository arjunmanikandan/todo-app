import context from '../core/context';
import AddTodo from './addTodo';
import EditButton from './editButton';

const ActionButton = () => (context.state.editing
	? EditButton()
	: AddTodo());

export default ActionButton;

import context from '../core/context';
import { React } from 'react';
const sharedStyle = {
	height: '1em',
};

const completedStyle = {
	...sharedStyle,
	color: 'red',
};

const activeStyle = {
	...sharedStyle,
	color: 'black',
};

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const style = completed ? completedStyle : activeStyle;

	return <div key={ id } style={ style }>
		<span>
			<input
				type="checkbox"
				checkedDefault={ completed }
				onChange={ () => context.actions.toggleTodo(todo) }
			/>
		</span>
		<span>{text}</span>
		<span>
			<button
				onClick={ () => context.actions.removeTodo(todo) }
			>X
			</button>
		</span>
	</div>;
};

export default Todo;

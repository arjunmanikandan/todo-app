import { React } from 'react';
const style = {
	height: '1em',
};

const Todo = (todo) => {
	const { id, text } = todo;

	return <div key={ id } style={ style }>{text}</div>;
};

export default Todo;

import context from '../../core/context';
import Todo from './todo';
import { React } from 'react';
import TodoManager from '../../services/todoManager';

const TodoList = () => {
	const { todos, filter } = context.state;
	const filteredTodos = TodoManager.filterTodos(todos, filter);

	return <div>{filteredTodos.map(Todo)}</div>;
};

export default TodoList;

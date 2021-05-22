import context from '../core/context';
import Todo from './todo';
import { React } from 'react';

const TodoList = () =>
	<div>{context.state.todos.map(Todo)}</div>;

export default TodoList;

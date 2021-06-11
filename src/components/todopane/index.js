import ActionButton from './actionButton';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import TodoInput from './todoInput';
import TodoList from './todoList';
import Toggletodo from './toggletodo';
import { React } from 'react';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '50%',
	background: 'blue',
};

const TodoPane = () =>
	<div style={ style }>
		<h3> TODO </h3>
		<div>
			{Toggletodo() }
			{ TodoInput() }
			{ActionButton()}
		</div>
		<div>{TodoList()}</div>
		<div>{ClearButton()}</div>
		<div>{FilterBar()}</div>
	</div>;

export default TodoPane;

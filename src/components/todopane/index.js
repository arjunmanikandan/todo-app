import ActionButton from './actionButton';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import TodoInput from './todoInput';
import TodoList from './todoList';
import Toggletodo from './toggletodo';
import { React } from 'react';

const TodoPane = () =>
	<div className="pane todopane">
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

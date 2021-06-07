import TaskList from './taskList';
import { React } from 'react';

const style = {
	position: 'absolute',
	top: 0,
	left : 0,
	height: '100%',
	width: '50%',
	background: 'red',
};

const TaskPane = () =>
	<div style={ style }>
		<h3>Task</h3>
		<div> { TaskList() } </div>
	</div>;

export default TaskPane;

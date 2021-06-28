import TaskList from './taskList';
import { React } from 'react';

const TaskPane = () =>
	<div className= "pane taskpane">
		<h3>Task</h3>
		<div> { TaskList() } </div>
	</div>;

export default TaskPane;

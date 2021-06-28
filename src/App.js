import { React, useEffect } from 'react';
import './App.css';
// import SampleService from './services/sample';
import TaskManager from './services/taskManager';
// import AddTodo from './components/addTodo';
// import TodoInput from './components/todoInput';
// import context from './core/context';
// import TodoList from './components/todoList';
// import Toggletodo from './components/toggletodo';
// import ClearButton from './components/clearButton';
// import FilterBar from './components/filterBar';
// import EditButton from './components/editButton';
// import ActionButton from './components/actionButton.js';
import TaskPane from './components/taskpane';
import TodoPane from './components/todopane';
// import Ticker from './services/ticker';

const App = () => {
	useEffect(TaskManager.init, []);
	// useEffect(Ticker.start, []);
	return (
		<div className="App">
			<div>{ TaskPane() }</div>
			<div>{ TodoPane() }</div>
		</div>
	);
};

export default App;

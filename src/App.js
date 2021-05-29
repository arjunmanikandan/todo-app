import { React, useEffect } from 'react';
import './App.css';
import SampleService from './services/sample';
import AddTodo from './components/addTodo';
import TodoInput from './components/todoInput';
import context from './core/context';
import TodoList from './components/todoList';
import Toggletodo from './components/toggletodo';
import ClearButton from './components/clearButton';
import FilterBar from './components/filterBar';

const App = () => {
	useEffect(SampleService.sayHai, []);
	return (
		<div className="App">
			<div>
				{Toggletodo()}
				{TodoInput()}
			</div>
			<div>{AddTodo()}</div>
			<div>{TodoList()}</div>
			<div>{ClearButton()}</div>
			<div>{FilterBar()}</div>
			<div>RefreshId:{context.state.refreshID}</div>
		</div>
	);
};

export default App;

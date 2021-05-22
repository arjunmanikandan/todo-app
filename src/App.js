import { React, useEffect } from 'react';
import './App.css';
import SampleService from './services/sample';
import AddTodo from './components/addTodo';
import TodoInput from './components/todoInput';
import context from './core/context';
import TodoList from './components/todoList';

const App = () => {
	useEffect(SampleService.sayHai, []);
	return (
		<div className="App">
			<div>{TodoInput()}</div>
			<div>{AddTodo()}</div>
			<div>{TodoList()}</div>
			<div>RefreshId:{context.state.refreshID}</div>
		</div>
	);
};

export default App;

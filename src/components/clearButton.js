import { React } from 'react';
import context from '../core/context';

const ClearButton = () =>
	<button onClick={ context.actions.clearButton }>ClearButton</button>;

export default ClearButton;

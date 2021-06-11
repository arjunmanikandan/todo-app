import config from '../core/config';
import context from '../core/context';

const start = () => {
	const { tickerdelay } = config;

	setInterval(() => {
		context.actions.addTask('New Task');
	}, tickerdelay);
};

const Ticker = {
	start,
};

export default Ticker;

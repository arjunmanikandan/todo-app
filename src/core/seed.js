import { rndString } from '@laufire/utils/random';
import config from './config';

const { refreshIDLength } = config;

const seed = {
	refreshID: rndString(refreshIDLength),
	input: '',
	todos: [],
	filter: 'all',
};

export default seed;

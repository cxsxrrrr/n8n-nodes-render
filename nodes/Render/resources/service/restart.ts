import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForServiceRestart = {
	operation: ['restart'],
	resource: ['service'],
};

export const serviceRestartDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForServiceRestart },
	},
];

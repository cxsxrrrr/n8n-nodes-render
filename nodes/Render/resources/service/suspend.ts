import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForServiceSuspend = {
	operation: ['suspend'],
	resource: ['service'],
};

export const serviceSuspendDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForServiceSuspend },
	},
];

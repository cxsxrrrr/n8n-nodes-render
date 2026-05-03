import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForServiceDelete = {
	operation: ['delete'],
	resource: ['service'],
};

export const serviceDeleteDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForServiceDelete },
	},
];

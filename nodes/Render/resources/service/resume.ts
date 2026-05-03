import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForServiceResume = {
	operation: ['resume'],
	resource: ['service'],
};

export const serviceResumeDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForServiceResume },
	},
];

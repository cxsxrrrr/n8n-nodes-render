import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForEnvVarGetMany = {
	operation: ['getAll'],
	resource: ['envVar'],
};

export const envVarGetManyDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForEnvVarGetMany },
	},
];

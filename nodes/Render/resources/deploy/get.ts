import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForDeployGet = {
	operation: ['get'],
	resource: ['deploy'],
};

export const deployGetDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForDeployGet },
	},
	{
		displayName: 'Deploy ID',
		name: 'deployId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeployGet,
		},
		default: '',
		placeholder: 'e.g. dep-xxxxxxxxxxxxx',
		description: 'The ID of the deploy to retrieve',
	},
];

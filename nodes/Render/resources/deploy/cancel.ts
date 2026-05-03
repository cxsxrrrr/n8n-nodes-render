import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForDeployCancel = {
	operation: ['cancel'],
	resource: ['deploy'],
};

export const deployCancelDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForDeployCancel },
	},
	{
		displayName: 'Deploy ID',
		name: 'deployId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForDeployCancel,
		},
		default: '',
		placeholder: 'e.g. dep-xxxxxxxxxxxxx',
		description: 'The ID of the deploy to cancel',
	},
];

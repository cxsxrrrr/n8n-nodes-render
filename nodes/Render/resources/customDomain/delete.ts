import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForCustomDomainDelete = {
	operation: ['delete'],
	resource: ['customDomain'],
};

export const customDomainDeleteDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForCustomDomainDelete },
	},
	{
		displayName: 'Custom Domain ID',
		name: 'customDomainId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCustomDomainDelete,
		},
		default: '',
		placeholder: 'e.g. cdm-xxxxxxxxxxxxx',
		description: 'The ID of the custom domain to delete',
	},
];

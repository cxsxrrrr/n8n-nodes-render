import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForCustomDomainCreate = {
	operation: ['create'],
	resource: ['customDomain'],
};

export const customDomainCreateDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForCustomDomainCreate },
	},
	{
		displayName: 'Domain Name',
		name: 'domainName',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForCustomDomainCreate,
		},
		default: '',
		placeholder: 'e.g. www.example.com',
		description: 'The custom domain name to add to the service',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];

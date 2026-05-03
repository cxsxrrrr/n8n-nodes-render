import type { INodeProperties } from 'n8n-workflow';
import { customDomainGetManyDescription } from './getAll';
import { customDomainCreateDescription } from './create';
import { customDomainDeleteDescription } from './delete';

const showOnlyForCustomDomain = {
	resource: ['customDomain'],
};

export const customDomainDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCustomDomain,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a custom domain',
				description: 'Add a custom domain to a service',
				routing: {
					request: {
						method: 'POST',
						url: '=/services/{{$parameter.serviceId}}/custom-domains',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a custom domain',
				description: 'Remove a custom domain from a service',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/services/{{$parameter.serviceId}}/custom-domains/{{$parameter.customDomainId}}',
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: '={{ { "deleted": true, "customDomainId": $parameter.customDomainId } }}',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many custom domains',
				description: 'List custom domains for a service',
				routing: {
					request: {
						method: 'GET',
						url: '=/services/{{$parameter.serviceId}}/custom-domains',
					},
				},
			},
		],
		default: 'getAll',
	},
	...customDomainGetManyDescription,
	...customDomainCreateDescription,
	...customDomainDeleteDescription,
];

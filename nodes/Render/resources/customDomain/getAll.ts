import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForCustomDomainGetMany = {
	operation: ['getAll'],
	resource: ['customDomain'],
};

export const customDomainGetManyDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForCustomDomainGetMany },
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForCustomDomainGetMany,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
				type: 'query',
				property: 'limit',
				value: '100',
			},
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue: '={{ $response.body.length === 100 }}',
						request: {
							qs: {
								cursor: '={{ $response.body.length > 0 ? $response.body[$response.body.length - 1].cursor : undefined }}',
							},
						},
					},
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForCustomDomainGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
		description: 'Max number of results to return',
	},
];

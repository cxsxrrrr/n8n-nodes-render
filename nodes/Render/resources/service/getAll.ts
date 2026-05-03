import type { INodeProperties } from 'n8n-workflow';

const showOnlyForServiceGetMany = {
	operation: ['getAll'],
	resource: ['service'],
};

export const serviceGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForServiceGetMany,
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
				...showOnlyForServiceGetMany,
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
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		typeOptions: {
			multipleValueButtonText: 'Add Filter',
		},
		displayOptions: {
			show: showOnlyForServiceGetMany,
		},
		default: {},
		options: [
			{
				displayName: 'Created After',
				name: 'createdAfter',
				type: 'dateTime',
				default: '',
				description: 'Filter for services created after this time',
				routing: {
					request: {
						qs: {
							createdAfter: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Created Before',
				name: 'createdBefore',
				type: 'dateTime',
				default: '',
				description: 'Filter for services created before this time',
				routing: {
					request: {
						qs: {
							createdBefore: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter services by name',
				routing: {
					request: {
						qs: {
							name: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'options',
				options: [
					{ name: 'Frankfurt (EU)', value: 'frankfurt' },
					{ name: 'Ohio (US)', value: 'ohio' },
					{ name: 'Oregon (US)', value: 'oregon' },
					{ name: 'Singapore', value: 'singapore' },
					{ name: 'Virginia (US)', value: 'virginia' },
				],
				default: 'oregon',
				description: 'Filter by resource region',
				routing: {
					request: {
						qs: {
							region: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Suspended',
				name: 'suspended',
				type: 'options',
				options: [
					{ name: 'Suspended', value: 'suspended' },
					{ name: 'Not Suspended', value: 'not_suspended' },
				],
				default: 'not_suspended',
				description: 'Filter by suspension status',
				routing: {
					request: {
						qs: {
							suspended: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'Background Worker', value: 'background_worker' },
					{ name: 'Cron Job', value: 'cron_job' },
					{ name: 'Private Service', value: 'private_service' },
					{ name: 'Static Site', value: 'static_site' },
					{ name: 'Web Service', value: 'web_service' },
				],
				default: 'web_service',
				description: 'Filter by service type',
				routing: {
					request: {
						qs: {
							type: '={{$value}}',
						},
					},
				},
			},
		],
	},
];

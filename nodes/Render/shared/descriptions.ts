import type { INodeProperties } from 'n8n-workflow';

export const serviceIdSelect: INodeProperties = {
	displayName: 'Service',
	name: 'serviceId',
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	required: true,
	modes: [
		{
			displayName: 'From List',
			name: 'list',
			type: 'list',
			placeholder: 'Select a service...',
			typeOptions: {
				searchListMethod: 'getServices',
				searchable: true,
				searchFilterRequired: false,
			},
		},
		{
			displayName: 'By ID',
			name: 'id',
			type: 'string',
			placeholder: 'e.g. srv-xxxxxxxxxxxxx',
			validation: [
				{
					type: 'regex',
					properties: {
						regex: 'srv-[a-z0-9]+',
						errorMessage: 'Not a valid Render Service ID (should start with srv-)',
					},
				},
			],
		},
	],
	description: 'The Render service to operate on',
};

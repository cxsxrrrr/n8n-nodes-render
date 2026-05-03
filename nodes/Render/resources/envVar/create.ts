import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForEnvVarCreate = {
	operation: ['create'],
	resource: ['envVar'],
};

export const envVarCreateDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForEnvVarCreate },
	},
	{
		displayName: 'Environment Variables',
		name: 'envVars',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add Variable',
		},
		required: true,
		displayOptions: {
			show: showOnlyForEnvVarCreate,
		},
		default: { variable: [{ key: '', value: '' }] },
		options: [
			{
				displayName: 'Variable',
				name: 'variable',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: 'The environment variable key',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The environment variable value',
					},
				],
			},
		],
		description: 'The environment variables to set. Existing variables with the same key will be updated.',
		routing: {
			send: {
				type: 'body',
				value: '={{ $value.variable.map((v) => ({ key: v.key, value: v.value })) }}',
			},
		},
	},
];

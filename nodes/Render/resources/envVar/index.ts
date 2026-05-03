import type { INodeProperties } from 'n8n-workflow';
import { envVarGetManyDescription } from './getAll';
import { envVarCreateDescription } from './create';

const showOnlyForEnvVar = {
	resource: ['envVar'],
};

export const envVarDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEnvVar,
		},
		options: [
			{
				name: 'Create or Update',
				value: 'create',
				action: 'Create or update environment variables',
				description: 'Add or update environment variables for a service',
				routing: {
					request: {
						method: 'PUT',
						url: '=/services/{{$parameter.serviceId}}/env-vars',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many environment variables',
				description: 'List many environment variables for a service',
				routing: {
					request: {
						method: 'GET',
						url: '=/services/{{$parameter.serviceId}}/env-vars',
					},
				},
			},
		],
		default: 'getAll',
	},
	...envVarGetManyDescription,
	...envVarCreateDescription,
];

import type { INodeProperties } from 'n8n-workflow';
import { deployGetManyDescription } from './getAll';
import { deployGetDescription } from './get';
import { deployTriggerDescription } from './trigger';
import { deployCancelDescription } from './cancel';

const showOnlyForDeploy = {
	resource: ['deploy'],
};

export const deployDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForDeploy,
		},
		options: [
			{
				name: 'Cancel',
				value: 'cancel',
				action: 'Cancel a deploy',
				description: 'Cancel an in-progress deploy',
				routing: {
					request: {
						method: 'POST',
						url: '=/services/{{$parameter.serviceId}}/deploys/{{$parameter.deployId}}/cancel',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a deploy',
				description: 'Retrieve details of a specific deploy',
				routing: {
					request: {
						method: 'GET',
						url: '=/services/{{$parameter.serviceId}}/deploys/{{$parameter.deployId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many deploys',
				description: 'List deploys for a service',
				routing: {
					request: {
						method: 'GET',
						url: '=/services/{{$parameter.serviceId}}/deploys',
					},
				},
			},
			{
				name: 'Trigger',
				value: 'trigger',
				action: 'Trigger a deploy',
				description: 'Trigger a new deploy for a service',
				routing: {
					request: {
						method: 'POST',
						url: '=/services/{{$parameter.serviceId}}/deploys',
					},
				},
			},
		],
		default: 'getAll',
	},
	...deployGetManyDescription,
	...deployGetDescription,
	...deployTriggerDescription,
	...deployCancelDescription,
];

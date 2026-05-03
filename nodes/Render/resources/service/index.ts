import type { INodeProperties } from 'n8n-workflow';
import { serviceGetManyDescription } from './getAll';
import { serviceGetDescription } from './get';
import { serviceCreateDescription } from './create';
import { serviceUpdateDescription } from './update';
import { serviceDeleteDescription } from './delete';
import { serviceRestartDescription } from './restart';
import { serviceSuspendDescription } from './suspend';
import { serviceResumeDescription } from './resume';
import { serviceScaleDescription } from './scale';

const showOnlyForService = {
	resource: ['service'],
};

export const serviceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForService,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a service',
				description: 'Create a new Render service',
				routing: {
					request: {
						method: 'POST',
						url: '/services',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a service',
				description: 'Delete an existing service',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/services/{{$parameter.serviceId}}',
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: '={{ { "deleted": true, "serviceId": $parameter.serviceId } }}',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a service',
				description: 'Retrieve details of a single service',
				routing: {
					request: {
						method: 'GET',
						url: '=/services/{{$parameter.serviceId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many services',
				description: 'List services matching filters',
				routing: {
					request: {
						method: 'GET',
						url: '/services',
					},
				},
			},
			{
				name: 'Restart',
				value: 'restart',
				action: 'Restart a service',
				description: 'Restart a running service (not supported for cron jobs)',
				routing: {
					request: {
						method: 'POST',
						url: '=/services/{{$parameter.serviceId}}/restart',
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: '={{ { "restarted": true, "serviceId": $parameter.serviceId } }}',
								},
							},
						],
					},
				},
			},
			{
				name: 'Resume',
				value: 'resume',
				action: 'Resume a service',
				description: 'Resume a suspended service',
				routing: {
					request: {
						method: 'POST',
						url: '=/services/{{$parameter.serviceId}}/resume',
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: '={{ { "resumed": true, "serviceId": $parameter.serviceId } }}',
								},
							},
						],
					},
				},
			},
			{
				name: 'Scale',
				value: 'scale',
				action: 'Scale a service',
				description: 'Scale the number of instances for a service',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/services/{{$parameter.serviceId}}/scale',
					},
				},
			},
			{
				name: 'Suspend',
				value: 'suspend',
				action: 'Suspend a service',
				description: 'Suspend a running service to stop billing',
				routing: {
					request: {
						method: 'POST',
						url: '=/services/{{$parameter.serviceId}}/suspend',
					},
					output: {
						postReceive: [
							{
								type: 'set',
								properties: {
									value: '={{ { "suspended": true, "serviceId": $parameter.serviceId } }}',
								},
							},
						],
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a service',
				description: 'Update the configuration of an existing service',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/services/{{$parameter.serviceId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...serviceGetManyDescription,
	...serviceGetDescription,
	...serviceCreateDescription,
	...serviceUpdateDescription,
	...serviceDeleteDescription,
	...serviceRestartDescription,
	...serviceSuspendDescription,
	...serviceResumeDescription,
	...serviceScaleDescription,
];

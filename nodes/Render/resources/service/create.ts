import type { INodeProperties } from 'n8n-workflow';

const showOnlyForServiceCreate = {
	operation: ['create'],
	resource: ['service'],
};

export const serviceCreateDescription: INodeProperties[] = [
	{
		displayName: 'Service Type',
		name: 'serviceType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForServiceCreate,
		},
		options: [
			{ name: 'Background Worker', value: 'background_worker' },
			{ name: 'Cron Job', value: 'cron_job' },
			{ name: 'Private Service', value: 'private_service' },
			{ name: 'Static Site', value: 'static_site' },
			{ name: 'Web Service', value: 'web_service' },
		],
		default: 'web_service',
		description: 'The type of service to create',
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForServiceCreate,
		},
		default: '',
		description: 'The service name. Must be unique within the workspace.',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Owner ID (Workspace)',
		name: 'ownerId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForServiceCreate,
		},
		default: '',
		placeholder: 'e.g. tea-xxxxxxxxxxxxx',
		description: "The ID of the workspace. Find it in your workspace's Settings page.",
		routing: {
			send: {
				type: 'body',
				property: 'ownerId',
			},
		},
	},
	{
		displayName: 'Repository URL',
		name: 'repo',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForServiceCreate,
		},
		default: '',
		placeholder: 'e.g. https://github.com/user/repo',
		description: 'The repository URL. Do not include a branch in this URL.',
		routing: {
			send: {
				type: 'body',
				property: 'repo',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		displayOptions: {
			show: showOnlyForServiceCreate,
		},
		default: {},
		options: [
			{
				displayName: 'Auto Deploy',
				name: 'autoDeploy',
				type: 'options',
				options: [
					{ name: 'Yes', value: 'yes' },
					{ name: 'No', value: 'no' },
				],
				default: 'yes',
				description: 'Whether to auto-deploy on push',
				routing: {
					send: {
						type: 'body',
						property: 'autoDeploy',
					},
				},
			},
			{
				displayName: 'Branch',
				name: 'branch',
				type: 'string',
				default: '',
				description: 'The Git branch to deploy. Defaults to the repo default branch.',
				routing: {
					send: {
						type: 'body',
						property: 'branch',
					},
				},
			},
			{
				displayName: 'Environment ID',
				name: 'environmentId',
				type: 'string',
				default: '',
				placeholder: 'e.g. env-xxxxxxxxxxxxx',
				description: 'The ID of the environment the service belongs to',
				routing: {
					send: {
						type: 'body',
						property: 'environmentId',
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
				description: 'The region to deploy the service in',
				routing: {
					send: {
						type: 'body',
						property: 'region',
					},
				},
			},
		],
	},
];

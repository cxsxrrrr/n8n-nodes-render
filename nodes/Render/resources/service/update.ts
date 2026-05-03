import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForServiceUpdate = {
	operation: ['update'],
	resource: ['service'],
};

export const serviceUpdateDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForServiceUpdate },
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		displayOptions: {
			show: showOnlyForServiceUpdate,
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
				description: 'The Git branch to deploy',
				routing: {
					send: {
						type: 'body',
						property: 'branch',
					},
				},
			},
			{
				displayName: 'Build Command',
				name: 'buildCommand',
				type: 'string',
				default: '',
				description: 'The build command for the service',
				routing: {
					send: {
						type: 'body',
						property: 'buildCommand',
					},
				},
			},
			{
				displayName: 'Image URL',
				name: 'image',
				type: 'string',
				default: '',
				placeholder: 'e.g. docker.io/library/nginx:latest',
				description: 'The image path to deploy for image-backed services',
				routing: {
					send: {
						type: 'body',
						property: 'image.imagePath',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The new name for the service',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Start Command',
				name: 'startCommand',
				type: 'string',
				default: '',
				description: 'The start command for the service',
				routing: {
					send: {
						type: 'body',
						property: 'startCommand',
					},
				},
			},
		],
	},
];

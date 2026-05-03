import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForDeployTrigger = {
	operation: ['trigger'],
	resource: ['deploy'],
};

export const deployTriggerDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForDeployTrigger },
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		displayOptions: {
			show: showOnlyForDeployTrigger,
		},
		default: {},
		options: [
			{
				displayName: 'Clear Cache',
				name: 'clearCache',
				type: 'options',
				options: [
					{ name: 'Clear', value: 'clear' },
					{ name: 'Do Not Clear', value: 'do_not_clear' },
				],
				default: 'do_not_clear',
				description: 'Whether to clear the build cache before deploying',
				routing: {
					send: {
						type: 'body',
						property: 'clearCache',
					},
				},
			},
			{
				displayName: 'Commit ID',
				name: 'commitId',
				type: 'string',
				default: '',
				placeholder: 'e.g. abc123def456',
				description: 'The SHA of a specific Git commit to deploy. Defaults to the latest commit.',
				routing: {
					send: {
						type: 'body',
						property: 'commitId',
					},
				},
			},
			{
				displayName: 'Image URL',
				name: 'imageUrl',
				type: 'string',
				default: '',
				placeholder: 'e.g. docker.io/library/nginx:latest',
				description: 'The URL of the image to deploy for an image-backed service',
				routing: {
					send: {
						type: 'body',
						property: 'imageUrl',
					},
				},
			},
		],
	},
];

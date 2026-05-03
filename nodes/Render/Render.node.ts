import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { serviceDescription } from './resources/service';
import { deployDescription } from './resources/deploy';
import { envVarDescription } from './resources/envVar';
import { customDomainDescription } from './resources/customDomain';
import { getServices } from './listSearch/getServices';

export class Render implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Render',
		name: 'render',
		icon: 'file:../../icons/render.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Manage Render services, deploys, environment variables, and custom domains',
		defaults: {
			name: 'Render',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'renderApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.render.com/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Custom Domain',
						value: 'customDomain',
					},
					{
						name: 'Deploy',
						value: 'deploy',
					},
					{
						name: 'Environment Variable',
						value: 'envVar',
					},
					{
						name: 'Service',
						value: 'service',
					},
				],
				default: 'service',
			},
			...serviceDescription,
			...deployDescription,
			...envVarDescription,
			...customDomainDescription,
		],
	};

	methods = {
		listSearch: {
			getServices,
		},
	};
}

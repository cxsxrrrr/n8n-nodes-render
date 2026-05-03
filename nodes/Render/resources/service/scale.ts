import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForServiceScale = {
	operation: ['scale'],
	resource: ['service'],
};

export const serviceScaleDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForServiceScale },
	},
	{
		displayName: 'Number of Instances',
		name: 'numInstances',
		type: 'number',
		required: true,
		displayOptions: {
			show: showOnlyForServiceScale,
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 1,
		description: 'The number of instances to scale the service to. Ignored if autoscaling is enabled.',
		routing: {
			send: {
				type: 'body',
				property: 'numInstances',
			},
		},
	},
];

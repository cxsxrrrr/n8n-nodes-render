import type { INodeProperties } from 'n8n-workflow';
import { serviceIdSelect } from '../../shared/descriptions';

const showOnlyForServiceGet = {
	operation: ['get'],
	resource: ['service'],
};

export const serviceGetDescription: INodeProperties[] = [
	{
		...serviceIdSelect,
		displayOptions: { show: showOnlyForServiceGet },
	},
];

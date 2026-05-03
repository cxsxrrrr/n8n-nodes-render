import type {
	ILoadOptionsFunctions,
	INodeListSearchItems,
	INodeListSearchResult,
} from 'n8n-workflow';
import { renderApiRequest } from '../shared/transport';

type RenderServiceItem = {
	service: {
		id: string;
		name: string;
		type: string;
		serviceDetails?: {
			url?: string;
		};
	};
	cursor: string;
};

export async function getServices(
	this: ILoadOptionsFunctions,
	filter?: string,
	paginationToken?: string,
): Promise<INodeListSearchResult> {
	const limit = 100;
	const qs: Record<string, string | number> = { limit };

	if (paginationToken) {
		qs.cursor = paginationToken;
	}
	if (filter) {
		qs.name = filter;
	}

	let responseData: RenderServiceItem[] = [];
	try {
		responseData = await renderApiRequest.call(this, 'GET', '/services', qs);
	} catch {
		// Will fail if no services exist or credentials invalid
	}

	const results: INodeListSearchItems[] = responseData.map((item: RenderServiceItem) => ({
		name: `${item.service.name} (${item.service.type})`,
		value: item.service.id,
		url: item.service.serviceDetails?.url ?? `https://dashboard.render.com/services/${item.service.id}`,
	}));

	const nextCursor = responseData.length === limit
		? responseData[responseData.length - 1].cursor
		: undefined;

	return { results, paginationToken: nextCursor };
}

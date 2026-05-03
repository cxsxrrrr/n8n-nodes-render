import type {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	IDataObject,
} from 'n8n-workflow';

export async function renderApiRequest(
	this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	qs: IDataObject = {},
	body: IDataObject | undefined = undefined,
) {
	const options: IHttpRequestOptions = {
		method,
		qs,
		body,
		url: `https://api.render.com/v1${resource}`,
		json: true,
	};

	return this.helpers.httpRequestWithAuthentication.call(this, 'renderApi', options);
}

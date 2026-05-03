import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class RenderApi implements ICredentialType {
	name = 'renderApi';

	displayName = 'Render API';

	icon: Icon = 'file:../icons/render.svg';

	documentationUrl = 'https://render.com/docs/api#1-create-an-api-key';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your Render API key. Create one from your Account Settings in the Render Dashboard.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.render.com/v1',
			url: '/services',
			qs: { limit: '1' },
			method: 'GET',
		},
	};
}

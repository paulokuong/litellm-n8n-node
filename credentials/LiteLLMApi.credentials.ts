import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class LiteLLMApi implements ICredentialType {
	name = 'liteLLMApi';
	displayName = 'LiteLLM API';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseURL',
			type: 'string',
			default: 'http://localhost:4000',
			placeholder: 'http://localhost:4000',
			description: 'The base URL of your self-hosted LiteLLM instance',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
}

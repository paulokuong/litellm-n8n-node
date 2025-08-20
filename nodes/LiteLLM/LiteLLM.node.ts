import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { litellmFields, litellmOperations } from './LiteLLMDescription';

export class LiteLLM implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'LiteLLM',
		name: 'liteLlm',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with LiteLLM API',
		defaults: {
			name: 'LiteLLM',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'liteLLMApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseURL}}',
			headers: {
				Authorization: 'Bearer {{$credentials.apiKey}}',
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
						name: 'Completion',
						value: 'completion',
					},
				],
				default: 'completion',
			},

			...litellmOperations,
			...litellmFields,
		],
	};
}

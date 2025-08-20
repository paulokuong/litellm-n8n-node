import { INodeProperties } from 'n8n-workflow';

export const litellmOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['completion'],
			},
		},
		options: [
			{
				name: 'Acompletion',
				value: 'acompletion',
				description: 'Perform a completion request',
				action: 'Perform a completion request',
				routing: {
					request: {
						method: 'POST',
						url: '/completion',
					},
				},
			},
		],
		default: 'acompletion',
	},
];

const acompletionOperation: INodeProperties[] = [
	{
		displayName: 'Model',
		name: 'model',
		type: 'string',
		default: 'gemini/gemini-1.5-pro',
		required: true,
		description: 'The model to use for the completion',
		displayOptions: {
			show: {
				resource: ['completion'],
				operation: ['acompletion'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'model',
			},
		},
	},
	{
		displayName: 'Messages',
		name: 'messages',
		type: 'json',
		default: '[]',
		required: true,
		description: 'The messages to send to the model',
		displayOptions: {
			show: {
				resource: ['completion'],
				operation: ['acompletion'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'messages',
			},
		},
	},
	{
		displayName: 'Tools',
		name: 'tools',
		type: 'json',
		default: '[]',
		required: false,
		description: 'The tools to use for the completion',
		displayOptions: {
			show: {
				resource: ['completion'],
				operation: ['acompletion'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'tools',
			},
		},
	},
];

export const litellmFields: INodeProperties[] = [
	...acompletionOperation,
];

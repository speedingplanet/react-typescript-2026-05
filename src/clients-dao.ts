import type { Client, DraftClient } from './index-types';

const baseUrl = 'http://localhost:8001/clients';

async function fetchAllClients() {}

async function addClient(client: DraftClient): Promise<Client> {
	try {
		let response = await fetch(baseUrl, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'post',
			body: JSON.stringify(client),
		});

		if (response.ok) {
			return await response.json();
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
}

const dao = {
	fetchAllClients,
	addClient,
};

export default dao;

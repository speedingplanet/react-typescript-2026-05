import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import clientsDAO from '../clients-dao';
import type { DraftClient } from '../index-types';
import { useMutation } from '@tanstack/react-query';

export const Route = createFileRoute('/clients/add')({
	component: ClientAdd,
});

function ClientAdd() {
	const [clientName, setClientName] = useState('');
	const mutation = useMutation({
		mutationFn: clientsDAO.addClient,
	});

	function addClient() {
		let client: DraftClient = { name: clientName };
		mutation.mutate(client);
	}

	return (
		<>
			<form>
				<div className="mb-1">
					<label
						htmlFor="client-name"
						className="form-label"
					>
						Client name:
					</label>
					<input
						type="text"
						name="clientName"
						id="client-name"
						className="form-control"
						value={clientName}
						onChange={(e) => setClientName(e.target.value)}
					/>
				</div>
				<div>
					<button
						type="button"
						className="btn btn-primary"
						onClick={addClient}
					>
						Add client
					</button>
				</div>
			</form>
			<div className="dao-response">
				{mutation.isPending ? (
					'Adding client....'
				) : (
					<>
						{mutation.isError ? <div>Something went wrong</div> : null}
						{mutation.isSuccess ? (
							<div>
								Added client {mutation.data.name} with id {mutation.data.id}
							</div>
						) : null}
					</>
				)}
			</div>
		</>
	);
}

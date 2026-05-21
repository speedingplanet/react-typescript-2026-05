import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import dao from '../clients-dao';

export const Route = createFileRoute('/clients/list')({
	component: ClientsList,
});

function ClientsList() {
	const { isPending, isError, isSuccess, data } = useQuery({
		queryKey: ['clients'],
		queryFn: dao.fetchAllClients,
	});

	return (
		<div>
			{isPending ? <p>Loading clients....</p> : null}
			{isError ? <p>Oh no, an error</p> : null}
			{isSuccess ? (
				<ul>
					{data?.map((client) => (
						<li key={client.id}>{client.name}</li>
					))}
				</ul>
			) : null}
		</div>
	);
}

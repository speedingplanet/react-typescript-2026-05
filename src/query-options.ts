import { queryOptions } from '@tanstack/react-query';
import dao from './clients-dao';

export const clientsQueryOptions = queryOptions({
	queryKey: ['clients'],
	queryFn: dao.fetchAllClients,
});

import type { SortConfig } from '../index-types';

interface Props<T> {
	column: keyof T;
	sortConfig: SortConfig<T>;
}

export default function SortIndicator<T>({ column, sortConfig }: Props<T>) {
	if (column !== sortConfig.sortField) return;
	return <span>{sortConfig.sortDirection === 'asc' ? '⬆️' : '⬇️'}</span>;
}

import { useState } from 'react';
import { orderBy } from 'lodash-es';
import type { SortConfig, SortDirection } from '../index-types';
import DataTableHead from './DataTableHead';
import DataTableBody from './DataTableBody';

export interface DataTableProps<T> {
	initialSortConfig: SortConfig<T>;
	columns: Array<keyof T>;
	records: Array<T>;
	keyfield: keyof T;
}

export default function DataTable<T>({
	initialSortConfig,
	columns,
	records,
	keyfield,
}: DataTableProps<T>) {
	let [sortConfig, setSortConfig] = useState(initialSortConfig);

	function handleColumnClick(column: keyof T) {
		console.log(`Clicked on... ${column as string}`);
		sortRecords(column);
	}

	function sortRecords(sortField: keyof T) {
		let sortDirection: SortDirection = 'asc';
		if (sortConfig.sortField === sortField && sortConfig.sortDirection === 'asc') {
			sortDirection = 'desc';
		}

		let nextSortConfig: SortConfig<T> = {
			sortField,
			sortDirection,
		};

		setSortConfig(nextSortConfig);
	}

	let sortedRecords = orderBy(records, sortConfig.sortField, sortConfig.sortDirection);

	return (
		<table className="table table-striped">
			<DataTableHead
				sortConfig={sortConfig}
				columns={columns}
				onColumnClick={handleColumnClick}
			/>
			<DataTableBody
				columns={columns}
				records={sortedRecords}
				keyfield={keyfield}
			/>
		</table>
	);
}

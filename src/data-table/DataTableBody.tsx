import type { ReactNode } from 'react';

interface DataTableBodyProps<T> {
	columns: Array<keyof T>;
	records: Array<T>;
	keyfield: keyof T;
}

export default function DataTableBody<T>({ columns, records, keyfield }: DataTableBodyProps<T>) {
	return (
		<tbody>
			{records.map((record) => (
				<tr key={record[keyfield] as string}>
					{columns.map((column) => (
						<td key={column as string}>{record[column] as ReactNode}</td>
					))}
				</tr>
			))}
		</tbody>
	);
}

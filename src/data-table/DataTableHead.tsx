import type { SortConfig } from '../index-types';
import SortIndicator from './SortIndicator';

interface DataTableHeadProps<T> {
	columns: Array<keyof T>;
	sortConfig: SortConfig<T>;
	onColumnClick: (column: keyof T) => void;
}

export default function DataTableHead<T>({
	columns,
	onColumnClick,
	sortConfig,
}: DataTableHeadProps<T>) {
	return (
		<thead>
			<tr>
				{columns.map((column) => (
					<th
						key={column as string}
						onClick={() => onColumnClick(column)}
					>
						{column as string}
						&nbsp;
						<SortIndicator
							column={column}
							sortConfig={sortConfig}
						></SortIndicator>
					</th>
				))}
			</tr>
		</thead>
	);
}

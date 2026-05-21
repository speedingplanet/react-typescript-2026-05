import { createFileRoute } from '@tanstack/react-router';
import type { SortConfig, SortDirection, Vehicle } from '../index-types';
import { useState } from 'react';
import { orderBy } from 'lodash-es';

export const Route = createFileRoute('/vehicles/list')({
	component: VehicleList,
});

let initialSortConfig: SortConfig<Vehicle> = {
	sortField: '',
	sortDirection: 'asc',
};

function VehicleList() {
	let [sortConfig, setSortConfig] = useState(initialSortConfig);
	let vehicles: Vehicle[] = [];
	let columns: Array<keyof Vehicle> = [
		'make',
		'model',
		'year',
		'activeStatus',
		'type',
		'vin',
		'intakeDate',
	];

	function handleColumnClick(column: keyof Vehicle) {
		console.log(`Clicked on... ${column}`);
		sortVehicles(column);
	}

	function sortVehicles(sortField: keyof Vehicle) {
		let sortDirection: SortDirection = 'asc';
		if (sortConfig.sortField === sortField && sortConfig.sortDirection === 'asc') {
			sortDirection = 'desc';
		}

		let nextSortConfig: SortConfig<Vehicle> = {
			sortField,
			sortDirection,
		};

		setSortConfig(nextSortConfig);
	}

	function getSortIndicator(field: string, sortConfig: SortConfig<Vehicle>) {
		if (field !== sortConfig.sortField) return;

		return sortConfig.sortDirection === 'asc' ? '⬆️' : '⬇️';
	}

	let sortedVehicles = orderBy(vehicles, sortConfig.sortField, sortConfig.sortDirection);

	return (
		<table className="table table-striped">
			<thead>
				<tr>
					{columns.map((column) => (
						<th
							key={column}
							onClick={() => handleColumnClick(column)}
						>
							{column}
							&nbsp;
							<span>{getSortIndicator(column, sortConfig)}</span>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{sortedVehicles.map((vehicle) => (
					<tr key={vehicle.id}>
						{columns.map((column) => (
							<td key={column}>{vehicle[column] as string}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

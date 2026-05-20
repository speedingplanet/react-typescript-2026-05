//

/*
- Where do we get a list of Vehicles? ../data/vehicles.json

- What are we going to render the list to?
	Could be a Bootstrap table (see the .table class)
	or a Bootstrap grid
	or custom CSS

- What fields are we going to render? 
	- Make
	- Model
	- Year
	- activeStatus
	- type
	- vin
	- intakeDate
*/

import { useState } from 'react';
import { orderBy } from 'lodash-es';
import { vehicles } from './data/vehicles.json' with { type: 'json' };
import type { Vehicle } from './index-types';

export type SortDirection = 'asc' | 'desc';

export interface SortConfig<T> {
	sortField: keyof T | '';
	sortDirection: SortDirection;
}

let initialSortConfig: SortConfig<Vehicle> = {
	sortField: '',
	sortDirection: 'asc',
};

export default function VehicleList() {
	let [sortConfig, setSortConfig] = useState(initialSortConfig);

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
							<td key={column}>{vehicle[column as keyof Vehicle]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

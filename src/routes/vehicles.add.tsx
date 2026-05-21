import { createFileRoute } from '@tanstack/react-router';
import makesModels from '../data/makes-and-models.json' with { type: 'json' };
import { useState } from 'react';

let makesModelsArray = Array.from(makesModels);

export const Route = createFileRoute('/vehicles/add')({
	component: AddVehicle,
});

function AddVehicle() {
	const [models, setModels] = useState<string[]>([]);

	let makes = makesModelsArray.map((mm) => mm.make);

	function handleChooseMake(event: React.ChangeEvent<HTMLSelectElement>) {
		let make = event.target.value;
		let foundConfig = makesModelsArray.find((mm) => mm.make === make);
		if (foundConfig !== undefined) setModels(foundConfig.models);
	}

	return (
		<form>
			<div className="col">
				<h3>Add a Vehicle</h3>
			</div>
			<div className="mb-1">
				<label
					htmlFor="vin"
					className="form-label"
				>
					VIN:
				</label>
				<input
					type="text"
					name="vin"
					id="vin"
					className="form-control"
				/>
			</div>
			<div>
				<label
					htmlFor="make"
					className="form-label"
				>
					Make:
				</label>
				<select
					name="make"
					id="make"
					className="form-select"
					onChange={handleChooseMake}
				>
					<option value="">Please choose a make</option>
					{makes.map((make) => (
						<option
							key={make}
							value={make}
						>
							{make}
						</option>
					))}
				</select>
			</div>
			<div>
				<label
					htmlFor="model"
					className="form-label"
				>
					Model:
				</label>
				<select
					name="model"
					id="model"
					className="form-select"
				>
					<option value="">Please choose a model</option>
					{models.length > 0
						? models.map((model) => (
								<option
									key={model}
									value={model}
								>
									{model}
								</option>
							))
						: null}
				</select>
			</div>
			<div className="mb-1">
				<label
					htmlFor="year"
					className="form-label"
				>
					Year:
				</label>
				<input
					type="number"
					name="year"
					id="year"
					className="form-control"
				/>
			</div>
			<div>
				<label className="form-label">Equipment:&nbsp;</label>
				<div className="form-check form-check-inline">
					<input
						type="radio"
						name="type"
						id="type-car"
						className="form-check-input"
					/>
					<label
						htmlFor="type-car"
						className="form-check-label"
					>
						Car
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input
						type="radio"
						name="type"
						id="type-truck"
						className="form-check-input"
					/>
					<label
						htmlFor="type-truck"
						className="form-check-label"
					>
						Truck
					</label>
				</div>
				<div className="form-check form-check-inline">
					<input
						type="radio"
						name="type"
						id="type-equipment"
						className="form-check-input"
					/>
					<label
						htmlFor="type-equipment"
						className="form-check-label"
					>
						Equipment
					</label>
				</div>
			</div>
			<div>
				<label
					htmlFor="intake-date"
					className="form-label"
				>
					Intake date:
				</label>
				<input
					type="date"
					name="intakeDate"
					id="intake-date"
					className="form-control"
				/>
			</div>
			<div className="mb-1">
				<label
					htmlFor="odometer"
					className="form-label"
				>
					Odometer:
				</label>
				<input
					type="number"
					name="odometer"
					id="odometer"
					className="form-control"
				/>
			</div>
			<div>
				<div className="form-check form-check-inline">
					<input
						type="checkbox"
						className="form-check-input"
						id="operable"
						defaultChecked
					/>
					<label
						htmlFor="operable"
						className="form-check-label"
					>
						Operable
					</label>
				</div>
				<div className="form-check">
					<input
						type="checkbox"
						name="activeStatus"
						id="active-status"
						className="form-check-input"
						defaultChecked
					/>
					<label
						htmlFor="active-status"
						className="form-check-label"
					>
						Active
					</label>
				</div>
			</div>
			<div className="mt-2">
				<button
					type="submit"
					className="btn btn-primary"
				>
					Add Vehice
				</button>
			</div>
		</form>
	);
}

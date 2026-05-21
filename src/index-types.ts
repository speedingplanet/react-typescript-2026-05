export type VehicleType = 'car' | 'truck' | 'equipment';

export interface Vehicle {
	id: number;
	vin: string;
	make: string; // Drop-down
	model: string; // Linked drop-down
	year: number; // Number field?
	type: VehicleType; // Drop down or radio buttons?
	intakeDate: Date | string; // Date picker
	odometer: number; // number field
	operable: boolean; // checkbox
	activeStatus: boolean; // checkbox
}

export interface Client {
	id: number;
	name: string;
	vehicles?: Vehicle[];
}

export type DraftClient = Omit<Client, 'id'>;

export type DraftVehicle = Omit<Vehicle, 'id'>;

export type SortDirection = 'asc' | 'desc';

export interface SortConfig<T> {
	sortField: keyof T | '';
	sortDirection: SortDirection;
}

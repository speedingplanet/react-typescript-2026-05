import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/vehicles')({
	component: VehiclesContainer,
});

function VehiclesContainer() {
	return (
		<>
			<div className="row">
				<div className="col">
					<h2>Vehicles</h2>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<ul className="list-inline">
						<li className="list-inline-item">
							<Link to="/vehicles/search">Search</Link>
						</li>
						<li className="list-inline-item">
							<Link to="/vehicles/list">Browse</Link>
						</li>
						<li className="list-inline-item">
							<Link to="/vehicles/add">Add</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Outlet />
				</div>
			</div>
		</>
	);
}

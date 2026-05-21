import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/clients')({
	component: ClientContainer,
});

function ClientContainer() {
	return (
		<>
			{' '}
			<div className="row">
				<div className="col">
					<h2>Clients</h2>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<ul className="list-inline">
						<li className="list-inline-item">
							<Link to="/clients/search">Search</Link>
						</li>
						<li className="list-inline-item">
							<Link to="/clients/list">Browse</Link>
						</li>
						<li className="list-inline-item">
							<Link to="/clients/add">Add</Link>
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

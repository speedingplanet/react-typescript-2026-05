import { Link, Outlet } from '@tanstack/react-router';
import './App.css';

function App() {
	return (
		<>
			<main className="container-fluid">
				<header className="row">
					<div className="col">
						<h1>Vehicles and Clients</h1>
						<hr />
					</div>
				</header>
				<div className="row">
					<nav className="col-2">
						<ul className="list-unstyled">
							<li>
								<Link to="/hello-world">Hello world</Link>
							</li>
							<li>
								<Link to="/clients">Clients</Link>
							</li>
							<li>
								<Link to="/vehicles">Vehicles</Link>
							</li>
						</ul>
					</nav>
					<div className="col">
						<Outlet />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;

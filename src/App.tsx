import './App.css';
import VehicleList from './VehicleListTable';

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
					<div className="col">
						<VehicleList />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;

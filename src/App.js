import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import Employee from "./Pages/Employee";
import Shipment from "./Pages/Shipment";

function App() {
	return (
		<Switch>
			<Route exact path='/'>
				<Home></Home>
			</Route>
			<Route exact path='/orders'>
				<Orders></Orders>
			</Route>
			<Route exact path='/products'>
				<Products></Products>
			</Route>
			<Route path='/settings'>
				<Settings></Settings>
			</Route>
			<Route path='/employee'>
				<Employee></Employee>
			</Route>
			<Route path='/shipment'>
				<Shipment></Shipment>
			</Route>
		</Switch>
	);
}

export default App;

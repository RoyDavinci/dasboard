import React from "react";
import logo from "../design/Untitled design.png";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<aside>
			<header>
				<img src={logo} alt='' />
				<p>Tumbas</p>
			</header>
			<div>
				<h3>Menu</h3>
				<Link to='/' className='link'>
					{" "}
					<i class='fas fa-bars    '></i>
					<span>Overview</span>
				</Link>

				<Link to='/orders' className='link'>
					<i className='fas fa-window-restore'></i> <span>Orders</span>
				</Link>

				<Link to='/products' className='link'>
					<i className='fas fa-store'></i> <span>Products</span>
				</Link>

				<Link to='/settings' className='link'>
					<i className='fas fa-cog'></i> <span>Settings</span>
				</Link>
			</div>
			<div>
				<h3>Business</h3>
				<Link to='/shipment' className='link'>
					<i className='fas fa-location-arrow'></i> Shipment
				</Link>

				<Link to='/employee' className='link'>
					<i className='fas fa-users'></i>
					Employee
				</Link>
			</div>
			<footer>
				<h4>&copy; Tumbas 2020</h4>
				<p>
					Platform for solution of all types <br />
					of business to be advanced
				</p>
			</footer>
		</aside>
	);
};

export default Menu;

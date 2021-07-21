import React, { useState } from "react";
import redmi from "../images/pexels-nur-alamin-5973137.jpg";
import headset from "../images/pexels-kinkate-205926.jpg";
import Chart from "./Chart";

const Main = () => {
	const [text, setText] = useState("");

	return (
		<main className='main-content container'>
			<div className='input-container'>
				<i className='fas fa-search'></i>
				<input
					type='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Search For Product'
				/>
			</div>
			<div className='overview'>
				<h3>Overview</h3>
				<div className='overview-detail'>
					<div className='sales-detail'>
						<div className='percent'>
							<i className='fas fa-shopping-bag'></i>
							<p>+24%</p>
						</div>
						<h4>$27,340.00</h4>
						<p className='para'>Total Sales</p>
					</div>
					<div className='expense-detail'>
						<div className='percent'>
							<i className='fas fa-hand-holding-usd'></i>
							<p>-32%</p>
						</div>
						<h4>$27,340.00</h4>
						<p className='para'>Total Expenses</p>
					</div>
					<div className='visitor-detail'>
						<div className='percent'>
							<i className='fas fa-users'></i>
							<p>+48%</p>
						</div>
						<h4>$18,260.00</h4>
						<p className='para'>Total Visitors</p>
					</div>
					<div className='order-item'>
						<div className='percent'>
							<i className='fas fa-shopping-cart'></i>
							<p>-12%</p>
						</div>
						<h4>$11,340.00</h4>
						<p className='para'>Total Orders</p>
					</div>
				</div>
			</div>
			<div className='graph'>
				<div className='graph-detail'>
					<div className='graph-title'>
						<p>Income</p>
						<span>Expense</span>
					</div>
					<select name='' id=''>
						<option value='2021' selected>
							2021
						</option>
					</select>
				</div>
				<Chart></Chart>
			</div>
			<div className='product-detail'>
				<h3>Popular Products</h3>
				<table>
					<thead>
						<tr className='table-header-row'>
							<th>Photos</th>
							<th>Name</th>
							<th>Date</th>
							<th>Brand</th>
							<th>Category</th>
							<th>Price</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<img src={headset} alt='' />
							</td>
							<td>
								<p className='strong'>Headset</p>
								<p className='code'>#09876564789</p>
							</td>
							<td className='strong'>Aug 12, 2020</td>
							<td className='strong'>Fashion</td>
							<td className='strong'>Gen-Z</td>
							<td className='item-price'>$99.99</td>
							<td>
								<p className='strong'>Available</p>
								<p className='code'>18k Viewers</p>
							</td>
						</tr>
						<tr>
							<td>
								<img src={redmi} alt='' />
							</td>
							<td>
								<p className='strong'>Smartphone</p>
								<p className='code'>#09876564789</p>
							</td>
							<td className='strong'>Aug 12, 2020</td>
							<td className='strong'>Gadget</td>
							<td className='strong'>Milo</td>
							<td className='item-price'>$99.99</td>
							<td>
								<p className='strong'>Available</p>
								<p className='code'>18k Viewers</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default Main;

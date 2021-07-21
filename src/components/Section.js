import React from "react";
import userImg from "../images/pexels-tima-miroshnichenko-7567434.jpg";
import redmi from "../images/pexels-nur-alamin-5973137.jpg";
import nikon from "../images/pexels-vitaly-vlasov-1606704.jpg";
import headset from "../images/pexels-kinkate-205926.jpg";

const Section = () => {
	return (
		<section className='section-center'>
			<nav className='nav' id='nav'>
				<div className='bell'>
					<i className='fas fa-bell'></i>
				</div>
				<div className='edit'>
					<i className='fas fa-pen'></i>
				</div>
			</nav>
			<div className='client-profile'>
				<div className='user-img'>
					<img src={userImg} alt='' />
				</div>
				<div className='name'>
					<p>Konter Pulsa</p>
				</div>
				<div className='user-details'>
					<div className='products'>
						<i className='fas fa-shopping-bag'></i>
						<p>
							<strong>218</strong>
							<br />
							Products
						</p>
					</div>
					<div className='followers'>
						<i className='fas fa-users'></i>
						<p>
							<strong>2258</strong> <br /> Followers
						</p>
					</div>
				</div>
				<div className='reputation'>
					<h4>Reputation</h4>
					<div className='rep-details'>
						<i className='fas fa-toolbox'></i>
						<div className='progress'>
							<label htmlFor='file'>
								<p>Star Seller</p> <p>85%</p>
							</label>
							<progress id='file' value='85' max='100'>
								{" "}
								85%{" "}
							</progress>
						</div>
					</div>
				</div>
			</div>
			<article className='orders'>
				<header className='article-header'>
					<h4>Recent Orders</h4>
					<p>
						<a href='/'>See All</a>
					</p>
				</header>
				<div className='order-details'>
					<div className='order-body'>
						<div className='order-detail'>
							<img src={redmi} alt='' />
							<div className='product-item'>
								<h5>Redmi 4x</h5>
								<p>2 minutes ago</p>
							</div>
						</div>
						<div className='price'>
							<h4>+$80.00</h4>
						</div>
					</div>
					<div className='order-body'>
						<div className='order-detail'>
							<img src={headset} alt='' />
							<div className='product-item'>
								<h5>Acer E1- 421</h5>
								<p>2 minutes ago</p>
							</div>
						</div>
						<div className='price'>
							<h4>+$80.00</h4>
						</div>
					</div>
					<div className='order-body'>
						<div className='order-detail'>
							<img src={nikon} alt='' />
							<div className='product-item'>
								<h5>Nikon D3500</h5>
								<p>2 minutes ago</p>
							</div>
						</div>
						<div className='price'>
							<h4>+$80.00</h4>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Section;

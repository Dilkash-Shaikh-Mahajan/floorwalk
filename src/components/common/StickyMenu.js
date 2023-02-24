import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from './styles/stickyMenu.js';
import { useSelector } from 'react-redux';
import Navbar from '../../SubMenu/Navbar.js';

function StickyMenu() {
	const { user, refreshToken } = useSelector((state) => state.auth);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const stickyMenu = document.querySelector('.sticky-menu');

			if (window.scrollY > 160) {
				stickyMenu?.classList?.add('sticky');
			} else {
				stickyMenu?.classList?.remove('sticky');
			}
		});
	});

	return (
		<Styles>
			{/* Sticky Menu */}
			<section className='sticky-menu'>
				<Container>
					<Row>
						<Col md='3'>
							<div className='logo'>
								<Link
									to={
										process.env
											.PUBLIC_URL +
										'/'
									}>
									<img
										src={
											process.env
												.PUBLIC_URL +
											'/assets/images/logo.png'
										}
										alt=''
									/>
								</Link>
							</div>
						</Col>
						<Col md='9'>
							<div className='menu-box d-flex justify-content-between'>
								<ul className='nav menu-nav'>
									<li className='nav-item'>
										<Link
											className='nav-link'
											to={
												process
													.env
													.PUBLIC_URL +
												'/'
											}>
											Home
										</Link>
									</li>
									<li className='nav-item dropdown active'>
										<Link
											className='nav-link'
											to={
												process
													.env
													.PUBLIC_URL +
												'/course-grid'
											}>
											Products
										</Link>
										<ul className='dropdown home-megamenu'>
											{/* <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link></li> */}
											<Navbar />
										</ul>
									</li>
									<li className='nav-item'>
										<Link
											className='nav-link'
											to={
												process
													.env
													.PUBLIC_URL +
												'/contact'
											}>
											Contact Us
										</Link>
									</li>
								</ul>
								{refreshToken ? (
									<div className='user-exist-btn'>
										<Link
											to={
												process
													.env
													.PUBLIC_URL +
												'/user_dashboard'
											}>
											Hi{' '}
											{
												user.first_name
											}
										</Link>
									</div>
								) : (
									<div className='apply-btn'>
										<Link
											to={
												process
													.env
													.PUBLIC_URL +
												'/login'
											}>
											<i className='las la-sign-in-alt'></i>
											Login
										</Link>
									</div>
								)}
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Styles>
	);
}

export default StickyMenu;

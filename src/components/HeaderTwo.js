import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from './styles/headerTwo.js';
import Navbar from '../SubMenu/Navbar';
import { Vertical } from '../verticalstepper/Vertical.tsx';
import { useSelector } from 'react-redux';

const HeaderTwo = () => {
	const { user, refreshToken } = useSelector((state) => state.auth);
	return (
		<Styles>
			{/* Topbar 2 */}
			<section className='top-bar2'>
				<Container>
					<Row>
						<Col lg='7' md='9'>
							<div className='bar-left'>
								<ul className='list-unstyled list-inline'>
									<li className='list-inline-item'>
										<i className='las la-phone'></i>
										+91-783-606-6777
									</li>
									<li className='list-inline-item'>
										<i className='las la-envelope'></i>
										contactus@floorwalk.in
									</li>
									{/*<li className="list-inline-item"><i className="las la-map-marker"></i>795 South Park Avenue, CA
                                        </li>*/}
								</ul>
							</div>
						</Col>
						<Col lg='5' md='3'>
							<div className='bar-right d-flex justify-content-end'>
								<ul className='list-unstyled list-inline bar-social'>
									<li className='list-inline-item'>
										<a href='https://www.facebook.com/FloorWalk'>
											<i className='fab fa-facebook-f'></i>
										</a>
									</li>
									<li className='list-inline-item'>
										<a href='https://twitter.com/FloorWalkIndia'>
											<i className='fab fa-twitter'></i>
										</a>
									</li>
									<li className='list-inline-item'>
										<a href='https://www.linkedin.com/company/floorwalk'>
											<i className='fab fa-linkedin-in'></i>
										</a>
									</li>
									<li className='list-inline-item'>
										<a href='https://www.instagram.com/floorwalk/'>
											<i className='fab fa-instagram'></i>
										</a>
									</li>
								</ul>

								{/*<ul className="list-unstyled list-inline sidebar-button">
                                        <li className="list-inline-item nav-item side-box">
                                            <Sidebar />
                                        </li>
                                    </ul>*/}
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Logo Area 2 */}
			<section className='logo-area2'>
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
									<li className='nav-item dropdown active'>
										<Link
											className='nav-link dropdown-toggle'
											to={
												process
													.env
													.PUBLIC_URL +
												'/course-grid'
											}
											data-toggle='dropdown'>
											Home
											<i className='las la-angle-down'></i>
										</Link>
										<ul className='dropdown home-megamenu'>
											{/* <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/stepper"}>verticalstepper</Link></li> */}
											<li className='nav-item active'>
												<Link
													className='nav-link'
													to={
														process
															.env
															.PUBLIC_URL +
														'/user_dashboard'
													}>
													UserDashBoard
												</Link>
											</li>
										</ul>
									</li>

									{/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link></li> */}

									<li className='nav-item dropdown active'>
										<Link
											className='nav-link dropdown-toggle'
											to={
												process
													.env
													.PUBLIC_URL +
												'/course-grid'
											}
											data-toggle='dropdown'>
											Products
											<i className='las la-angle-down'></i>
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

			{/* Sticky Menu */}
			<StickyMenu />

			{/* Mobile Menu */}
			<MobileMenu />
		</Styles>
	);
};

export default HeaderTwo;

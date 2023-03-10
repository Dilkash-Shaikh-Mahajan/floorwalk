import React, { Component } from 'react';
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from './styles/footerOne.js';

class Footer extends Component {
	render() {
		return (
			<Styles>
				{/* Footer Area */}
				<footer
					className='footer1'
					style={{
						backgroundImage: `url(assets/images/${
							process.env.PUBLIC_URL +
							Datas.backgroundImage
						})`,
					}}>
					<Container>
						<div className='row position-relative'>
							<Col md='4'>
								<div className='footer-logo-info'>
									<img
										src={
											process.env
												.PUBLIC_URL +
											'/assets/images/logo.png'
										}
										alt=''
										className='img-fluid'
									/>
									<p>
										Lorem ipsum dolor
										sit amet, consectet
										adipisicing elit.
										Saepe porro neque a
										nam null quos.
										Adipisci eius unde
										magnam ad, nisi
										voluptates.
									</p>
									<ul className='list-unstyled'>
										<li>
											<i className='las la-phone'></i>
											+91-783-606-6777
										</li>
										<li>
											<i className='las la-envelope'></i>
											contactus@floorwalk.in
										</li>
										<li>
											<i className='las la-map-marker'></i>
											Plot No. 165,
											Bhagyashree
											Layout, Near
											Trimurti
											Nagar, Nagpur,
											Maharashtra,
											440022
										</li>
									</ul>
								</div>
							</Col>
							<Col md='8'>
								<div className='f-links'>
									<h5>Useful Links</h5>
									<ul className='list-unstyled'>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												General
												Info
											</Link>
										</li>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												Help
												Center
											</Link>
										</li>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												Our
												Services
											</Link>
										</li>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												Privacy
												Policy
											</Link>
										</li>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												Online
												Support
											</Link>
										</li>
									</ul>
									<ul className='list-unstyled'>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												General
												Info
											</Link>
										</li>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												Help
												Center
											</Link>
										</li>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												Our
												Services
											</Link>
										</li>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												Privacy
												Policy
											</Link>
										</li>
										<li>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													'/'
												}>
												<i className='las la-angle-right'></i>
												Online
												Support
											</Link>
										</li>
									</ul>
								</div>
							</Col>
						</div>
					</Container>
				</footer>

				{/* Copyright Area */}
				<section className='copyright-area'>
					<Container>
						<Row>
							<Col md='6'>
								<div className='copy-text'>
									<p>
										Copyright &copy;
										2023 | Developed by{' '}
										<a
											href='https://www.budventure.technology/'
											target='_blank'
											rel='noopener noreferrer'>
											Budventure
											Technologies
										</a>
									</p>
								</div>
							</Col>
							<Col md='6' className='text-right'>
								<ul className='social list-unstyled list-inline'>
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
							</Col>
						</Row>
					</Container>

					{/* Back To Top */}
					<BackToTop />
				</section>
			</Styles>
		);
	}
}

export default Footer;

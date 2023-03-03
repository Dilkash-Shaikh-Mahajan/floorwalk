import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import ReviewForm from './components/ReviewForm';
import PopularCourse from './components/PopularCourse';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import axios from 'axios';

function CourseDetails() {
	const { id } = useParams();
	const [responseData, setResponseData] = useState([]);
	const [loading, setLoading] = useState(true);
	const getSolution = async () => {
		setLoading(true);
		let solutionData = await axios.get(
			`http://54.147.49.251/api/solutions/${id}/`,
		);
		setResponseData(solutionData.data);
		setLoading(false);
	};
	useEffect(() => {
		getSolution();
	}, [id]);
	useEffect(() => {
		const courseButton = document.querySelectorAll('.course-button');
		courseButton.forEach((button) => {
			button.addEventListener('click', () => {
				button.classList.toggle('active');
				const content = button.nextElementSibling;

				if (button.classList.contains('active')) {
					content.className = 'course-content show';
					content.style.maxHeight =
						content.scrollHeight + 'px';
				} else {
					content.className = 'course-content';
					content.style.maxHeight = '0';
				}
			});
		});
	});

	return (
		<div className='main-wrapper course-details-page'>
			{/* Header 2 */}
			<HeaderTwo />

			{/* Breadcroumb */}
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<BreadcrumbBox title={responseData.name} />

					<Styles>
						{/* Course Details */}
						<section className='course-details-area'>
							<Container>
								<Row>
									<Col
										lg='9'
										md='8'
										sm='12'>
										<div className='course-details-top'>
											<div className='heading'>
												<h4>
													{
														responseData.name
													}
												</h4>
											</div>
											<div className='course-top-overview'>
												<div className='d-flex overviews'>
													<div className='category'>
														<h6>
															Category
														</h6>
														<p>
															{
																responseData.category
															}

															-
															{
																responseData.sub_category
															}
														</p>
													</div>
													{/* <div className='rating'>
												<h6>
													Rating
												</h6>
												<ul className='list-unstyled list-inline'>
													<li className='list-inline-item'>
														<i className='las la-star'></i>
													</li>
													<li className='list-inline-item'>
														<i className='las la-star'></i>
													</li>
													<li className='list-inline-item'>
														<i className='las la-star'></i>
													</li>
													<li className='list-inline-item'>
														<i className='las la-star'></i>
													</li>
													<li className='list-inline-item'>
														<i className='las la-star-half-alt'></i>
													</li>
													<li className='list-inline-item'>
														(4.5)
													</li>
												</ul>
											</div> */}
													<div className='price'>
														<h6>
															Price
														</h6>
														<p>
															₹
															{
																responseData.price
															}
														</p>
													</div>
												</div>
											</div>
											<div className='course-details-banner'>
												<img
													src={`http://54.147.49.251${responseData.image}`}
													alt=''
													className='img-fluid'
												/>
											</div>
											<div className='course-tab-list'>
												<Tab.Container defaultActiveKey='overview'>
													<Nav className='flex-column'>
														<Nav.Item>
															<Nav.Link eventKey='overview'>
																Overview
															</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey='curriculum'>
																Description
															</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey='instructor'>
																What
																Will
																You
																Get
															</Nav.Link>
														</Nav.Item>
														<Nav.Item>
															<Nav.Link eventKey='executionTime'>
																execution
																Time
															</Nav.Link>
														</Nav.Item>
													</Nav>
													<Tab.Content>
														<Tab.Pane
															eventKey='overview'
															className='overview-tab'>
															<p
																dangerouslySetInnerHTML={{
																	__html: responseData.overview,
																}}></p>
															{/* <div className='course-share'>
														<h5>
															Share
															This
															Course
														</h5>
														<ul className='social list-unstyled list-inline'>
															<li className='list-inline-item'>
																<a
																	href={
																		process
																			.env
																			.PUBLIC_URL +
																		'/'
																	}>
																	<i className='fab fa-facebook-f'></i>
																</a>
															</li>
															<li className='list-inline-item'>
																<a
																	href={
																		process
																			.env
																			.PUBLIC_URL +
																		'/'
																	}>
																	<i className='fab fa-twitter'></i>
																</a>
															</li>
															<li className='list-inline-item'>
																<a
																	href={
																		process
																			.env
																			.PUBLIC_URL +
																		'/'
																	}>
																	<i className='fab fa-linkedin-in'></i>
																</a>
															</li>
															<li className='list-inline-item'>
																<a
																	href={
																		process
																			.env
																			.PUBLIC_URL +
																		'/'
																	}>
																	<i className='fab fa-youtube'></i>
																</a>
															</li>
															<li className='list-inline-item'>
																<a
																	href={
																		process
																			.env
																			.PUBLIC_URL +
																		'/'
																	}>
																	<i className='fab fa-dribbble'></i>
																</a>
															</li>
														</ul>
													</div> */}
														</Tab.Pane>
														<Tab.Pane
															eventKey='curriculum'
															className='curriculum-tab'>
															<p
																dangerouslySetInnerHTML={{
																	__html: responseData.about,
																}}></p>
														</Tab.Pane>
														<Tab.Pane
															eventKey='instructor'
															className='instructor-tab'>
															<p
																dangerouslySetInnerHTML={{
																	__html: responseData.how_it_work,
																}}></p>
														</Tab.Pane>
														<Tab.Pane
															eventKey='executionTime'
															className='review-tab'>
															<p
																dangerouslySetInnerHTML={{
																	__html: responseData.execution_time,
																}}></p>
														</Tab.Pane>
													</Tab.Content>
												</Tab.Container>
											</div>
										</div>
									</Col>
									<Col
										lg='3'
										md='4'
										sm='12'>
										<div className='single-details-sidbar'>
											<Row>
												<Col md='12'>
													<div className='course-details-feature'>
														<h5 className='title'>
															Details
														</h5>
														<ul className='list-unstyled feature-list'>
															<li>
																<i className='las la-calendar'></i>{' '}
																Category
																<span>
																	{
																		responseData.category
																	}
																</span>
															</li>
															<li>
																<i className='las la-clock'></i>{' '}
																Sub
																Category
																<span>
																	{
																		responseData.sub_category
																	}
																</span>
															</li>
															<li>
																<i className='las la-globe'></i>{' '}
																Price
																<span>
																	₹{' '}
																	{
																		responseData.price
																	}
																</span>
															</li>

															{/* <li>
														<i className='las la-book'></i>{' '}
														Lectures:{' '}
														<span>
															51
														</span>
													</li>
													<li>
														<i className='las la-bookmark'></i>{' '}
														Enrolled:{' '}
														<span>
															236
														</span>
													</li>
													<li>
														<i className='las la-certificate'></i>{' '}
														Certification:{' '}
														<span>
															Yes
														</span>
													</li> */}
														</ul>
														<button
															type='button'
															className='enroll-btn'>
															<div className='enroll-btn'>
																<Link
																	className='nav-link'
																	to={
																		process
																			.env
																			.PUBLIC_URL +
																		'/stepper'
																	}>
																	Let's
																	Get
																	Started
																</Link>
															</div>
														</button>

														{/* <button type="button" className="enroll-btn">
                                                    
                                                 Enroll Course</button> */}
													</div>
												</Col>
												{/* <Col md='12'>
											<PopularCourse />
										</Col>
										<Col md='12'>
											<CourseTag />
										</Col> */}
											</Row>
										</div>
									</Col>
								</Row>
							</Container>
						</section>
					</Styles>
				</>
			)}

			{/* Footer 2 */}
			<FooterTwo />
		</div>
	);
}

export default CourseDetails;

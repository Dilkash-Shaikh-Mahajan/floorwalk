import React, { useEffect, useState } from 'react';
import Datas from '../data/course/filter2.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from './styles/courseFilter2.js';
import { useSelector } from 'react-redux';

function CourseFilterBottom() {
	const { subCategories } = useSelector((store) => store.stepper);
	const [dataList, setDataList] = useState(
		Datas.dataList.filter(function (data) {
			return data.targetId === 'Non-Purchase';
		}),
	);

	useEffect(() => {
		const buttons =
			document.querySelector('.filter-btn-list2').children;
		const items = document.querySelector('.filter-items2').children;

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function () {
				for (let j = 0; j < buttons.length; j++) {
					buttons[j].classList.remove('active');
				}

				this.classList.add('active');
				const target = this.getAttribute('data-target');
				console.log(`${target}`);
				setDataList(
					Datas.dataList.filter(function (data) {
						return data.targetId === target;
					}),
				);

				for (let k = 0; k < items.length; k++) {
					items[k].style.display = 'none';

					if (items[k].getAttribute('data-id') === target) {
						items[k].style.display = 'block';
					}

					if (target === '*') {
						items[k].style.display = 'block';
					}
				}
			});
		}
	});

	return (
		<Styles>
			{/* Course Area */}
			<section className='course-filter2'>
				<Container>
					<Row>
						<Col md='12'>
							<div className='sec-title2 text-center'>
								<h4>{Datas.secTitle}</h4>
							</div>
						</Col>
						<Col md='12'>
							<div className='filter-btns2 text-center'>
								<ul className='filter-btn-list2 list-unstyled list inline'>
									{subCategories?.map(
										(subCategory, i) =>
											subCategory.category_name ===
											'Research' ? (
												<li
													key={
														i
													}
													data-target={
														subCategory.sub_category_name
															.charAt(
																0,
															)
															.toUpperCase() +
														subCategory.sub_category_name.slice(
															1,
														)
													}
													className='active list-inline-item'>
													{subCategory.sub_category_name
														.charAt(
															0,
														)
														.toUpperCase() +
														subCategory.sub_category_name.slice(
															1,
														)}
												</li>
											) : (
												''
											),
									)}
									{/* <li data-target="Telephonic" className="list-inline-item">Telephonic</li> */}
									{/* <li data-target="prog" className="list-inline-item">Programming</li> */}
								</ul>
							</div>
							<Row className='filter-items2'>
								{dataList.map((data, i) => (
									<Col
										lg='4'
										md='6'
										key={i}
										data-id={
											data.targetId
										}>
										<div className='course-item2'>
											<Link
												to={
													process
														.env
														.PUBLIC_URL +
													data.courseLink
												}>
												<div
													className='course-image2'
													style={{
														backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})`,
													}}>
													<div className='author-img2 d-flex'>
														<div className='img'>
															<img
																src={
																	process
																		.env
																		.PUBLIC_URL +
																	`/assets/images/${data.authorImg}`
																}
																alt=''
															/>
														</div>
														<div className='title'>
															<p>
																{
																	data.authorName
																}
															</p>
															<span>
																{
																	data.authorCourses
																}
															</span>
														</div>
													</div>
													<div className='course-price2'>
														<p>
															{
																data.price
															}
														</p>
													</div>
												</div>
											</Link>
											<div className='course-content2'>
												<h6 className='heading'>
													<Link
														to={
															process
																.env
																.PUBLIC_URL +
															data.courseLink
														}>
														{
															data.courseTitle
														}
													</Link>
												</h6>
												<p className='desc'>
													{
														data.courseDesc
													}
												</p>
												<div className='course-face2 d-flex justify-content-between'>
													<div className='duration'>
														<p>
															<i className='las la-clock'></i>
															120
														</p>
													</div>
													<div className='rating'>
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
													</div>
													<div className='student'>
														<p>
															<i className='las la-chair'></i>
															60
														</p>
													</div>
												</div>
											</div>
										</div>
									</Col>
								))}
							</Row>
						</Col>
						<Col md='12' className='text-center'>
							<div className='viewall-btn'>
								<Link
									to={
										process.env
											.PUBLIC_URL +
										'/course-grid'
									}>
									View All Courses
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Styles>
	);
}

export default CourseFilterBottom;

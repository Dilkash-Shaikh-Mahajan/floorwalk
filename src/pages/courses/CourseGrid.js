import React, { Component, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import CourseSidebar from './components/CourseSidebar';
import CourseItemGrid from './components/CourseItemsGrid';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import axios from 'axios';
import { solutionsFunction } from '../../store/actions/Solutions';
import { useDispatch } from 'react-redux';

const CourseGrid = () => {
	const dispatch = useDispatch();
	const getSolutionsData = async () => {
		const responseData = await axios.get(
			'http://54.147.49.251/api/solutions/',
			// config,
		);
		console.log(responseData);
		dispatch(solutionsFunction(responseData.data));
	};

	useEffect(() => {
		getSolutionsData();
	}, []);
	return (
		<div className='main-wrapper course-page'>
			{/* Header 2 */}
			<HeaderTwo />

			{/* Breadcroumb */}
			<BreadcrumbBox title='Courses' />

			<Styles>
				{/* Course Grid */}
				<section className='course-grid-area'>
					<Container>
						<Row>
							<Col lg='3' md='4' sm='5'>
								<CourseSidebar />
							</Col>
							<Col lg='9' md='8' sm='7'>
								<div className='course-items'>
									<Row>
										<CourseItemGrid />
									</Row>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</Styles>

			{/* Footer 2 */}
			<FooterTwo />
		</div>
	);
};

export default CourseGrid;

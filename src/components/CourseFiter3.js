import { useEffect, useState } from 'react';
import Datas from '../data/course/filter.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from './styles/courseFilter.js';
import { useDispatch, useSelector } from 'react-redux';
import {
	solutionFunction,
	solutionsFunction,
} from '../store/actions/Solutions';
import axios from 'axios';
function CourseFilter3({ category }) {
	const dispatch = useDispatch();
	const [subCategoriesData, setSubCategoriesData] = useState([]);
	const getSubCategoriesData = async () => {
		const responseData = await axios.get(
			'http://54.147.49.251/api/solutions/',
			// config,
		);
		setSubCategoriesData(responseData.data);
		dispatch(solutionsFunction(responseData.data));
	};

	useEffect(() => {
		getSubCategoriesData();
	}, []);
	const { subCategories } = useSelector((store) => store.stepper);
	const { solutions } = useSelector((state) => state.solutions);
	const [currentFilter, setCurrentFilter] = useState('All');
	const [dataList, setDataList] = useState(
		solutions.filter(function (data) {
			return data.category == category;
		}),
	);
	const filterSolution = (filter) => {
		setCurrentFilter(filter);
		if (filter === 'All') {
			setDataList(
				solutions.filter(function (data) {
					return data.category === category;
				}),
			);
		} else {
			setDataList(
				solutions.filter(function (data) {
					if (data.category === category) {
						return data.sub_category === filter;
					}
				}),
			);
		}
	};

	return (
		<Styles>
			{/* Course Area */}
			<section className='course-filter'>
				<Container>
					<Row>
						<Col md='12'>
							<div className='sec-title text-center'>
								<h4>{category}</h4>
							</div>
						</Col>
						<Col md='12'>
							<div className='filter-btns text-center'>
								<ul className='filter-btn-list list-unstyled list inline'>
									<li
										onClick={() =>
											filterSolution(
												'All',
											)
										}
										className={
											currentFilter ===
											'All'
												? 'active list-inline-item'
												: ' list-inline-item'
										}>
										All
									</li>
									{subCategories?.map(
										(subCategory, i) =>
											subCategory.category_name ===
											category ? (
												<li
													key={
														i
													}
													onClick={() =>
														filterSolution(
															subCategory.sub_category_name,
														)
													}
													className={
														currentFilter ===
														subCategory.sub_category_name
															? 'active list-inline-item'
															: 'list-inline-item'
													}>
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
								</ul>
							</div>
							<Row className='filter-items'>
								{dataList.map((data, i) => (
									<Col
										lg='4'
										md='6'
										key={i}>
										<div className='course-item'>
											<Link
												onClick={() =>
													dispatch(
														solutionFunction(
															data,
														),
													)
												}
												to={`course-details/${data.id}`}>
												<div
													className='course-image'
													style={{
														backgroundImage: `url(http://54.147.49.251${data.image})`,
													}}>
													<div className='course-price'>
														<p>
															₹
															{
																data.price
															}
														</p>
													</div>
												</div>
											</Link>
											<div className='course-content'>
												<h6 className='heading'>
													<Link
														onClick={() =>
															dispatch(
																solutionFunction(
																	data,
																),
															)
														}
														to={`course-details/${data.id}`}>
														{
															data.name
														}
													</Link>
												</h6>
												<p
													className='desc'
													dangerouslySetInnerHTML={{
														__html: data.overview,
													}}></p>
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

export default CourseFilter3;

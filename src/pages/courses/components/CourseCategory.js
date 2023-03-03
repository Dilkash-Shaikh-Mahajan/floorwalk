import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Styles } from '../styles/courseCategory.js';

const CourseCategory = () => {
	const { categoriesData } = useSelector((state) => state.stepper);
	console.log(categoriesData);
	return (
		<Styles>
			{/* Course Tag */}
			<div className='course-category'>
				<h5>Course Category</h5>
				<ul className='category-item list-unstyled'>
					{categoriesData.map((category, index) => (
						<li className='check-btn' key={index}>
							<label>
								<input
									type='checkbox'
									className='check-box'
								/>
								{category.category_name}
							</label>
						</li>
					))}
					{/* <li className='check-btn'>
						<label htmlFor='cat2'>
							<input
								type='checkbox'
								id='cat2'
								className='check-box'
							/>
							Graphic Design<span>(11)</span>
						</label>
					</li> */}
				</ul>
			</div>
		</Styles>
	);
};

export default CourseCategory;

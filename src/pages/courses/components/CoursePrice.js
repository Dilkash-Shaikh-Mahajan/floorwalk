import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Styles } from '../styles/coursePrice.js';

const CoursePrice = () => {
	const { subCategories } = useSelector((state) => state.stepper);
	console.log(subCategories);
	return (
		<Styles>
			{/* Course Price */}
			<div className='course-price'>
				<h5>Course SubCategory</h5>
				<ul className='price-item list-unstyled'>
					{subCategories.map((subCategory, i) => (
						<li className='check-btn' key={i}>
							<label>
								<input
									type='checkbox'
									className='check-box'
								/>
								{subCategory.sub_category_name}
							</label>
						</li>
					))}
					{/* <li className='check-btn'>
						<label htmlFor='price2'>
							<input
								type='checkbox'
								id='price2'
								className='check-box'
							/>
							Free<span>(09)</span>
						</label>
					</li> */}
				</ul>
			</div>
		</Styles>
	);
};

export default CoursePrice;

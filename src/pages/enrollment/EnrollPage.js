import React, { useEffect } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
//import { Styles } from '../styles/course.js';
import { Vertical } from '../../verticalstepper/Vertical';

import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
	categoriesDataFunction,
	industriesDataFunction,
	interestAreaFunction,
	subCategoriesFunction,
} from '../../store/actions/Stepper';
function EnrollmentPage() {
	const dispatch = useDispatch();
	const getIndustriesData = async () => {
		const responseData = await axios.get(
			'http://54.147.49.251/api/industries/',
		);
		dispatch(industriesDataFunction(responseData.data));
	};

	const getInterestAreaData = async () => {
		const responseData = await axios.get(
			'http://54.147.49.251/api/interestarea/',
			// config,
		);
		dispatch(interestAreaFunction(responseData.data));
	};
	const getCategoriesData = async () => {
		const responseData = await axios.get(
			'http://54.147.49.251/api/categories/',
		);
		dispatch(categoriesDataFunction(responseData.data));
	};
	const getSubCategoriesData = async () => {
		const responseData = await axios.get(
			'http://54.147.49.251/api/subcategories/',
			// config,
		);
		dispatch(subCategoriesFunction(responseData.data));
	};

	useEffect(() => {
		getInterestAreaData();
		getIndustriesData();
		getCategoriesData();
		getSubCategoriesData();
	});
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
			<BreadcrumbBox title='Enrollment Details' />

			<Vertical />

			{/* Footer 2 */}
			<FooterTwo />
		</div>
	);
}

export default EnrollmentPage;

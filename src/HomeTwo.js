import React, { Component, useEffect } from 'react';
import HeaderTwo from './components/HeaderTwo';
import HeroImage from './components/HeroImage';
import ServiceBox from './components/ServiceBox';
import AboutUs from './components/AboutUs';
import AboutUsTwo from './components/AboutUsTwo';
import CourseSlider from './components/CourseSlider';
import CourseFilter from './components/CourseFilter';
import CourseFilterBottom from './components/CourseFilter2';
import NumberCounter from './components/NumberCounter';
import FreeCourse from './components/FreeCourse';
import TeamSlider from './components/TeamSlider';
import TestimonialSlider from './components/TestimonialSlider';
import HomeBlog from './components/HomeBlog';
import ImageGallery from './components/ImageGallery';
import FooterTwo from './components/FooterTwo';
import Footer from './components/Footer';
import {
	categoriesDataFunction,
	industriesDataFunction,
	interestAreaFunction,
	subCategoriesFunction,
} from './store/actions/Stepper';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import CourseFilter3 from './components/CourseFiter3';

const HomeTwo = () => {
	const dispatch = useDispatch();
	const getSolutionsData = async () => {
		const responseData = await axios.get(
			'http://54.147.49.251/api/solutions/',
			// config,
		);
		console.log(responseData);
		dispatch(solutionsFunction(responseData.data));
	};

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
		getSolutionsData();
		getIndustriesData();
		getCategoriesData();
		getSubCategoriesData();
	}, []);
	const { categoriesData } = useSelector((store) => store.stepper);
	return (
		<div className='main-wrapper'>
			{/* Header 2 */}
			<HeaderTwo />

			{/* Hero Image */}
			<HeroImage />

			{/* Service Box */}
			<ServiceBox />
			{categoriesData.map((category, index) => (
				<div key={index}>
					<CourseFilter3
						category={category.category_name}
					/>
				</div>
			))}
			{/* Course Filter */}

			{/* About Us 2 
                <AboutUsTwo />*/}

			{/* Course Filter */}

			{/* Course Slider 
                <CourseSlider />*/}

			{/* Counter Area */}
			<NumberCounter />

			{/* About Area */}
			<AboutUs />

			{/* Testimonial Slider */}
			<TestimonialSlider />

			{/* Free Course Area */}
			<FreeCourse />

			{/* Team Slider 
                <TeamSlider />*/}

			{/* Testimonial Slider 
                <TestimonialSlider />*/}

			{/* Blog Area 
                <HomeBlog />*/}

			{/* Image Gallery Area 
                <ImageGallery />*/}

			{/* Footer 2 
                <FooterTwo />*/}

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default HomeTwo;

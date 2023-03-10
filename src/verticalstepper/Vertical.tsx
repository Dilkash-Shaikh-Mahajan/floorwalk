import React, { useEffect, useRef, useState } from 'react';
import { KTSVG } from './helpers';
import { ProductSetup } from './steps/ProductSetup';
import { ProductTargeting } from './steps/ProjectTargeting';
import { ProductDetails } from './steps/ProjectDetails';
import { FinalReview } from './steps/FinalReview';
import { Payment } from './steps/Payment';
import { StepperComponent } from './components';
import { Formik, Form, FormikValues } from 'formik';
import {
	ICreateAccount,
	createAccountSchemas,
	inits,
} from './CreateAccountWizardHelper';
import './sass/style.scss';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RegistrationStepper from './steps/RegistrationStepper';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { isUserAlreadyRegisteredFunction } from '../store/actions/Stepper';
import { setLoggedUser } from '../store/actions/Auth';
const Vertical = () => {
	let location: any = useLocation();
	const dispatch = useDispatch();
	const [audiencePreference, setAudiencePreference] = useState(false);
	const stepperRef = useRef<HTMLDivElement | null>(null);
	const stepper = useRef<StepperComponent | any>(null);
	const [currentSchema, setCurrentSchema] = useState(
		createAccountSchemas[0],
	);
	useEffect(() => {
		dispatch(isUserAlreadyRegisteredFunction(false));
	}, []);
	const { solution } = useSelector((state: any) => state.solutions);
	const [finalFormData, setFinalFormData] = useState<[]>([]);
	const [finalTargetData, setFinalTargetData] = useState<[]>([]);
	const [initValues, setInitValues] = useState<ICreateAccount>(inits);
	const [registerUser, setRegisterUser] = useState<any>();

	let isAuth = true;
	const loadStepper = () => {
		stepper.current = StepperComponent.createInsance(
			stepperRef.current as HTMLDivElement,
		);
	};
	const { user } = useSelector((state: any) => state.auth);
	const prevStep = () => {
		if (!stepper.current) {
			return;
		}

		stepper.current.goPrev();

		setCurrentSchema(
			createAccountSchemas[stepper.current.currentStepIndex - 1],
		);
	};
	let storeSecondAddress: any = [];
	const submitStep = async (
		values: ICreateAccount,
		actions: FormikValues,
	) => {
		console.log(values);
		if (!stepper.current) {
			return;
		}
		if (stepper.current.currentStepIndex === 5) {
			if (values.emailId) {
				let formData = {
					email: values.emailId,
					password: values.password,
					password2: values.cpassword,
					first_name: values.firstName,
					last_name: values.lastName,
					company: values.companyName,
					phone_number: values.mobileNumber,
					address: values.address,
					city: values.city,
					state: values.state,
					pincode: values.pincode,
				};
				try {
					const { data } = await axios.post(
						'http://54.147.49.251/api/register',
						formData,
					);
					dispatch(setLoggedUser(data));
					// stepper.current.goPrev();
				} catch (error: any) {
					console.log(error.response.status);
					if (error?.response.status === 400) {
						dispatch(
							isUserAlreadyRegisteredFunction(true),
						);
						// stepper.current.goPrev();
						toast.error(error?.response);
					}
				}
				let finalStepperData = {
					order_id: 'FW00003',
					order_date: '2023-02-28 12:07:38.038379+00:00',
					user: user.id,
					category: 3,
					subcategory: 4,
					solution: solution.id,
					project_name: 'Cade Weaver',
					start_date: '1985-03-04',
					end_date: '1981-01-16',
					audience_preference: values.accountPlan,
					ageRange: [],
					occupation: values.occupation?.toString(),
					// businessType: 'Event Management',
					incomeRange: [],
					carPriceRange: [],
					// solutionInterestAreas: [],
					total_responses: '10',
					solution_price: '2000',
					subtotal: '20000',
					tax_per: '18',
					total_tax: '3600',
					final_total: '23600',
				};
				try {
					console.log(finalStepperData);
					const steppperRes = await axios.post(
						'http://54.147.49.251/api/add-order-detail',
						finalStepperData,
					);
					console.log(steppperRes);
				} catch (error: any) {
					console.log(error.response.status);
					if (error?.response.status === 400) {
						dispatch(
							isUserAlreadyRegisteredFunction(true),
						);
						stepper.current.goPrev();
						toast.error(error?.response);
					}
				}
			}
		}
		if (stepper.current.currentStepIndex === 2) {
			if (finalTargetData.length === 0) {
				alert('Please Add Atleast one Store');
				stepper.current.goPrev();
			}
		}
		if (stepper.current.currentStepIndex === 3) {
			if (finalFormData.length === 0) {
				alert('Please Add Atleast one Store');
				stepper.current.goPrev();
			}
		}
		setInitValues(values);
		console.log(values);
		sessionStorage.setItem('projectName', values.projectName);
		sessionStorage.setItem('startDate', values.startDate);
		sessionStorage.setItem('endDate', values.endDate);
		sessionStorage.setItem('businessType', values.businessType);

		let valueAgeRange = values?.ageRange?.toString();
		let valueOccupation = values?.occupation?.toString();
		let valueIncomeRange = values?.incomeRange?.toString();
		let valueCarPriceRange = values?.carPriceRange?.toString();
		let valueInterestAreas = values?.solutionInterestAreas?.toString();
		sessionStorage.setItem('ageRange', JSON.stringify(valueAgeRange));
		sessionStorage.setItem(
			'occupation',
			JSON.stringify(valueOccupation),
		);
		sessionStorage.setItem(
			'incomeRange',
			JSON.stringify(valueIncomeRange),
		);
		sessionStorage.setItem(
			'carPriceRange',
			JSON.stringify(valueCarPriceRange),
		);
		sessionStorage.setItem(
			'interestAreas',
			JSON.stringify(valueInterestAreas),
		);
		setCurrentSchema(
			createAccountSchemas[stepper.current.currentStepIndex],
		);
		if (
			stepper.current.currentStepIndex !==
			stepper.current.totatStepsNumber
		) {
			stepper.current.goNext();
		} else {
			stepper.current.goto(1);
			actions.resetForm();
		}
	};

	//click on continue button or back button this useeffect will work
	useEffect(() => {
		const topBtn: any = document.querySelector('.continueButtonTop');
		const backTopBtn: any = document.querySelector('.backButtonTop');
		if (topBtn) {
			topBtn.addEventListener('click', smoothScrollBackToTop);
		}
		backTopBtn.addEventListener('click', smoothScrollBackToTop);

		function smoothScrollBackToTop() {
			const targetPosition = 250;
			const startPosition = window.pageYOffset;
			const distance = targetPosition - startPosition;
			const duration = 750;
			let start: any = null;

			window.requestAnimationFrame(step);

			function step(timestamp: number) {
				if (!start) start = timestamp;
				const progress = timestamp - start;
				window.scrollTo(
					0,
					easeInOutCubic(
						progress,
						startPosition,
						distance,
						duration,
					),
				);
				if (progress < duration)
					window.requestAnimationFrame(step);
			}
		}

		function easeInOutCubic(
			t: number,
			b: number,
			c: number,
			d: number,
		) {
			t /= d / 2;
			if (t < 1) return (c / 2) * t * t * t + b;
			t -= 2;
			return (c / 2) * (t * t * t + 2) + b;
		}
	});
	useEffect(() => {
		if (!stepperRef.current) {
			return;
		}

		loadStepper();
	}, [stepperRef]);
	useEffect(() => {
		if (location?.state?.prev == 'login') {
			stepper.current.goto(5);
		}
	}, []);
	return (
		<div
			className='app-content flex-column-fluid'
			style={{ backgroundColor: '#f5f8fa' }}>
			<div
				id='kt_app_content_container'
				className='app-container container-fluid'>
				<div
					ref={stepperRef}
					className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
					id='kt_create_account_stepper'>
					{/* begin::Aside*/}
					<div
						className={
							'card d-flex justify-content-center justify-content-xl-start flex-row  me-9'
						}
						style={{
							border: 0,
							minWidth: '24%',
						}}>
						{/* begin::Wrapper*/}
						<div className='card-body px-6 px-lg-12 px-xxl-15 py-20'>
							{/* begin::Nav*/}
							<div className='stepper-nav'>
								{/* begin::Step 1*/}
								<div
									className='stepper-item current'
									data-kt-stepper-element='nav'>
									{/* begin::Wrapper*/}
									<div className='stepper-wrapper'>
										{/* begin::Icon*/}
										<div className='stepper-icon w-40px h-40px'>
											<i className='stepper-check fas fa-check'></i>
											<span className='stepper-number'>
												1
											</span>
										</div>
										{/* end::Icon*/}

										{/* begin::Label*/}
										<div className='stepper-label'>
											<h3 className='stepper-title'>
												Project
												Setup
											</h3>

											<div className='stepper-desc fw-semibold'>
												Setup
												Your
												Project
											</div>
										</div>
										{/* end::Label*/}
									</div>
									{/* end::Wrapper*/}

									{/* begin::Line*/}
									<div className='stepper-line h-40px'></div>
									{/* end::Line*/}
								</div>
								{/* end::Step 1*/}

								{/* begin::Step 2*/}
								<div
									className='stepper-item'
									data-kt-stepper-element='nav'>
									{/* begin::Wrapper*/}
									<div className='stepper-wrapper'>
										{/* begin::Icon*/}
										<div className='stepper-icon w-40px h-40px'>
											<i className='stepper-check fas fa-check'></i>
											<span className='stepper-number'>
												2
											</span>
										</div>
										{/* end::Icon*/}

										{/* begin::Label*/}
										<div className='stepper-label'>
											<h3 className='stepper-title'>
												Project
												Targeting
											</h3>
											<div className='stepper-desc fw-semibold'>
												Targeting
												Audience
											</div>
										</div>
										{/* end::Label*/}
									</div>
									{/* end::Wrapper*/}

									{/* begin::Line*/}
									<div className='stepper-line h-40px'></div>
									{/* end::Line*/}
								</div>
								{/* end::Step 2*/}

								{/* begin::Step 3*/}
								<div
									className='stepper-item'
									data-kt-stepper-element='nav'>
									{/* begin::Wrapper*/}
									<div className='stepper-wrapper'>
										{/* begin::Icon*/}
										<div className='stepper-icon w-40px h-40px'>
											<i className='stepper-check fas fa-check'></i>
											<span className='stepper-number'>
												3
											</span>
										</div>
										{/* end::Icon*/}

										{/* begin::Label*/}
										<div className='stepper-label'>
											<h3 className='stepper-title'>
												Project
												Details
											</h3>
											<div className='stepper-desc fw-semibold'>
												Your
												Project
												Related
												Info
											</div>
										</div>
										{/* end::Label*/}
									</div>
									{/* end::Wrapper*/}

									{/* begin::Line*/}
									<div className='stepper-line h-40px'></div>
									{/* end::Line*/}
								</div>
								{/* end::Step 3*/}

								{/* begin::Step 4*/}
								<div
									className='stepper-item'
									data-kt-stepper-element='nav'>
									{/* begin::Wrapper*/}
									<div className='stepper-wrapper'>
										{/* begin::Icon*/}
										<div className='stepper-icon w-40px h-40px'>
											<i className='stepper-check fas fa-check'></i>
											<span className='stepper-number'>
												4
											</span>
										</div>
										{/* end::Icon*/}

										{/* begin::Label*/}
										<div className='stepper-label'>
											<h3 className='stepper-title'>
												Final
												Review
											</h3>
											<div className='stepper-desc fw-semibold'>
												Reviews
												Details
											</div>
										</div>
										{/* end::Label*/}
									</div>
									{/* end::Wrapper*/}

									{/* begin::Line*/}
									<div className='stepper-line h-40px'></div>
									{/* end::Line*/}
								</div>
								{/* end::Step 4*/}
								{/* begin::Step 5*/}
								<div
									className='stepper-item'
									data-kt-stepper-element='nav'>
									{/* begin::Wrapper*/}
									<div className='stepper-wrapper'>
										{/* begin::Icon*/}
										<div className='stepper-icon w-40px h-40px'>
											<i className='stepper-check fas fa-check'></i>
											<span className='stepper-number'>
												5
											</span>
										</div>
										{/* end::Icon*/}

										{/* begin::Label*/}
										<div className='stepper-label'>
											<h3 className='stepper-title'>
												Registration
											</h3>
											<div className='stepper-desc fw-semibold'>
												Users
												Related
												Info
											</div>
										</div>
										{/* end::Label*/}
									</div>
									{/* end::Wrapper*/}
									{/* begin::Line*/}
									{/* end::Line*/}
								</div>
								{/* end::Step 5*/}
							</div>
							{/* end::Nav*/}
						</div>
						{/* end::Wrapper*/}
					</div>
					{/* begin::Aside*/}

					<div
						className='card d-flex flex-row-fluid bg-body rounded'
						style={{ border: 0 }}>
						<Formik
							validationSchema={currentSchema}
							initialValues={initValues}
							onSubmit={submitStep}>
							{({ values }) => (
								<Form
									className='py-5 w-100 w-xl-700px px-9'
									noValidate
									id='kt_create_account_form'>
									<div
										className='current'
										data-kt-stepper-element='content'>
										<ProductSetup
											audiencePreference={
												audiencePreference
											}
											setAudiencePreference={
												setAudiencePreference
											}
										/>
									</div>

									<div data-kt-stepper-element='content'>
										<ProductTargeting
											storeSecondAddress={
												storeSecondAddress
											}
											setFinalTargetData={
												setFinalTargetData
											}
											finalTargetData={
												finalTargetData
											}
										/>
									</div>

									<div data-kt-stepper-element='content'>
										<ProductDetails
											setFinalFormData={
												setFinalFormData
											}
											finalFormData={
												finalFormData
											}
										/>
									</div>

									<div data-kt-stepper-element='content'>
										<FinalReview
											finalTargetData={
												finalTargetData
											}
											finalFormData={
												finalFormData
											}
											audiencePreference={
												audiencePreference
											}
										/>
									</div>

									<div data-kt-stepper-element='content'>
										<RegistrationStepper
											finalTargetData={
												finalTargetData
											}
										/>
									</div>

									<div
										className='d-flex position-absolute flex-stack pt-10'
										style={{
											width: '90%',
											bottom: '2%',
										}}>
										<div className='mr-2'>
											<button
												onClick={
													prevStep
												}
												type='button'
												className='btn btn-lg btn-stepper me-3 backButtonTop'
												data-kt-stepper-action='previous'>
												<KTSVG
													path='/media/icons/duotune/arrows/arr063.svg'
													className='svg-icon-4 me-1'
												/>
												Back
											</button>
										</div>

										<div>
											{stepper
												.current
												?.currentStepIndex ===
											stepper
												.current
												?.totatStepsNumber ? (
												''
											) : (
												<button
													type='submit'
													className='btn btn-lg btn-stepper me-3 continueButtonTop'>
													<span className='indicator-label'>
														{stepper
															.current
															?.currentStepIndex !==
															stepper
																.current
																?.totatStepsNumber! -
																1 &&
															'Continue'}
														{stepper
															.current
															?.currentStepIndex ===
															stepper
																.current
																?.totatStepsNumber! -
																1 &&
															'Pay Now'}
														<KTSVG
															path='/media/icons/duotune/arrows/arr064.svg'
															className='svg-icon-3 ms-2 me-0'
														/>
													</span>
												</button>
											)}
										</div>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Vertical };

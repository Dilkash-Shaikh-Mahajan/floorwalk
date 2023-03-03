import React, { FC, useState } from 'react';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { loginStepper, loginStepperSchema } from '../CreateAccountWizardHelper';
import { KTSVG } from '../helpers';
import {
	accessTokenFunction,
	refreshTokenFunction,
	setLoggedUser,
} from '../../store/actions/Auth';
import axios from 'axios';
import { isUserAlreadyRegisteredFunction } from '../../store/actions/Stepper';

declare global {
	interface Window {
		Razorpay: any;
	}
}
type Props = {
	finalTargetData: any;
};
const RegistrationStepper: FC<Props> = ({ finalTargetData }: Props) => {
	const dispatch = useDispatch();
	let solutionPrice = 1200;
	const { isUserAlreadyRegistered } = useSelector(
		(state: any) => state.stepper,
	);
	let sum = finalTargetData.reduce(function (
		accumulator: number,
		// curValue: { numberOfResponse: number },
		curValue: any,
	) {
		return accumulator + parseInt(curValue.numberOfResponse);
	}, 0);
	const { solution } = useSelector((state: any) => state.solutions);

	let allSolutionsPrice = sum * parseInt(solution.price);
	let taxSolutionPrice = (allSolutionsPrice * 18) / 100;
	let totalPricewoComma = allSolutionsPrice + taxSolutionPrice;
	let totalPriceComma = totalPricewoComma.toLocaleString('en-IN', {
		maximumFractionDigits: 2,
		style: 'currency',
		currency: 'INR',
	});
	const handlePayment = () => {
		var options = {
			key: 'rzp_test_DXb4qOZFFJhsDu',
			key_secret: '6QEGux3sfiRv483wqTA2aZMH',
			amount: 500 * 100,
			currency: 'INR',
			name: 'STARTUP_PROJECTS',
			description: 'for testing purpose',
			handler: function (response: any) {
				console.log(response);
			},
			prefill: {
				name: 'Velmurugan',
				email: 'mvel1620r@gmail.com',
				contact: '9325696751',
			},
			notes: {
				address: 'Razorpay Corporate office',
			},
			theme: {
				color: '#3399cc',
			},
		};
		var pay = new window.Razorpay(options);
		pay.open();
	};
	const handleLogin = async (values: any) => {
		try {
			const { data } = await axios.post(
				`http://54.147.49.251/api/token/`,
				values,
			);

			console.log(data);
			dispatch(refreshTokenFunction(data.refresh));
			dispatch(accessTokenFunction(data.access));
			dispatch(setLoggedUser(data));
			dispatch(isUserAlreadyRegisteredFunction(false));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='w-100'>
			<div className='row'>
				<div className='col-md-8'>
					<div className='row mb-5'>
						<div className='col-lg-6 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									First Name
								</label>

								<Field
									type='text'
									className='form-control form-control-lg form-control-solid'
									name='firstName'
								/>
								<div className='text-danger mt-2'>
									<ErrorMessage name='firstName' />
								</div>
							</div>
						</div>
						<div className='col-lg-6 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									Last Name
								</label>

								<Field
									type='text'
									className='form-control form-control-lg form-control-solid'
									name='lastName'
								/>

								<div className='text-danger mt-2'>
									<ErrorMessage name='lastName' />
								</div>
							</div>
						</div>
						<div className='col-lg-6 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									Email ID
								</label>

								<Field
									type='email'
									className='form-control form-control-lg form-control-solid'
									name='emailId'
								/>
								<div className='text-danger mt-2'>
									<ErrorMessage name='emailId' />
								</div>
							</div>
						</div>
						<div className='col-lg-6 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									Mobile Number
								</label>

								<Field
									type='number'
									className='form-control form-control-lg form-control-solid'
									name='mobileNumber'
								/>

								<div className='text-danger mt-2'>
									<ErrorMessage name='mobileNumber' />
								</div>
							</div>
						</div>
						<div className='col-lg-12 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									Company Name
								</label>

								<Field
									type='text'
									className='form-control form-control-lg form-control-solid'
									name='companyName'
								/>
								<div className='text-danger mt-2'>
									<ErrorMessage name='companyName' />
								</div>
							</div>
						</div>
						<div className='col-lg-6 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									Password
								</label>

								<Field
									type='password'
									className='form-control form-control-lg form-control-solid'
									name='password'
								/>

								<div className='text-danger mt-2'>
									<ErrorMessage name='password' />
								</div>
							</div>
						</div>
						<div className='col-lg-6 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									Confirm Password
								</label>

								<Field
									type='password'
									className='form-control form-control-lg form-control-solid'
									name='cpassword'
								/>

								<div className='text-danger mt-2'>
									<ErrorMessage name='cpassword' />
								</div>
							</div>
						</div>
						<div className='col-lg-12 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									Address
								</label>

								<Field
									type='text'
									className='form-control form-control-lg form-control-solid'
									name='address'
								/>
								<div className='text-danger mt-2'>
									<ErrorMessage name='address' />
								</div>
							</div>
						</div>
						<div className='col-lg-4 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									City
								</label>

								<Field
									type='text'
									className='form-control form-control-lg form-control-solid'
									name='city'
								/>

								<div className='text-danger mt-2'>
									<ErrorMessage name='city' />
								</div>
							</div>
						</div>
						<div className='col-lg-4 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									State
								</label>

								<Field
									type='text'
									className='form-control form-control-lg form-control-solid'
									name='state'
								/>
								<div className='text-danger mt-2'>
									<ErrorMessage name='state' />
								</div>
							</div>
						</div>
						<div className='col-lg-4 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									Pincode
								</label>

								<Field
									type='text'
									className='form-control form-control-lg form-control-solid'
									name='pincode'
								/>

								<div className='text-danger mt-2'>
									<ErrorMessage name='pincode' />
								</div>
							</div>
						</div>
						<div className='col-lg-12 '>
							<div className='mb-4'>
								<label className='form-label mb-3'>
									GSTIN
								</label>

								<Field
									type='text'
									className='form-control form-control-lg form-control-solid'
									name='gstin'
								/>

								<div className='text-danger mt-2'>
									<ErrorMessage name='gstin' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<h3 className='m-0 my-3 fw-bold fs-5'>
						Project Summary
					</h3>
					<div
						className={` p-3 mt-2 mb-3 card-rounded w-100`}
						style={{
							backgroundColor: '#F2F9FF',
							borderRadius: '6px',
						}}>
						<div className='d-flex text-center justify-content-between flex-row pt-2'>
							<span className='fw-bold fs-6 '>
								Requested Responses :
							</span>
							<span className='fs-6 fw-bold'>
								{' '}
								{sum}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-2'>
							<span className='fw-bold fs-6'>
								Solution Price :{' '}
							</span>
							<span className='fs-6 fw-bold'>
								{' '}
								₹ {parseInt(solution.price)}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-2'>
							<span className='fw-bold fs-6 '>
								Sub Total :{' '}
							</span>
							<span className='fs-6 fw-bold'>
								{' '}
								₹ {allSolutionsPrice}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fw-bold fs-6'>
								Tax (18%):{' '}
							</span>
							<span className='fs-6 fw-bold'>
								{' '}
								₹ {taxSolutionPrice}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fw-bold fs-6'>
								Total Price :{' '}
							</span>
							<span className='fs-6 fw-bold'>
								{' '}
								{totalPriceComma}
							</span>
						</div>
						<div
							className='my-3'
							style={{
								border: '1px solid #1789E4',
							}}></div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fw-bold fs-5'>
								Project Total :{' '}
							</span>
							<span className=' fs-6 fw-bold'>
								{' '}
								{totalPriceComma}
							</span>
						</div>
						<div className='text-center my-3'>
							<button
								type='submit'
								// onClick={handlePayment}
								className='btn btn-lg btn-stepper px-3 py-2 continueButtonTop'>
								<span className='indicator-label'>
									Pay Now
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Modal
				show={isUserAlreadyRegistered}
				onHide={() =>
					dispatch(isUserAlreadyRegisteredFunction(false))
				}
				scrollable={true}
				className='modal-dialog-scrollable mt-16 py-12'
				aria-labelledby='contained-modal-title-vcenter '>
				<Modal.Body>
					<Formik
						validationSchema={loginStepperSchema}
						initialValues={loginStepper}
						onSubmit={(values: any) =>
							handleLogin(values)
						}>
						{({ setFieldValue }) => (
							<Form
								className='py-10 w-100 w-xl-700px px-9'
								noValidate
								id='kt_create_account_form1'>
								<div className='col-lg-12 '>
									<div className='mb-4'>
										<label className='form-label mb-3'>
											Email ID
										</label>

										<Field
											type='email'
											className='form-control form-control-lg form-control-solid'
											name='email'
										/>
										<div className='text-danger mt-2'>
											<ErrorMessage name='email' />
										</div>
									</div>
								</div>
								<div className='col-lg-12 '>
									<div className='mb-4'>
										<label className='form-label mb-3'>
											Password
										</label>

										<Field
											type='password'
											className='form-control form-control-lg form-control-solid'
											name='password'
										/>

										<div className='text-danger mt-2'>
											<ErrorMessage name='password' />
										</div>
									</div>
								</div>
								<button
									type='submit'
									className='btn btn-lg btn-stepper me-3 continueButtonTop'>
									<span className='indicator-label'>
										Submit
										<KTSVG
											path='/media/icons/duotune/arrows/arr064.svg'
											className='svg-icon-3 ms-2 me-0'
										/>
									</span>
								</button>
							</Form>
						)}
					</Formik>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default RegistrationStepper;

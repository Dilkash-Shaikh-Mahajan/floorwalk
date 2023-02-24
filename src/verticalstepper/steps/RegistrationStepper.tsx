import React, { FC, useState } from 'react';
import { KTSVG } from '../helpers';
import { Field, ErrorMessage } from 'formik';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Register from './registrationStep/Register';
import Login from './registrationStep/Login';
declare global {
	interface Window {
		Razorpay: any;
	}
}
type Props = {
	finalTargetData: any;
};
const RegistrationStepper: FC<Props> = ({ finalTargetData }: Props) => {
	let solutionPrice = 1200;
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
	return (
		<div className='w-100'>
			<div className='row'>
				<div className='col-md-8'>
					<Tabs
						defaultActiveKey='register'
						id='fill-tab-example'
						className='mb-3 pills'
						fill>
						<Tab
							eventKey='register'
							className='pill'
							title='Register'>
							<Register />
						</Tab>
						<Tab eventKey='login' title='Login'>
							<Login />
						</Tab>
					</Tabs>
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
							<span className='fs-6 '>
								Requested Responses :
							</span>
							<span className='fs-6'> {sum}</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-2'>
							<span className='fs-6'>
								Solution Price :{' '}
							</span>
							<span className='fs-6'>
								{' '}
								{parseInt(solution.price)}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-2'>
							<span className='fs-6 '>
								Sub Total :{' '}
							</span>
							<span className='fs-6'>
								{' '}
								{allSolutionsPrice}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fw-bold fs-6'>
								Tax (18%):{' '}
							</span>
							<span className='fs-6'>
								{' '}
								{taxSolutionPrice}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fw-bold fs-6'>
								Total Price :{' '}
							</span>
							<span className='fs-6 '>
								{' '}
								{allSolutionsPrice +
									taxSolutionPrice}
							</span>
						</div>
						<div
							className='my-3'
							style={{
								border: '1px solid #1789E4',
							}}></div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fs-6'>
								Project Total :{' '}
							</span>
							<span className=' fs-6'>
								{' '}
								{allSolutionsPrice +
									taxSolutionPrice}
							</span>
						</div>
						<div className='text-center my-3'>
							<button
								onClick={handlePayment}
								className='btn btn-lg btn-primary px-3 py-2 continueButtonTop'>
								<span className='indicator-label'>
									Pay Now
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationStepper;

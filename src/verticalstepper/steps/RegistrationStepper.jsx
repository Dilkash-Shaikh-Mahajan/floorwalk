import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Styles } from './style';
import toast, { Toaster } from 'react-hot-toast';
import { StepperComponent } from '../components';
const RegistrationStepper = ({ stepper }) => {
	let history = useHistory();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [company, setCompany] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCPassword] = useState('');
	// const [address, setAddress] = useState('');
	// const [city , setCity] = useState('');
	// const [state, setState] = useState('');
	// const [pincode, setPincode] = useState('');
	// const [GSTNumber, setGSTNumber] = useState('');
	const [error, setError] = useState('');
	let errorEmail;
	const backendURL = `http://54.147.49.251/api`;
	async function formSubmit(e) {
		e.preventDefault();

		let config = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods':
					'DELETE, POST, GET, OPTIONS',
			},
		};
		try {
			const registerData = await axios.post(
				`${backendURL}/register`,
				{
					email: email,
					first_name: firstName,
					last_name: lastName,
					company: company,
					phone_number: mobile,
					password: password,
					password2: cpassword,
				},
				// config,
			);
			console.log(registerData);
			if (registerData.status === 201) {
				console.log('rvdfvdf');
				stepper.current.goNext();
			}
		} catch (error) {
			if (error.response.status === 400) {
				toast.error('You Have Already Account Please Login');
				setTimeout(() => {
					history.push('/login');
				}, 4000);
			}
			console.log(error);
		}
	}

	return (
		
			
			<div className='row'>
				<div className='col-md-8'>
					<div className='text-black fw-bold fs-2'>
						Registration
					</div>

					<Styles>
						<div
							id='form_registration'
							className='form'>
							<div className='row w-100'>
								<div className='formGroup col-md-6'>
									<p className='form-control'>
										<label htmlFor='registration_fname'>
											First Name
										</label>
										<input
											type='text'
											placeholder='First name'
											id='registration_fname'
											value={
												firstName
											}
											onChange={(
												e,
											) =>
												setFirstName(
													e
														.target
														.value,
												)
											}
										/>
										<span className='registration_input-msg'></span>
									</p>
								</div>
								<div className='formGroup col-md-6'>
									<p className='form-control'>
										<label htmlFor='registration_lname'>
											Last Name
										</label>
										<input
											type='text'
											placeholder='Last name'
											id='registration_lname'
											value={
												lastName
											}
											onChange={(
												e,
											) =>
												setLastName(
													e
														.target
														.value,
												)
											}
										/>
										<span className='registration_input-msg'></span>
									</p>
								</div>
								<div className='col-md-6'>
									<p className='form-control '>
										<label htmlFor='registration_email'>
											Work Email
											Address
										</label>
										<input
											type='email'
											placeholder='Work Email address'
											id='registration_email'
											value={email}
											onChange={(
												e,
											) =>
												setEmail(
													e
														.target
														.value,
												)
											}
										/>
										<span className='registration_input-msg'>
											{error}
										</span>
									</p>
								</div>
								<div className='col-md-6'>
									<p className='form-control'>
										<label htmlFor='registration_mobile'>
											Mobile Number
										</label>
										<input
											type='number'
											placeholder='Mobile Number'
											id='registration_mobile'
											value={mobile}
											onChange={(
												e,
											) =>
												setMobile(
													e
														.target
														.value,
												)
											}
										/>
										<span className='registration_input-msg'></span>
									</p>
								</div>
								<div className='col-md-12'>
									<p className='form-control'>
										<label htmlFor='registration_compnay_name'>
											Company Name
										</label>
										<input
											type='text'
											placeholder='Company Name'
											id='registration_compnay_name'
											value={
												company
											}
											onChange={(
												e,
											) =>
												setCompany(
													e
														.target
														.value,
												)
											}
										/>
										<span className='registration_input-msg'></span>
									</p>
								</div>
								<div className='col-md-6'>
									<p className='form-control'>
										<label htmlFor='registration_password'>
											Password
										</label>
										<input
											type='password'
											placeholder='*******'
											id='registration_password'
											value={
												password
											}
											onChange={(
												e,
											) =>
												setPassword(
													e
														.target
														.value,
												)
											}
										/>
										<span className='registration_input-msg'></span>
									</p>
								</div>
								<div className='col-md-6'>
									<p className='form-control'>
										<label htmlFor='registration_cpassword'>
											Confirm
											Password
										</label>
										<input
											type='password'
											placeholder='Confirm password'
											id='registration_cpassword'
											value={
												cpassword
											}
											onChange={(
												e,
											) =>
												setCPassword(
													e
														.target
														.value,
												)
											}
										/>
										<span className='registration_input-msg'></span>
									</p>
								</div>
								{/* <div className='col-md-6'>
							<p className='form-control '>
								<label htmlFor='registration_email'>
									Address
								</label>
								<input
									type='email'
									placeholder='Work Email address'
									id='registration_email'
									value={email}
									onChange={(e) =>
										setEmail(
											e.target
												.value,
										)
									}
								/>
								<span className='registration_input-msg'>
									{error}
								</span>
							</p>
						</div>
						<div className='col-md-6'>
							<p className='form-control'>
								<label htmlFor='registration_mobile'>
									Mobile Number
								</label>
								<input
									type='number'
									placeholder='Mobile Number'
									id='registration_mobile'
									value={mobile}
									onChange={(e) =>
										setMobile(
											e.target
												.value,
										)
									}
								/>
								<span className='registration_input-msg'></span>
							</p>
						</div>
						<div className='col-md-12'>
							<p className='form-control'>
								<label htmlFor='registration_compnay_name'>
									Company Name
								</label>
								<input
									type='text'
									placeholder='Company Name'
									id='registration_compnay_name'
									value={company}
									onChange={(e) =>
										setCompany(
											e.target
												.value,
										)
									}
								/>
								<span className='registration_input-msg'></span>
							</p>
						</div>
						<div className='col-md-6'>
							<p className='form-control'>
								<label htmlFor='registration_password'>
									Password
								</label>
								<input
									type='password'
									placeholder='*******'
									id='registration_password'
									value={password}
									onChange={(e) =>
										setPassword(
											e.target
												.value,
										)
									}
								/>
								<span className='registration_input-msg'></span>
							</p>
						</div>
						<div className='col-md-6'>
							<p className='form-control'>
								<label htmlFor='registration_cpassword'>
									Confirm Password
								</label>
								<input
									type='password'
									placeholder='Confirm password'
									id='registration_cpassword'
									value={cpassword}
									onChange={(e) =>
										setCPassword(
											e.target
												.value,
										)
									}
								/>
								<span className='registration_input-msg'></span>
							</p>
						</div> */}
							</div>
							{/* <button
						type='button'
						onClick={(e) => formSubmit(e)}>
						Register Now
					</button> */}
						</div>
					</Styles>
				</div>
				<div className='col-md-4'>
					<div
						className={`px-9 py-3 mt-2 mb-3 card-rounded w-100`}
						// style={{ backgroundColor: '#f3f4f5' }}
					>
						<h3
							className='m-0 fw-bold fs-4'
							style={{ color: '#454646' }}>
							Project Summary
						</h3>
						<div className='d-flex text-center justify-content-between flex-row pt-2'>
							<span className='fs-6 fw-bold'>
								Requested Responses
							</span>
							<span className='fw-bold fs-6'>
								{' '}
								{5}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-2'>
							<span className='fs-6 fw-bold'>
								Solution Price :{' '}
							</span>
							<span className='fw-bold fs-6'>
								{' '}
								{1100}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-2'>
							<span className='fs-6 fw-bold'>
								Sub Total :{' '}
							</span>
							<span className='fw-bold fs-6'>
								{' '}
								{5500}
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fs-6 fw-bold'>
								Tax (18%):{' '}
							</span>
							<span className='fw-bold fs-6'>
								{' '}
								startDate
							</span>
						</div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fs-6 fw-bold'>
								Total :{' '}
							</span>
							<span className='fw-bold fs-6'>
								{' '}
								cdcd
							</span>
						</div>
						<div
							style={{
								border: '1px solid #1789E4',
							}}></div>
						<div className='d-flex text-center justify-content-between flex-row pt-0'>
							<span className='fs-6 fw-bold'>
								Total :{' '}
							</span>
							<span className='fw-bold fs-6'>
								{' '}
								cdcd
							</span>
						</div>
					</div>
				</div>
			</div>
		
	);
};

export default RegistrationStepper;

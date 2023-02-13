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
		<div className='w-100'>
			<Toaster
				position='top-right'
				reverseOrder={false}
				toastOptions={{
					style: {
						fontSize: '14px',
					},
				}}
			/>
			<div className='d-flex justify-content-between'>
				<div className='text-black fw-bold fs-2'>
					Registration
				</div>
				<div className='login'>
					<h4 className='text-gray-400 fw-bold fs-6'>
						Already Have't Account{' '}
						<Link
							className='text-blue-300 fw-bold fs-6'
							to={{
								pathname: '/login',

								state: { prev: 'stepperReg' },
							}}>
							Login
						</Link>
					</h4>
				</div>
			</div>
			<Styles>
				<form id='form_registration' className='form w-50'>
					<div className='formGroup'>
						<p className='form-control'>
							<label htmlFor='registration_fname'>
								First Name
							</label>
							<input
								type='text'
								placeholder='First name'
								id='registration_fname'
								value={firstName}
								onChange={(e) =>
									setFirstName(
										e.target.value,
									)
								}
							/>
							<span className='registration_input-msg'></span>
						</p>
					</div>
					<div className='formGroup'>
						<p className='form-control'>
							<label htmlFor='registration_lname'>
								Last Name
							</label>
							<input
								type='text'
								placeholder='Last name'
								id='registration_lname'
								value={lastName}
								onChange={(e) =>
									setLastName(
										e.target.value,
									)
								}
							/>
							<span className='registration_input-msg'></span>
						</p>
					</div>
					<p className='form-control'>
						<label htmlFor='registration_email'>
							Work Email Address
						</label>
						<input
							type='email'
							placeholder='Work Email address'
							id='registration_email'
							value={email}
							onChange={(e) =>
								setEmail(e.target.value)
							}
						/>
						<span className='registration_input-msg'>
							{error}
						</span>
					</p>
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
								setMobile(e.target.value)
							}
						/>
						<span className='registration_input-msg'></span>
					</p>
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
								setCompany(e.target.value)
							}
						/>
						<span className='registration_input-msg'></span>
					</p>
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
								setPassword(e.target.value)
							}
						/>
						<span className='registration_input-msg'></span>
					</p>
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
								setCPassword(e.target.value)
							}
						/>
						<span className='registration_input-msg'></span>
					</p>
					<button
						type='button'
						onClick={(e) => formSubmit(e)}>
						Register Now
					</button>
				</form>
			</Styles>
		</div>
	);
};

export default RegistrationStepper;

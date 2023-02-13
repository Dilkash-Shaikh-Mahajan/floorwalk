import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/Footer';
import { Styles } from './styles/account.js';
import axios from 'axios';
function Register() {
	let history = useHistory();

	const backendURL = `http://54.147.49.251/api`;
	useEffect(() => {
		const form = document.getElementById('form_registration');
		const fname = document.getElementById('registration_fname');
		const lname = document.getElementById('registration_lname');
		const email = document.getElementById('registration_email');
		const mobile = document.getElementById('registration_mobile');
		const companyName = document.getElementById(
			'registration_compnay_name',
		);
		const password = document.getElementById('registration_password');
		const cpassword = document.getElementById('registration_cpassword');

		form.addEventListener('submit', formSubmit);

		async function formSubmit(e) {
			e.preventDefault();

			const fnameValue = fname.value.trim();
			const lnameValue = lname.value.trim();
			const emailValue = email.value.trim();
			const mobileValue = mobile.value.trim();
			const companyNameValue = companyName.value.trim();
			const passwordValue = password.value.trim();
			const cpasswordValue = cpassword.value.trim();

			if (fnameValue === '') {
				setError(fname, "First name can't be blank");
			} else {
				setSuccess(fname);
			}

			if (lnameValue === '') {
				setError(lname, "Last name can't be blank");
			} else {
				setSuccess(lname);
			}

			if (emailValue === '') {
				setError(email, "Email can't be blank");
			} else if (!isEmail(emailValue)) {
				setError(email, 'Not a valid email');
			} else {
				setSuccess(email);
			}
			if (mobileValue === '') {
				setError(mobile, "Mobile Number can't be blank");
			} else {
				setSuccess(mobile);
			}

			if (passwordValue === '') {
				setError(password, "Password can't be blank");
			} else {
				setSuccess(password);
			}

			if (
				cpasswordValue === '' ||
				passwordValue !== cpasswordValue
			) {
				setError(cpassword, "Password doesn't match");
			} else {
				setSuccess(cpassword);
			}
			const formData = {
				email: emailValue,
				first_name: fnameValue,
				last_name: lnameValue,
				company: companyNameValue,
				phone_number: mobileValue,
				password: passwordValue,
				password2: cpasswordValue,
			};
			let config = {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods':
						'DELETE, POST, GET, OPTIONS',
				},
			};
			console.log(formData);
			const registerData = await axios.post(
				`${backendURL}/register`,
				{
					email: emailValue,
					first_name: fnameValue,
					last_name: lnameValue,
					company: companyNameValue,
					phone_number: mobileValue,
					password: passwordValue,
					password2: cpasswordValue,
				},
				// config,
			);
			console.log(registerData);
			if (registerData.status === 201) {
				history.push('/login');
			}
		}

		function setError(input, message) {
			const formControl = input.parentElement;
			const errorMsg = formControl.querySelector(
				'.registration_input-msg',
			);
			formControl.className = 'form-control text-left error';
			errorMsg.innerText = message;
		}

		function setSuccess(input) {
			const formControl = input.parentElement;
			formControl.className = 'form-control success';
		}

		function isEmail(email) {
			return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
				email,
			);
		}
	});

	return (
		<Styles>
			{/* Main Wrapper */}
			<div className='main-wrapper registration-page'>
				{/* Header 2 */}
				<HeaderTwo />

				{/* Breadcroumb */}
				<BreadcrumbBox title='Registration' />

				{/* Registration Area */}
				<section className='registration-area'>
					<Container>
						<Row>
							<Col md='12'>
								<div className='registration-box'>
									<div className='registration-title text-center'>
										<h3>
											Registration
										</h3>
									</div>
									<form
										id='form_registration'
										className='form'>
										<p className='form-control'>
											<label htmlFor='registration_fname'>
												First
												Name
											</label>
											<input
												type='text'
												placeholder='First name'
												id='registration_fname'
											/>
											<span className='registration_input-msg'></span>
										</p>
										<p className='form-control'>
											<label htmlFor='registration_lname'>
												Last
												Name
											</label>
											<input
												type='text'
												placeholder='Last name'
												id='registration_lname'
											/>
											<span className='registration_input-msg'></span>
										</p>
										<p className='form-control'>
											<label htmlFor='registration_email'>
												Work
												Email
												Address
											</label>
											<input
												type='email'
												placeholder='Work Email address'
												id='registration_email'
											/>
											<span className='registration_input-msg'></span>
										</p>
										<p className='form-control'>
											<label htmlFor='registration_mobile'>
												Mobile
												Number
											</label>
											<input
												type='number'
												placeholder='Mobile Number'
												id='registration_mobile'
											/>
											<span className='registration_input-msg'></span>
										</p>
										<p className='form-control'>
											<label htmlFor='registration_compnay_name'>
												Company
												Name
											</label>
											<input
												type='text'
												placeholder='Company Name'
												id='registration_compnay_name'
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
											/>
											<span className='registration_input-msg'></span>
										</p>
										<p className='form-control'>
											<label htmlFor='registration_cpassword'>
												Confirm
												Password
											</label>
											<input
												type='password'
												placeholder='Confirm password'
												id='registration_cpassword'
											/>
											<span className='registration_input-msg'></span>
										</p>
										<button>
											Register Now
										</button>
									</form>
									<div className='have_account-btn text-center'>
										<p>
											Already have
											an account?{' '}
											<Link to='/login'>
												Login
												Here
											</Link>
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				{/* Footer 2 */}
				<Footer />
			</div>
		</Styles>
	);
}

export default Register;

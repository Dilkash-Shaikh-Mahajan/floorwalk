import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/Footer';
import { Styles } from './styles/account.js';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
	accessTokenFunction,
	refreshTokenFunction,
	setLoggedUser,
} from '../../store/actions/Auth';
function Login() {
	let history = useHistory();
	let location = useLocation();
	console.log(location);
	const dispatch = useDispatch();
	const backendURL = `http://54.147.49.251/api`;
	useEffect(() => {
		const form = document.getElementById('form_login');
		const user = document.getElementById('login_user');
		const password = document.getElementById('login_password');

		form.addEventListener('submit', formSubmit);

		async function formSubmit(e) {
			e.preventDefault();

			const userValue = user.value.trim();
			const passwordValue = password.value.trim();

			if (userValue === '') {
				setError(user, "User can't be blank");
			} else {
				setSuccess(user);
			}

			if (passwordValue === '') {
				setError(password, "Password can't be blank");
			} else {
				setSuccess(password);
			}

			let config = {
				headers: {
					'Content-Type': 'application/json',
					// 'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods':
						'GET,POST,OPTIONS,DELETE,PUT',
				},
			};
			const registerData = await axios.post(
				`http://54.147.49.251/api/token/`,
				{
					email: userValue,
					password: passwordValue,
				},
			);
			if (registerData.status === 200) {
				dispatch(
					refreshTokenFunction(registerData.data.refresh),
				);
				dispatch(
					accessTokenFunction(registerData.data.refresh),
				);
				dispatch(setLoggedUser(registerData.data));
				sessionStorage.setItem(
					'refressToken',
					registerData.data.refresh,
				);
				sessionStorage.setItem(
					'accessToken',
					registerData.data.access,
				);
				if (location?.state?.prev == 'stepperReg') {
					history.push({
						pathname: '/stepper',

						state: { prev: 'login' },
					});
				} else {
					history.push('/');
				}
			}
			console.log(registerData);
		}

		function setError(input, message) {
			const formControl = input.parentElement;
			const errorMsg =
				formControl.querySelector('.login_input-msg');
			formControl.className = 'form-control text-left error';
			errorMsg.innerText = message;
		}

		function setSuccess(input) {
			const formControl = input.parentElement;
			formControl.className = 'form-control success';
		}
	});

	return (
		<Styles>
			{/* Main Wrapper */}
			<div className='main-wrapper login-page'>
				{/* Header 2 */}
				<HeaderTwo />

				{/* Breadcroumb */}
				<BreadcrumbBox title='Log In' />

				{/* Login Area */}
				<section className='login-area'>
					<Container>
						<Row>
							<Col md='12'>
								<div className='login-box'>
									<div className='login-title text-center'>
										<h3>Log In</h3>
									</div>
									<form
										id='form_login'
										className='form'>
										<p className='form-control'>
											<label htmlFor='login_user'>
												User
												Name
											</label>
											<input
												type='text'
												placeholder='Username'
												id='login_user'
											/>
											<span className='login_input-msg'></span>
										</p>
										<p className='form-control'>
											<label htmlFor='login_password'>
												Password
											</label>
											<input
												type='password'
												placeholder='*******'
												id='login_password'
											/>
											<span className='login_input-msg'></span>
										</p>
										<button
										// onClick={(
										// 	e,
										// ) =>
										// 	formSubmit(
										// 		e,
										// 	)
										// }
										>
											Log In
										</button>
										<div className='save-forget-password d-flex justify-content-between'>
											<div className='save-passowrd'>
												<label htmlFor='save_password'>
													<input
														type='checkbox'
														id='save_password'
														className='check-box'
													/>
													Save
													Password
												</label>
											</div>
											<div className='forget-password'>
												<Link
													to={
														process
															.env
															.PUBLIC_URL +
														'/'
													}>
													Forget
													Password?
												</Link>
											</div>
										</div>
										<div className='not_account-btn text-center'>
											<p>
												Haven't
												Any
												Account
												Yet?{' '}
												<Link
													to={
														process
															.env
															.PUBLIC_URL +
														'/registration'
													}>
													Click
													Here
												</Link>
											</p>
										</div>
										<div className='social-login text-center'>
											<p>
												Login
												With
												Social
											</p>
											<ul className='list-unstyled list-inline'>
												<li className='list-inline-item'>
													<a
														href={
															process
																.env
																.PUBLIC_URL +
															'/'
														}>
														<i className='fab fa-google'></i>{' '}
														Google
													</a>
												</li>
												<li className='list-inline-item'>
													<a
														href={
															process
																.env
																.PUBLIC_URL +
															'/'
														}>
														<i className='fab fa-facebook-f'></i>{' '}
														Facebook
													</a>
												</li>
												<li className='list-inline-item'>
													<a
														href={
															process
																.env
																.PUBLIC_URL +
															'/'
														}>
														<i className='fab fa-twitter'></i>{' '}
														Twitter
													</a>
												</li>
											</ul>
										</div>
									</form>
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

export default Login;

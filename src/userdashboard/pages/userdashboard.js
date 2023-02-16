import React, { Component } from 'react';
import { useSelector } from 'react-redux';

const userdashboard = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<div>
			<div
				style={{
					border: '1px solid #D2D9DC',
					marginTop: '50px',
				}}></div>
			<div
				className='userDashboard'
				style={{ paddingLeft: '80px' }}>
				<div style={{ display: 'flex' }}>
					<div className='coffeImg'>
						<img
							src='/media/icons/duotune/CoffeeCup.png'
							alt='Coffe Image'
						/>
					</div>
					<div
						className='greet'
						style={{ margin: '30px 0' }}>
						{/* <h3 style={{ fontSize: '16px' }}>
							Tuesday, August 29th
						</h3> */}
						<h1 style={{ fontSize: '28px' }}>
							Good Morning,{' '}
							{user.first_name +
								' ' +
								user.last_name}
						</h1>
					</div>
				</div>
				<div
					style={{
						border: '1px solid #D2D9DC',
					}}></div>

				{/* <div className='card'>
				<h4
					style={{
						fontSize: '18px',
						marginTop: '20px',
						fontWeight: '500',
					}}>
					Let’s see the Audit process
				</h4>
				<h4
					style={{
						fontSize: '24px',
						fontWeight: '500',
						margin: '20px 0',
					}}>
					Audit Summary
				</h4>
				<div className='row gx-5 w-100'>
					<div className='col-md-3'>
						<div className='card'>
							<div
								className='center'
								style={{
									padding: '25px',
									display: 'flex',
									justifyContent: 'center',
									fontSize: '52px',
									fontWeight: 400,
									fontFamily: 'Montserrat',
									color: '#031721',
								}}>
								48
							</div>
							<ul className='list-group list-group-flush'>
								<li
									className='list-group-item'
									style={{
										fontSize: '16px',
										fontWeight: '500',
										textAlign: 'center',
										lineHeight: '20px',
										color: '#000',
									}}>
									Total Completed{' '}
									<i
										className='fas fa-exclamation-circle ms-2 fs-7'
										data-bs-toggle='tooltip'
										style={{
											color: '#007DC1',
										}}
										title='Monthly billing will be based on your account plan'></i>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='card'>
							<div
								className='center'
								style={{
									padding: '25px',
									display: 'flex',
									justifyContent: 'center',
									fontSize: '52px',
									fontWeight: 400,
									fontFamily: 'Montserrat',
									color: '#031721',
								}}>
								5
							</div>
							<ul className='list-group list-group-flush'>
								<li
									className='list-group-item'
									style={{
										fontSize: '16px',
										fontWeight: '500',
										textAlign: 'center',
										lineHeight: '20px',
										color: '#000',
									}}>
									Total In-Progress
									<i
										className='fas fa-exclamation-circle ms-2 fs-7'
										data-bs-toggle='tooltip'
										style={{
											color: '#007DC1',
										}}
										title='Monthly billing will be based on your account plan'></i>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='card'>
							<div
								className='center'
								style={{
									padding: '25px',
									display: 'flex',
									justifyContent: 'center',
									fontSize: '52px',
									fontWeight: 400,
									fontFamily: 'Montserrat',
									color: '#031721',
								}}>
								6
							</div>
							<ul className='list-group list-group-flush'>
								<li
									className='list-group-item'
									style={{
										fontSize: '16px',
										fontWeight: '500',
										textAlign: 'center',
										lineHeight: '20px',
										color: '#000',
									}}>
									Total QA-Review{' '}
									<i
										className='fas fa-exclamation-circle ms-2 fs-7'
										data-bs-toggle='tooltip'
										style={{
											color: '#007DC1',
										}}
										title='Monthly billing will be based on your account plan'></i>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='card'>
							<div
								className='center'
								style={{
									padding: '25px',
									display: 'flex',
									justifyContent: 'center',
									fontSize: '52px',
									fontWeight: 400,
									fontFamily: 'Montserrat',
									color: '#031721',
								}}>
								13
							</div>
							<ul className='list-group list-group-flush'>
								<li
									className='list-group-item'
									style={{
										fontSize: '16px',
										fontWeight: '500',
										textAlign: 'center',
										lineHeight: '20px',
										color: '#000',
									}}>
									Total Remaining{' '}
									<i
										className='fas fa-exclamation-circle ms-2 fs-7'
										data-bs-toggle='tooltip'
										style={{
											color: '#007DC1',
										}}
										title='Monthly billing will be based on your account plan'></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<h4
					style={{
						fontSize: '24px',
						fontWeight: '500',
						margin: '30px 0',
					}}>
					Audit Insights
				</h4>
				<div
					className='card mb-18'
					style={{
						marginRight: '40px',
						borderRadius: '8px',
					}}>
					<div className='row g-0 w-100 '>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									Cycle Name
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									Planned Audits
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									In-Progress
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									QA Review
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									Client Review
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											padding: '18px 0',
											color: '#000',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									Accepted
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}>
										{' '}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<h4
					style={{
						fontSize: '24px',
						fontWeight: '500',
						margin: '30px 0',
					}}>
					Recent Projects
				</h4>
				<div
					className='card mb-18'
					style={{
						marginRight: '40px',
						borderRadius: '8px',
					}}>
					<div className='row g-0 w-100 '>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									Cycle Name
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									Planned Audits
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									In-Progress
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									QA Review
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									Client Review
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											padding: '18px 0',
											color: '#000',
										}}></li>
								</ul>
							</div>
						</div>
						<div className='col-md-2'>
							<div
								style={{
									borderRight:
										'1px solid #e9e9e9',
									background: '#F0FAFF',
								}}>
								<div
									className='center'
									style={{
										color: '#031721',
										textAlign: 'center',
										padding: '10px 0',
										fontWeight: 500,
										fontSize: '16px',
									}}>
									Accepted
								</div>
								<ul className='list-group list-group-flush'>
									<li
										className='list-group-item'
										style={{
											fontSize: '16px',
											fontWeight:
												'500',

											lineHeight:
												'20px',
											color: '#000',
											padding: '18px 0',
										}}>
										{' '}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

					</div> */}
			</div>
		</div>
	);
};

export default userdashboard;

import { Link, useLocation, useParams } from 'react-router-dom';
import './../../verticalstepper/sass/style.scss';
const Sidebar = () => {
	const { pathname } = useLocation();

	// The current location.
	let currentPageId = pathname.split('/')[2];
	let sidebarItems = [
		{
			number: 1,
			title: 'Project Setup',
			description: 'Setup Your Project',
		},
		{
			number: 2,
			title: 'Project Targeting',
			description: 'Targeting Audience',
		},
		{
			number: 3,
			title: 'Project Details',
			description: 'Your Project Related Info',
		},
		{
			number: 4,
			title: 'Final Review',
			description: 'Reviews Details',
		},
		{
			number: 5,
			title: 'Registration',
			description: 'Users Related Info',
		},
	];
	return (
		<div
			className='app-content flex-column-fluid'
			style={{ backgroundColor: '#f5f8fa' }}>
			<div
				id='kt_app_content_container'
				className='app-container container-fluid'>
				<div
					className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
					id='kt_create_account_stepper'>
					<div
						className={
							'card d-flex justify-content-center justify-content-xl-start flex-row'
						}
						style={{
							border: 0,
							minWidth: '24%',
						}}>
						{/* begin::Wrapper*/}
						<div className='card-body '>
							{/* begin::Nav*/}
							<div className='stepper-nav'>
								{sidebarItems.map(
									(content, index) => (
										<Link
											key={index}
											to={`/new_stepper/${content.number}`}>
											<div
												className={
													parseInt(
														currentPageId,
													) ===
													content.number
														? 'stepper-item current'
														: parseInt(
																currentPageId,
														  ) >
														  content.number
														? 'stepper-item completed'
														: 'stepper-item'
												}
												data-kt-stepper-element='nav'>
												{/* begin::Wrapper*/}
												<div className='stepper-wrapper'>
													{/* begin::Icon*/}
													<div className='stepper-icon w-40px h-40px'>
														<i className='stepper-check fas fa-check'></i>
														<span className='stepper-number'>
															{
																content.number
															}
														</span>
													</div>
													{/* end::Icon*/}

													{/* begin::Label*/}
													<div className='stepper-label'>
														<h3 className='stepper-title'>
															{
																content.title
															}
														</h3>

														<div className='stepper-desc fw-semibold'>
															{
																content.description
															}
														</div>
													</div>
													{/* end::Label*/}
												</div>
												{/* end::Wrapper*/}

												{/* begin::Line*/}
												{content.number ===
												5 ? (
													''
												) : (
													<div className='stepper-line h-40px'></div>
												)}
												{/* end::Line*/}
											</div>
										</Link>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

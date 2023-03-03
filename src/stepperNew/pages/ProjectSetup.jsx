import React, { FC, useState } from 'react';
import { Field, ErrorMessage, Formik, Form } from 'formik';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
	firstPageSchemas,
	projectTargetInit,
	projectTargetSchema,
	setUpInits,
} from '../formHelper';
import { clearConfigCache } from 'prettier';
import { KTSVG } from '../helpers';
import { firstPageFunction } from '../../store/actions/stepperFormData';
import { useHistory } from 'react-router-dom';

const ProductSetup = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { interestArea, industriesData } = useSelector(
		(store) => store.stepper,
	);
	const { firstPage } = useSelector((state) => state.stepperData);
	const [initValues, setInitValues] = useState(firstPage);
	React.useEffect(() => {
		if (!firstPage) {
			setInitValues(setUpInits);
		}
	}, []);
	const [audiencePreference, setAudiencePreference] = useState(false);
	const handleSubmit = (value) => {
		dispatch(firstPageFunction(value));
		history.push('/new_stepper/2');
	};
	return (
		<div className='w-100 newStepperRightSide'>
			<div className='pb-10 pb-lg-15'>
				<h2 className='fw-bolder text-dark'>Project Setup</h2>
			</div>
			<Formik
				validationSchema={firstPageSchemas}
				initialValues={initValues}
				onSubmit={(value) => handleSubmit(value)}>
				{({ setFieldValue }) => (
					<Form
						className='w-100 w-xl-700px'
						noValidate
						id='kt_create_account_form'>
						<div className='mb-10 fv-row'>
							<label className='form-label mb-3'>
								What would you like to name your
								project?
							</label>

							<Field
								type='text'
								className='form-control form-control-lg form-control-solid'
								name='projectName'
							/>
							<div className='text-danger mt-2'>
								<ErrorMessage name='projectName' />
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 fv-row'>
								<div className='mb-4'>
									<label className='form-label mb-3'>
										Start Date
									</label>

									<Field
										type='Date'
										className='form-control form-control-lg form-control-solid'
										name='startDate'
									/>
									<div className='text-danger mt-2'>
										<ErrorMessage name='startDate' />
									</div>
								</div>
							</div>
							<div className='col-lg-6 fv-row'>
								<div className='mb-4'>
									<label className='form-label mb-3'>
										End Date
									</label>

									<Field
										type='Date'
										className='form-control form-control-lg form-control-solid'
										name='endDate'
									/>

									<div className='text-danger mt-2'>
										<ErrorMessage name='endDate' />
									</div>
								</div>
							</div>
						</div>

						<div className='fv-row mb-10'>
							<label className='form-label required'>
								Industry Selection
							</label>

							<Field
								as='select'
								name='businessType'
								className='form-select form-select-lg form-select-solid'>
								<option></option>
								{industriesData?.map(
									(industry, i) => (
										<option
											key={i}
											value={
												industry.industry_name
											}>
											{
												industry.industry_name
											}
										</option>
									),
								)}
							</Field>
							<div className='text-danger mt-2'>
								<ErrorMessage name='businessType' />
							</div>
						</div>

						<div className='mb-0 fv-row'>
							<label className='d-flex align-items-center form-label mb-5'>
								<h2 className='fw-bolder text-dark'>
									Demographics
								</h2>
								<i
									className='fas fa-exclamation-circle ms-2 fs-7'
									data-bs-toggle='tooltip'
									title='Monthly billing will be based on your account plan'></i>
							</label>

							<div className='mb-2'>
								<div className='d-flex'>
									{/* <div className='col-lg-6 fv-row'> */}
									<label className='d-flex flex-stack mb-5 me-4 cursor-pointer'>
										<span className='form-check d-flex align-items-center '>
											<Field
												className='form-check-input'
												type='radio'
												name='accountPlan'
												value='0'
												onClick={() => {
													setAudiencePreference(
														false,
													);
												}}
											/>
										</span>
										<span className='d-flex align-items-center me-2'>
											{/* <span className='symbol symbol-50px me-6'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/finance/fin001.svg'
                    className='svg-icon-1 svg-icon-gray-600'
                  />
                </span>
              </span> */}

											<span className='d-flex flex-column'>
												<span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
													No
													Audience
													Preference
												</span>
												{/* <span className='fs-6 fw-bold text-gray-400'>
                  Use images to enhance your post flow
                </span> */}
											</span>
										</span>
									</label>
									{/* </div> */}
									{/* <div className='col-lg-6 fv-row'> */}
									<label className='d-flex flex-stack mb-5 cursor-pointer'>
										<span className='form-check d-flex align-items-center '>
											<Field
												className='form-check-input'
												type='radio'
												name='accountPlan'
												value='1'
												onClick={() => {
													setAudiencePreference(
														true,
													);
												}}
											/>
										</span>
										<span className='d-flex align-items-center me-2'>
											{/* <span className='symbol symbol-50px me-6'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/graphs/gra006.svg'
                    className='svg-icon-1 svg-icon-gray-600'
                  />
                </span>
              </span> */}

											<span className='d-flex flex-column'>
												<span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
													Audience
													Preference
												</span>
												{/* <span className='fs-6 fw-bold text-gray-400'>Use images to your post time</span> */}
											</span>
										</span>
									</label>
									{/* </div> */}
								</div>
							</div>

							{audiencePreference && (
								<div className='row'>
									<div className='col-lg-3 fv-row'>
										<label className='form-label fw-bold fs-5 mb-3'>
											Age Range
										</label>

										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='ageRange'
												type='checkbox'
												value='18 and Above'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												18 and
												Above
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='ageRange'
												type='checkbox'
												value='18 - 25'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												18 - 25
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='ageRange'
												type='checkbox'
												value='25 - 40'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												25 - 40
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='ageRange'
												type='checkbox'
												value={
													'40 - 55'
												}
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												40 - 55
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='ageRange'
												type='checkbox'
												value='55 and above'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												55 and
												above
											</span>
										</label>
									</div>
									<div className='col-lg-3 fv-row'>
										<label className='form-label fw-bold fs-5 mb-3'>
											Occupation
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='occupation'
												type='checkbox'
												value='Student'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												Student
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='occupation'
												type='checkbox'
												value='Service'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												Service
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='occupation'
												type='checkbox'
												value='Self-Employed'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												Self-Employed
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='occupation'
												type='checkbox'
												value='Business'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												Business
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='occupation'
												type='checkbox'
												value='Unemployed'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												Unemployed
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='occupation'
												type='checkbox'
												value='Retired'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												Retired
											</span>
										</label>
									</div>
									<div className='col-lg-3 fv-row'>
										<label className='form-label fw-bold fs-5 mb-3'>
											Income Range
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='incomeRange'
												type='checkbox'
												value='less Than 3 Lacs'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												Less
												Than 3
												Lacs
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='incomeRange'
												type='checkbox'
												value='INR. 1 lac - INR 3 lacs'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												INR. 1
												lac -
												INR 3
												lacs
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='incomeRange'
												type='checkbox'
												value='INR. 3 lacs - 8 lacs'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												INR. 3
												lacs - 8
												lacs
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='incomeRange'
												type='checkbox'
												value='INR 8 lacs - 15 Lacs'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												INR 8
												lacs -
												15 Lacs
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='incomeRange'
												type='checkbox'
												value='15 Lacs and Above'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												15 Lacs
												and
												Above
											</span>
										</label>
									</div>
									<div className='col-lg-3 fv-row'>
										<label className='form-label fw-bold fs-5 mb-3'>
											Car Price
											Range
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='carPriceRange'
												type='checkbox'
												value='Less than INR. 3 lacs'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												Less
												than
												INR. 3
												lacs
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='carPriceRange'
												type='checkbox'
												value='INR. 3 lacs - INR. 5 lacs'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												INR. 3
												lacs -
												INR. 5
												lacs
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='carPriceRange'
												type='checkbox'
												value='INR. 5 lacs - INR. 10 lacs'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												INR. 5
												lacs -
												INR. 10
												lacs
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='carPriceRange'
												type='checkbox'
												value='INR. 10 lacs - INR. 15 lacs'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												INR. 10
												lacs -
												INR. 15
												lacs
											</span>
										</label>
										<label className='form-check form-check-solid'>
											<Field
												className='form-check-input'
												name='carPriceRange'
												type='checkbox'
												value='INR. 15 lacs and above'
												// defaultChecked={false}
											/>
											<span className='fw-bold ps-2 fs-6'>
												INR. 15
												lacs and
												above
											</span>
										</label>
									</div>
									<div className='col-lg-3 fv-row mb-20'>
										<label className='form-label fw-bold fs-5 mb-3'>
											Interest Areas
										</label>
										{interestArea?.map(
											(
												interest,
												i,
											) => (
												<label
													className='form-check form-check-solid'
													key={
														i
													}>
													<Field
														className='form-check-input'
														name='solutionInterestAreas'
														type='checkbox'
														value={
															interest.interest_area_name
														}
													/>
													<span className='fw-bold ps-2 fs-6'>
														{
															interest.interest_area_name
														}
													</span>
												</label>
											),
										)}
									</div>
								</div>
							)}

							{/* <div className='row' style={{marginTop:20}}>
        <div className='col-lg-10 fv-row'>
          <div className='mb-4'>
            <label className='form-label mb-3'>Industry Selection</label>

            <select
                  className='form-select form-select-solid form-select-lg'
                  // {...formik.getFieldProps('language')}
                >
                  <option value=''>Select a Industry...</option>
                  <option value='id'>Information Technology</option>
                  <option value='msa'>Mechanical</option>
                  <option value='ca'>Electrical</option>
                  <option value='cs'>Electronics</option>
                  <option value='da'>Chemicals</option>
                  
            
                </select>
          </div>
        </div>
        </div> */}
						</div>
						<div className='d-flex justify-content-end  flex-stack pt-10'>
							<div>
								<button
									type='submit'
									className='btn btn-lg btn-stepper me-3 continueButtonTop'>
									<span className='indicator-label'>
										Continue
									</span>
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ProductSetup;

/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react';
import { KTSVG } from '../helpers';
import { Field, ErrorMessage, Formik, FormikValues, Form } from 'formik';
import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

import { Typeahead } from 'react-bootstrap-typeahead';
import pincodes from '../../data/pincode/pincode';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { projectTargetInit, projectTargetSchema } from '../formHelper';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { secondPageFunction } from '../../store/actions/stepperFormData';
let storeSecondAddress = [];
// storeSecondAddress: any,
// setFinalTargetData: any,
// let finalTargetData;

// let storeFinalData[]; //unused
const ProductTargeting = () => {
	const [modalShow, setModalShow] = React.useState(false);
	const { secondPage } = useSelector((state) => state.stepperData);
	const [finalTargetData, setFinalTargetData] = React.useState(secondPage);
	React.useEffect(() => {
		if (!secondPage) {
			setFinalTargetData([]);
		}
	}, []);
	let storeMainAddress = [];
	const dispatch = useDispatch();
	const history = useHistory();
	const submitStep = (values, actions) => {
		storeMainAddress.push({
			storeAddress: values.storeAddress,
			storeCity: values.storeCity,
			storeName: values.storeName,
			numberOfResponse: values.numberOfResponse,
			storePostal: values.storePostal,
			storeState: values.storeState,
		});
		setFinalTargetData([
			...finalTargetData,
			{
				storeAddress: values.storeAddress,
				storeCity: values.storeCity,
				storeName: values.storeName,
				numberOfResponse: values.numberOfResponse,
				storePostal: values.storePostal,
				storeState: values.storeState,
			},
		]);
		storeSecondAddress.push(...storeMainAddress);
		setModalShow(false);

		let storeData = sessionStorage.getItem('storeData');
		storeData = JSON.parse(storeData);
	};
	const handlePage = () => {
		dispatch(secondPageFunction(finalTargetData));
		history.push('/new_stepper/3');
	};
	return (
		<div className='w-100 newStepperRightSide'>
			<div className='pb-10 pb-lg-12'>
				<h2 className='fw-bolder text-dark'>
					Project Targeting
				</h2>

				<div className='d-flex justify-content-between align-items-center'>
					<div className='text-black-400 mt-4 fw-bold fs-3'>
						Add Store Details
					</div>
					<button
						type='button'
						onClick={() => setModalShow(true)}
						className='btn btn-lg btn-stepper me-3 '
						data-kt-stepper-action='previous'>
						<KTSVG
							path='/media/icons/duotune/arrows/arr009.svg'
							className='svg-icon-4 me-1'
						/>
						Add Store
					</button>
				</div>
			</div>

			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				scrollable={true}
				className='modal-dialog-scrollable mt-16 py-12'
				aria-labelledby='contained-modal-title-vcenter '>
				<Modal.Body>
					<Formik
						validationSchema={projectTargetSchema}
						initialValues={projectTargetInit}
						onSubmit={submitStep}>
						{({ setFieldValue }) => (
							<Form
								className='py-10 w-100 w-xl-700px px-9'
								noValidate
								id='kt_create_account_form'>
								<div className='fv-row mb-10'>
									<label className='form-label required'>
										Store Name
									</label>

									<Field
										name='storeName'
										className='form-control form-control-lg form-control-solid'
									/>
									<div className='text-danger mt-2'>
										<ErrorMessage name='storeName' />
									</div>
								</div>

								<div className='fv-row mb-10'>
									<label className='d-flex align-items-center form-label'>
										<span className='required'>
											Store Address
										</span>
									</label>

									<Field
										name='storeAddress'
										className='form-control form-control-lg form-control-solid'
									/>
									<div className='text-danger mt-2'>
										<ErrorMessage name='storeAddress' />
									</div>
								</div>

								<div className='fv-row mb-10'>
									<label className='d-flex align-items-center form-label'>
										<span className='required'>
											PostalCode
										</span>
									</label>

									<Autocomplete
										className='form-control w-100 form-control-lg form-control-solid'
										fullWidth={true}
										disablePortal
										id='combo-box-demo'
										options={pincodes}
										getOptionLabel={(
											option,
										) => option.pincode}
										onChange={(
											e,
											value,
										) => {
											setFieldValue(
												'storePostal',
												value.pincode,
											);
											setFieldValue(
												'storeCity',
												value.districtname,
											);
											setFieldValue(
												'storeState',
												value.statename,
											);
										}}
										renderInput={(
											params,
										) => (
											<TextField
												className='form-control form-control-lg form-control-solid'
												fullWidth={
													true
												}
												name='storePostal'
												{...params}
												label='Select A Pincode'
											/>
										)}
									/>
									<div className='text-danger mt-2'>
										<ErrorMessage name='storePostal' />
									</div>
								</div>
								<div className='fv-row mb-10'>
									<label className='d-flex align-items-center form-label'>
										<span className='required'>
											City
										</span>
									</label>

									<Field
										name='storeCity'
										className='form-control form-control-lg form-control-solid'
									/>
									<div className='text-danger mt-2'>
										<ErrorMessage name='storeCity' />
									</div>
								</div>

								<div className='fv-row mb-10'>
									<label className='d-flex align-items-center form-label'>
										<span className='required'>
											State
										</span>
									</label>

									<Field
										name='storeState'
										className='form-control form-control-lg form-control-solid'
									/>
									<div className='text-danger mt-2'>
										<ErrorMessage name='storeState' />
									</div>
								</div>
								<div className='fv-row mb-10'>
									<label className='d-flex align-items-center form-label'>
										<span className='required'>
											Number Of
											Response
										</span>
									</label>

									<Field
										name='numberOfResponse'
										className='form-control form-control-lg form-control-solid'
									/>
									<div className='text-danger mt-2'>
										<ErrorMessage name='numberOfResponse' />
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
			<Table bordered className='text-center table'>
				<thead>
					<tr>
						<th className='fw-bold'>SR No.</th>
						<th className='fw-bold'>Store Name</th>
						<th className='fw-bold'>Store Address </th>
						<th className='fw-bold'>City</th>
						<th className='fw-bold'>State</th>
						<th className='fw-bold'>Postal Code</th>
						<th className='fw-bold'>
							Number Of Response
						</th>
					</tr>
				</thead>
				<tbody>
					{finalTargetData?.map((store, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{store.storeName}</td>
								<td>{store.storeAddress}</td>
								<td>{store.storeCity}</td>
								<td>{store.storeState}</td>
								<td>{store.storePostal}</td>
								<td>
									{store.numberOfResponse}
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<div
				className='d-flex position-absolute  flex-stack pt-10'
				style={{
					width: '90%',
					bottom: '2%',
				}}>
				<div className='mr-2'>
					<button
						onClick={() => history.goBack()}
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
					<button
						onClick={handlePage}
						className='btn btn-lg btn-stepper me-3 continueButtonTop'>
						<span className='indicator-label'>
							Continue
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductTargeting;

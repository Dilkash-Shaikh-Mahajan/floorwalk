/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { KTSVG } from '../helpers';
import { Field, ErrorMessage, Formik, FormikValues, Form } from 'formik';
import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import {
	IProjectTarget,
	projectTargetInit,
	projectTargetSchema,
} from '../CreateAccountWizardHelper';

// let storeSecondAddress: any = [];
type Props = {
	storeSecondAddress: any;
	setFinalTargetData: any;
	finalTargetData: any;
};
let storeFinalData: string[];
const ProductTargeting: FC<Props> = ({
	storeSecondAddress,
	setFinalTargetData,
	finalTargetData,
}: Props) => {
	const [modalShow, setModalShow] = React.useState(false);
	let storeMainAddress: any = [];
	const submitStep = (values: any, actions: FormikValues) => {
		storeMainAddress.push({
			storeAddress: values.storeAddress,
			storeCity: values.storeCity,
			storeName: values.storeName,
			storePostal: values.storePostal,
			storeState: values.storeState,
		});
		setFinalTargetData([
			...finalTargetData,
			{
				storeAddress: values.storeAddress,
				storeCity: values.storeCity,
				storeName: values.storeName,
				storePostal: values.storePostal,
				storeState: values.storeState,
			},
		]);
		storeSecondAddress.push(...storeMainAddress);

		let storeData: any = sessionStorage.getItem('storeData');
		storeData = JSON.parse(storeData);
	};
	return (
		<div className='w-100'>
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
						className='btn btn-lg btn-light-primary me-3 '
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
						{({ values }) => (
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

									{/* <div className='form-text'>
            Customers will see this shortened version of your statement descriptor
          </div> */}
								</div>

								<div className='fv-row mb-10'>
									<label className='d-flex align-items-center form-label'>
										<span className='required'>
											PostalCode
										</span>
									</label>

									<Field
										name='storePostal'
										type='number'
										className='form-control form-control-lg form-control-solid'
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

								<button
									type='submit'
									onClick={() =>
										setModalShow(false)
									}
									className='btn btn-lg btn-primary me-3 continueButtonTop'>
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
					</tr>
				</thead>
				<tbody>
					{finalTargetData?.map(
						(store: any, index: number) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{store.storeName}</td>
									<td>
										{store.storeAddress}
									</td>
									<td>{store.storeCity}</td>
									<td>
										{store.storeState}
									</td>
									<td>
										{store.storePostal}
									</td>
								</tr>
							);
						},
					)}
				</tbody>
			</Table>
		</div>
	);
};

export { ProductTargeting };

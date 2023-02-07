/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { KTSVG } from '../helpers';
import { Modal } from 'react-bootstrap';
import { Field, ErrorMessage, Formik, Form } from 'formik';
import { createPortal } from 'react-dom';

type Props = {
	show: boolean;
	handleClose: () => void;
	handleAdd: () => void;
};

const modalsRoot = document.getElementById('root-modals') || document.body;
const AddProjectModel = ({ show, handleClose, handleAdd }: Props) => {
	const initialValues = {
		itemDescription: '',
		productPrice: '',
		productPhoto: '',
	};
	const submitStep = (values: any) => {
		console.log(values);
	};
	return createPortal(
		<Modal
			id='kt_modal_create_app'
			aria-hidden='true'
			dialogClassName='modal-dialog modal-dialog-centered mw-778px'
			show={show}
			onHide={handleClose}
			backdrop={true}>
			<div className='modal-header mx-1'>
				<h4>New Project Details</h4>
				{/* begin::Close */}
				<div
					className='btn btn-sm btn-icon btn-active-color-primary'
					onClick={handleClose}>
					<KTSVG
						className='svg-icon-1'
						path='/media/icons/duotune/arrows/arr061.svg'
					/>
				</div>
				{/* end::Close */}
			</div>
			<Formik initialValues={initialValues} onSubmit={submitStep}>
				{({ values }: any) => (
					<Form
						className='py-10 w-100 w-xl-700px px-9'
						noValidate
						id='kt_create_account_form'>
						<div className='modal-body py-lg-10 px-lg-10'>
							<div className='fv-row mb-10'>
								<label className='form-label required'>
									Item Description
								</label>

								<Field
									name='itemDescription'
									className='form-control form-control-lg form-control-solid'
								/>
								<div className='text-danger mt-2'>
									<ErrorMessage name='itemDescription' />
								</div>
							</div>
							{/* {values} */}
							<div className='fv-row mb-10'>
								<label className='form-label required'>
									Product Price
								</label>

								<Field
									name='productPrice'
									className='form-control form-control-lg form-control-solid'
								/>
								<div className='text-danger mt-2'>
									<ErrorMessage name='productPrice' />
								</div>
							</div>

							<div className='fv-row mb-10'>
								<label className='form-label required'>
									Product Photo
								</label>

								<Field
									name='productPhoto'
									type='file'
									multiple
									className='form-control form-control-lg form-control-solid'
								/>
								<div className='text-danger mt-2'>
									<ErrorMessage name='productPhoto' />
								</div>
							</div>

							<div className='d-flex justify-content-end'>
								<button
									type='button'
									className='btn btn-mb btn-light btn-active-light-primary me-2'
									onClick={handleClose}>
									Cancel
								</button>

								<button
									type='button'
									className='btn btn-mb btn-primary'
									onClick={handleAdd}>
									Add
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</Modal>,
		modalsRoot,
	);
};

export { AddProjectModel };

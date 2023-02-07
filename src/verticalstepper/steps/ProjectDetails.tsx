/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react';
import { KTSVG, toAbsoluteUrl } from '../helpers';
import { Field, ErrorMessage, Formik, Form } from 'formik';
import React from 'react';
import { AddProjectModel } from './index';
import { Carousel, Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import { projectDetailSchema } from '../CreateAccountWizardHelper';
let arrayFileFinals: any[];
let fileArray: any = [];
let fileObject: any = [];
let finalfileArray: any[];
let fileArrayIndex = 0;

type Props = {
	setFinalFormData: any;
	finalFormData: any;
};
const ProductDetails: FC<Props> = ({
	setFinalFormData,
	finalFormData,
}: any) => {
	const [projectData, setProjectData] = useState([{}]);
	const [showAddProjectModal, setshowAddProjectModal] =
		useState<boolean>(false);
	const [fileObj, setFileObj] = useState<any>([]);
	const [fileFinalArray, setFileArray] = useState<any>([]);
	const [productPrice, setProductPrice] = useState<any>('');
	const [itemDescription, setItemDescription] = useState<any>('');
	const [filesArrayIndex, setFilesArrayIndex] = useState<number>(0);
	function addData() {
		projectData.push({});
		setProjectData(projectData);
		setshowAddProjectModal(false);
	}
	const initialValues = {
		itemDescription: '',
		productPrice: '',
		productPhoto: '',
	};

	function uploadMultipleFiles(e: any) {
		// fileArrayIndex = ++fileArrayIndex;

		setFileObj('');
		fileObject.push(e.target.files);

		for (let i = 0; i < fileObject[filesArrayIndex].length; i++) {
			fileArray.push(
				URL.createObjectURL(fileObject[filesArrayIndex][i]),
			);
		}

		setFileObj(fileArray);
		fileArray = [];
	}

	function uploadFiles(e: any) {
		e.preventDefault();
		setFileObj('');
		setFinalFormData([
			...finalFormData,
			{
				productPrice: productPrice,
				itemDescription: itemDescription,
				fileObj: fileObj,
			},
		]);
		setFilesArrayIndex((prev: number) => prev + 1);
		setshowAddProjectModal(false);
	}
	return (
		<div className='w-100'>
			<div className='pb-10 pb-lg-15'>
				<h2 className='fw-bolder d-flex align-items-center text-dark'>
					Project Details
					<i
						className='fas fa-exclamation-circle ms-2 fs-7'
						data-bs-toggle='tooltip'
						title='Billing is issued based on your selected account type'></i>
				</h2>

				<div className='text-black-400 mt-4 fw-bold fs-3'>
					Add Item Details
				</div>
			</div>

			<div className='fv-row'>
				<div className='row'>
					{finalFormData?.map((data: any, i: any) => (
						<div
							key={i}
							className='d-flex align-items-center mb-7'>
							<div className='symbol symbol-50px me-5'>
								{data.fileObj.map(
									(
										image: any,
										index: number,
									) => (
										<img
											key={index}
											src={image}
											className='me-5 img-fluid'
											alt=''
										/>
									),
								)}
							</div>

							<div className='d-flex flex-row'>
								<span className='text-hover-primary fs-5 fw-bold'>
									{data.itemDescription}
								</span>
								<span className='text-hover-primary fs-5 fw-bold px-4'>
									{data.productPrice}
								</span>
							</div>
						</div>
					))}
				</div>

				<button
					type='button'
					className='btn btn-primary'
					onClick={() => setshowAddProjectModal(true)}
					data-bs-toggle='modal'
					data-bs-target='#kt_modal_create_app'>
					ADD ANOTHER
				</button>
				{/* <AddProjectModel
					show={showAddProjectModal}
					handleClose={() => setshowAddProjectModal(false)}
					handleAdd={() => addData()}
				/> */}
				<Modal
					id='kt_modal_create_app'
					aria-hidden='true'
					dialogClassName='modal-dialog modal-dialog-centered mw-778px'
					show={showAddProjectModal}
					onHide={() => setshowAddProjectModal(false)}
					backdrop={true}>
					<div className='modal-header mx-1'>
						<h4>New Project Details</h4>
						{/* begin::Close */}
						<div
							className='btn btn-sm btn-icon btn-active-color-primary'
							onClick={() =>
								setshowAddProjectModal(false)
							}>
							<KTSVG
								className='svg-icon-1'
								path='/media/icons/duotune/arrows/arr061.svg'
							/>
						</div>
						{/* end::Close */}
					</div>
					<Formik
						validationSchema={projectDetailSchema}
						initialValues={initialValues}
						onSubmit={async (values: any) => {
							console.log(values);
						}}>
						{({ values }: any) => (
							<Form
								className='py-10 w-100 w-xl-700px px-9'
								noValidate
								id='kt_create_account_form'>
								<div className='modal-body py-lg-10 px-lg-10'>
									<div className='fv-row mb-10'>
										<label className='form-label required'>
											Item
											Description
										</label>

										<input
											onChange={(
												e: any,
											) =>
												setItemDescription(
													e
														.target
														.value,
												)
											}
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

										<input
											onChange={(
												e: any,
											) =>
												setProductPrice(
													e
														.target
														.value,
												)
											}
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

										<input
											multiple
											type='file'
											className='form-control'
											onChange={(
												event: any,
											) =>
												uploadMultipleFiles(
													event,
												)
											}
										/>
										<div className='text-danger mt-2'>
											<ErrorMessage name='productPhoto' />
										</div>
									</div>

									<div className='d-flex justify-content-end'>
										<button
											type='button'
											className='btn btn-mb btn-light btn-active-light-primary me-2'
											onClick={() =>
												setshowAddProjectModal(
													false,
												)
											}>
											Cancel
										</button>

										<button
											type='submit'
											className='btn btn-mb btn-primary'
											onClick={(
												event,
											) =>
												uploadFiles(
													event,
												)
											}>
											Add
										</button>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</Modal>
			</div>
		</div>
	);
};

export { ProductDetails };

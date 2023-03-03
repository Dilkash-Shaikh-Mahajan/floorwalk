/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react';
import { KTSVG, toAbsoluteUrl } from '../helpers';
import { Field, ErrorMessage, Formik, Form } from 'formik';
import React from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import { projectDetailSchema } from '../formHelper';
import { thirdPageFunction } from '../../store/actions/stepperFormData';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

let fileArray = [];
let fileObject = [];

const ProductDetails = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { thirdPage } = useSelector((state) => state.stepperData);
	const [finalFormData, setFinalFormData] = useState(thirdPage);
	React.useEffect(() => {
		if (!thirdPage) {
			setFinalFormData([]);
		}
	}, []);
	const [projectData, setProjectData] = useState([{}]);
	const [showAddProjectModal, setshowAddProjectModal] = useState(false);
	const [fileObj, setFileObj] = useState();
	const [productPrice, setProductPrice] = useState();
	const [itemDescription, setItemDescription] = useState();
	const [filesArrayIndex, setFilesArrayIndex] = useState(0);

	const initialValues = {
		itemDescription: '',
		productPrice: '',
		productPhoto: '',
	};

	function uploadMultipleFiles(e) {
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

	function uploadFiles(e) {
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
		setFilesArrayIndex((prev) => prev + 1);
		setshowAddProjectModal(false);
	}
	const handlePage = () => {
		dispatch(thirdPageFunction(finalFormData));
		history.push('/new_stepper/4');
	};
	return (
		<div className='w-100 newStepperRightSide'>
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
				<div className='row w-100'>
					{finalFormData?.map((data, i) => (
						<div
							key={i}
							className='d-flex align-items-center mb-7'>
							<div className='symbol symbol-50px me-5'>
								{data.fileObj.map(
									(image, index) => (
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
					className='btn btn-active-stepper'
					onClick={() => setshowAddProjectModal(true)}
					data-bs-toggle='modal'
					data-bs-target='#kt_modal_create_app'>
					Add Item
				</button>

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
						onSubmit={async (values) => {
							console.log(values);
						}}>
						{({ values }) => (
							<Form
								className=' w-100 w-xl-700px px-9'
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
												e,
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
												e,
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
												event,
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
											className='btn btn-mb btn-light btn-stepper me-2'
											onClick={() =>
												setshowAddProjectModal(
													false,
												)
											}>
											Cancel
										</button>

										<button
											type='submit'
											className='btn btn-mb btn-active-stepper'
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

export default ProductDetails;

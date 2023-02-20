/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import { ICreateAccount } from '../CreateAccountWizardHelper';
// import {Field, ErrorMessage} from 'formik'
// import { Container, Row, Col, Table } from 'react-bootstrap';
// import { Styles } from '../../pages/shop/styles/cart';
import { KTSVG, toAbsoluteUrl } from '../helpers';
type Props = {
	audiencePreference?: boolean;
	finalFormData?: any;
	finalTargetData: any;
};
const FinalReview: FC<Props> = ({
	audiencePreference,
	finalFormData,
	finalTargetData,
}: Props) => {
	let projectName = sessionStorage.getItem('projectName');
	let startDate = sessionStorage.getItem('startDate');
	let endDate = sessionStorage.getItem('endDate');
	let businessType = sessionStorage.getItem('businessType');

	let stringAgeRange = sessionStorage.getItem('ageRange');
	var ageRange = stringAgeRange?.split(',');
	let stringOccupation = sessionStorage.getItem('occupation');
	var occupation = stringOccupation?.split(',');
	let stringIncomeRange = sessionStorage.getItem('incomeRange');
	var incomeRange = stringIncomeRange?.split(',');
	let stringCarPriceRange = sessionStorage.getItem('carPriceRange');
	var carPriceRange = stringCarPriceRange?.split(',');
	let stringInterestAreas = sessionStorage.getItem('interestAreas');
	var interestAreas = stringInterestAreas?.split(',');
	let storeData: any = sessionStorage.getItem('storeData');
	storeData = JSON.parse(storeData);
	return (
		<div className='w-100'>
			<div className='pb-0 pb-lg-15'>
				<h2 className='fw-bolder fs-3 d-flex align-items-center text-dark'>
					Final Review
					<i
						className='fas fa-exclamation-circle ms-2 fs-7'
						data-bs-toggle='tooltip'
						title='Billing is issued based on your selected account type'></i>
				</h2>

				{/* <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>

        </div> */}
			</div>

			<div
				className={`card-xl-stretch mb-xl-8`}
				style={{ border: 'none' }}>
				{/* begin::Body */}
				<div className=' row w-100'>
					{/* begin::Header */}

					<div className='col-md-8'>
						<div
							className={`row w-100`}
							// style={{ backgroundColor: '#f3f4f5' }}
						>
							<h3
								className='m-0 my-2 fw-bold fs-4'
								style={{ color: '#454646' }}>
								Project Setup
							</h3>
							<div className='col-md-6'>
								<div className='d-flex text-start flex-row pt-2'>
									<span className='fs-6'>
										Project Name :{' '}
									</span>
									<span className='fw-bold fs-6'>
										{' '}
										{projectName}
									</span>
								</div>
								<div className='d-flex text-start flex-row pt-0'>
									<span className='fs-6'>
										Start Date :{' '}
									</span>
									<span className='fw-bold fs-6'>
										{' '}
										{startDate}
									</span>
								</div>
								<div className='d-flex text-start flex-row pt-0'>
									<span className='fs-6'>
										End Date :{' '}
									</span>
									<span className='fw-bold fs-6'>
										{' '}
										{endDate}
									</span>
								</div>
								<div className='d-flex text-start flex-row pt-0'>
									<span className='fs-6'>
										Industry Selection :{' '}
									</span>
									<span className='fw-bold fs-6'>
										{' '}
										{businessType}
									</span>
								</div>
							</div>
							<div className='col-md-6'>
								<h3
									className='fw-semibold fs-6'
									style={{
										color: '#454646',
									}}>
									Demographics
								</h3>
								{audiencePreference &&
								(ageRange ||
									carPriceRange ||
									occupation ||
									incomeRange) ? (
									<>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-6'>
												Age
												Range :{' '}
											</span>
											{/* <span className='fw-bold fs-6'> */}{' '}
											<span className='fw-bold fs-6'>
												<span className='fw-bold fs-6'>
													{
														stringAgeRange
													}
												</span>
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-6'>
												Occupation
												:{' '}
											</span>

											<span className='fw-bold fs-6'>
												{
													stringOccupation
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-6'>
												Income
												Range :{' '}
											</span>

											<span className='fw-bold fs-6'>
												{
													stringIncomeRange
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-6'>
												Car
												Price
												Range :{' '}
											</span>

											<span className='fw-bold fs-6'>
												{
													stringCarPriceRange
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-6'>
												Interest
												Areas :{' '}
											</span>

											<span className='fw-bold fs-6'>
												{
													stringInterestAreas
												}
											</span>
										</div>
									</>
								) : (
									<span className='fw-bold fs-6'>
										{' '}
										No Demographics Data
										Selected
									</span>
								)}
							</div>
						</div>

						<div
							className={`row w-100`}
							// style={{ backgroundColor: '#f3f4f5' }}
						>
							<h3
								className='m-0 my-2 fw-bold fs-4'
								style={{ color: '#454646' }}>
								Project Targeting
							</h3>
							<div className='row'>
								{finalTargetData?.map(
									(
										store: any,
										index: any,
									) => (
										<div
											key={index}
											className='col-md-6'>
											<div className='text-start flex-row pt-2'>
												<span className='fs-6'>
													Store
													Name
													:{' '}
												</span>
												<span className='fw-bold fs-6'>
													{' '}
													{
														store.storeName
													}
												</span>
											</div>
											<div className='text-start flex-row pt-0'>
												<span className='fs-6'>
													Store
													Address
													:{' '}
												</span>
												<span className='fw-bold fs-6'>
													{
														store.storeAddress
													}
												</span>
											</div>
											<div className='text-start flex-row pt-0'>
												<span className='fs-6'>
													Store
													City
													:{' '}
												</span>
												<span className='fw-bold fs-6'>
													{
														store.storeCity
													}
												</span>
											</div>
											<div className='text-start flex-row pt-0'>
												<span className='fs-6'>
													Store
													State
													:{' '}
												</span>
												<span className='fw-bold fs-6'>
													{
														store.storeState
													}
												</span>
											</div>
											<div className='text-start flex-row pt-0'>
												<span className='fs-6'>
													Store
													Postal
													:{' '}
												</span>
												<span className='fw-bold fs-6'>
													{
														store.storePostal
													}
												</span>
											</div>
										</div>
									),
								)}
							</div>
						</div>

						<div
							className={`py-3 my-2 card-rounded w-100`}
							// style={{ backgroundColor: '#f3f4f5' }}
						>
							<h3
								className='m-0 my-2 fw-bold fs-4'
								style={{ color: '#454646' }}>
								Project Detail
							</h3>
							{finalFormData?.map(
								(data: any, index: number) => (
									<div
										className='d-flex mt-3 align-items-center mb-7'
										key={index}>
										<div className='symbol symbol-50px'>
											{data.fileObj.map(
												(
													image: any,
													index: number,
												) => (
													<img
														key={
															index
														}
														src={
															image
														}
														className='me-5 img-fluid'
														alt=''
													/>
												),
											)}
										</div>
										<div className='d-flex flex-column'>
											<div className='d-flex text-start flex-row pt-0'>
												<span className='fs-6'>
													Product
													Description
													:{' '}
												</span>
												<span className='fw-bold fs-6'>
													{
														data.itemDescription
													}
												</span>
											</div>
											<div className='d-flex text-start flex-row pt-0'>
												<span className='fs-6'>
													Product
													Price
													:{' '}
												</span>
												<span className='fw-bold fs-6'>
													$
													{
														data.productPrice
													}
												</span>
											</div>
										</div>
									</div>
								),
							)}
						</div>
					</div>
					<div className='col-md-4'>
						<div
							className={`px-9 py-3 mt-2 mb-3 card-rounded w-100`}
							// style={{ backgroundColor: '#f3f4f5' }}
						>
							<h3
								className='m-0 fw-bold fs-4'
								style={{ color: '#454646' }}>
								Project Summary
							</h3>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fs-6'>
									Requested Responses
								</span>
								<span className='fw-bold fs-6'>
									{' '}
									{5}
								</span>
							</div>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fs-6'>
									Solution Price :{' '}
								</span>
								<span className='fw-bold fs-6'>
									{' '}
									{1100}
								</span>
							</div>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fs-6'>
									Sub Total :{' '}
								</span>
								<span className='fw-bold fs-6'>
									{' '}
									{5500}
								</span>
							</div>
							<div className='d-flex text-center justify-content-between flex-row pt-0'>
								<span className='fs-6'>
									Tax (18%):{' '}
								</span>
								<span className='fw-bold fs-6'>
									{' '}
									{startDate}
								</span>
							</div>
							<div className='d-flex text-center justify-content-between flex-row pt-0'>
								<span className='fs-6'>
									Total :{' '}
								</span>
								<span className='fw-bold fs-6'>
									{' '}
									{endDate}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { FinalReview };

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
	let storeAddress = sessionStorage.getItem('storeAddress');
	let storeCity = sessionStorage.getItem('storeCity');
	let storeName = sessionStorage.getItem('storeName');
	let storePostal = sessionStorage.getItem('storePostal');
	let storeState = sessionStorage.getItem('storeState');
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
				<h2 className='fw-bolder d-flex align-items-center text-dark'>
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
				className={`card card-xl-stretch mb-xl-8`}
				style={{ border: 'none' }}>
				{/* begin::Body */}
				<div className='card-body'>
					{/* begin::Header */}

					<div
						className={`px-9 py-3 mt-2 mb-3 card-rounded w-100`}
						// style={{ backgroundColor: '#f3f4f5' }}
					>
						<h3
							className='m-0 fw-bold fs-4'
							style={{ color: '#454646' }}>
							Project Setup
						</h3>
						<div className='d-flex text-start flex-row pt-2'>
							<span className='fs-5'>
								Project Name :{' '}
							</span>
							<span className='fw-bold fs-5'>
								{' '}
								{projectName}
							</span>
						</div>
						<div className='d-flex text-start flex-row pt-0'>
							<span className='fs-5'>
								Start Date :{' '}
							</span>
							<span className='fw-bold fs-5'>
								{' '}
								{startDate}
							</span>
						</div>
						<div className='d-flex text-start flex-row pt-0'>
							<span className='fs-5'>
								End Date :{' '}
							</span>
							<span className='fw-bold fs-5'>
								{' '}
								{endDate}
							</span>
						</div>
						<div className='d-flex text-start flex-row pt-0'>
							<span className='fs-5'>
								Industry Selection :{' '}
							</span>
							<span className='fw-bold fs-5'>
								{' '}
								{businessType}
							</span>
						</div>
						<h3
							className='mt-4 fw-semibold fs-5'
							style={{ color: '#454646' }}>
							Demographics
						</h3>
						{audiencePreference &&
						(ageRange ||
							carPriceRange ||
							occupation ||
							incomeRange) ? (
							<>
								<div className='d-flex text-start flex-row pt-0'>
									<span className='fs-5'>
										Age Range :{' '}
									</span>
									{/* <span className='fw-bold fs-5'> */}{' '}
									<span className='fw-bold fs-5'>
										<span className='fw-bold fs-5'>
											{
												stringAgeRange
											}
										</span>
									</span>
								</div>
								<div className='d-flex text-start flex-row pt-0'>
									<span className='fs-5'>
										Occupation :{' '}
									</span>

									<span className='fw-bold fs-5'>
										{stringOccupation}
									</span>
								</div>
								<div className='d-flex text-start flex-row pt-0'>
									<span className='fs-5'>
										Income Range :{' '}
									</span>

									<span className='fw-bold fs-5'>
										{stringIncomeRange}
									</span>
								</div>
								<div className='d-flex text-start flex-row pt-0'>
									<span className='fs-5'>
										Car Price Range :{' '}
									</span>

									<span className='fw-bold fs-5'>
										{
											stringCarPriceRange
										}
									</span>
								</div>
								<div className='d-flex text-start flex-row pt-0'>
									<span className='fs-5'>
										Interest Areas :{' '}
									</span>

									<span className='fw-bold fs-5'>
										{
											stringInterestAreas
										}
									</span>
								</div>
							</>
						) : (
							<span className='fw-bold fs-5'>
								{' '}
								No Demographics Data Selected
							</span>
						)}
					</div>

					<div
						className={`px-9 py-3 mt-2 mb-3 card-rounded w-100`}
						// style={{ backgroundColor: '#f3f4f5' }}
					>
						<h3
							className='m-0 fw-bold fs-4'
							style={{ color: '#454646' }}>
							Project Targeting
						</h3>
						<div className='row'>
							{finalTargetData?.map(
								(store: any, index: any) => (
									<div
										key={index}
										className='col-md-6'>
										<div className='d-flex text-start flex-row pt-2'>
											<span className='fs-5'>
												Store
												Name :{' '}
											</span>
											<span className='fw-bold fs-5'>
												{' '}
												{
													store.storeName
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-5'>
												Store
												Address
												:{' '}
											</span>
											<span className='fw-bold fs-5'>
												{
													store.storeAddress
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-5'>
												Store
												City :{' '}
											</span>
											<span className='fw-bold fs-5'>
												{
													store.storeCity
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-5'>
												Store
												State :{' '}
											</span>
											<span className='fw-bold fs-5'>
												{
													store.storeState
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-5'>
												Store
												Postal :{' '}
											</span>
											<span className='fw-bold fs-5'>
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
						className={`px-9 py-3 mt-2 card-rounded w-100`}
						// style={{ backgroundColor: '#f3f4f5' }}
					>
						<h3
							className='m-0 fw-bold fs-4'
							style={{ color: '#454646' }}>
							Project Detail
						</h3>
						{finalFormData?.map(
							(data: any, index: number) => (
								<div
									className='d-flex mt-3 align-items-center mb-7'
									key={index}>
									<div className='symbol symbol-50px me-5'>
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
											<span className='fs-5'>
												Product
												Description
												:{' '}
											</span>
											<span className='fw-bold fs-5'>
												{
													data.itemDescription
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-5'>
												Product
												Price :{' '}
											</span>
											<span className='fw-bold fs-5'>
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
			</div>
		</div>
	);
};

export { FinalReview };

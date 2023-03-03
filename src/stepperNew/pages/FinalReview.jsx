/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { KTSVG } from '../helpers';

// 	audiencePreference?: boolean,
// 	finalFormData?: any,
// 	finalTargetData: any,
const FinalReview = ({
	audiencePreference,
	finalFormData,
	finalTargetData,
}) => {
	const { solution } = useSelector((state) => state.solutions);
	const history = useHistory();

	const { firstPage, secondPage, thirdPage } = useSelector(
		(state) => state.stepperData,
	);
	const {
		projectName,
		startDate,
		endDate,
		businessType,
		accountPlan,
		ageRange,
		carPriceRange,
		incomeRange,
		occupation,
		solutionInterestAreas,
	} = firstPage;
	console.log('firstPage', firstPage);
	console.log('secondPage', secondPage);
	console.log('thirdPage', thirdPage);
	let sum = secondPage.reduce(function (accumulator, curValue) {
		return accumulator + parseInt(curValue.numberOfResponse);
	}, 0);

	let allSolutionsPrice = sum * parseInt(solution.price);
	let taxSolutionPrice = (allSolutionsPrice * 18) / 100;
	let totalPricewoComma = allSolutionsPrice + taxSolutionPrice;
	let totalPriceComma = totalPricewoComma.toLocaleString('en-IN', {
		maximumFractionDigits: 2,
		style: 'currency',
		currency: 'INR',
	});
	const handlePage = () => {
		history.push('/new_stepper/5');
	};
	return (
		<div className='w-100 newStepperRightSide text-black'>
			<div className='pb-0 pb-lg-15'>
				<h2 className='fw-bolder fs-4 d-flex align-items-center text-dark'>
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
						<h3 className='m-0 my-3 fw-bold fs-5'>
							Project Setup
						</h3>
						<div
							style={{
								backgroundColor: '#F2F9FF',
								borderRadius: '6px',
							}}>
							<div className={`row w-100 p-3`}>
								<div className='col-md-6'>
									<div className='d-flex text-start flex-row pt-2'>
										<span className='fw-bold fs-6'>
											Project Name :{' '}
										</span>
										<span className='fs-6'>
											{' '}
											{projectName}
										</span>
									</div>
									<div className='d-flex text-start flex-row pt-0'>
										<span className='fw-bold fs-6'>
											Start Date :{' '}
										</span>
										<span className='fs-6 '>
											{' '}
											{startDate}
										</span>
									</div>
									<div className='d-flex text-start flex-row pt-0'>
										<span className='fw-bold fs-6'>
											End Date :{' '}
										</span>
										<span className='fs-6'>
											{' '}
											{endDate}
										</span>
									</div>
									<div className='text-start flex-row pt-0'>
										<span className='fw-bold fs-6'>
											Industry
											Selection :{' '}
										</span>
										<span className='fs-6'>
											{' '}
											{businessType}
										</span>
									</div>
								</div>
								<div className='col-md-6 mt-2'>
									<h3 className='fw-bold fs-6'>
										Demographics
									</h3>
									{accountPlan === 1 &&
									(ageRange ||
										carPriceRange ||
										occupation ||
										incomeRange) ? (
										<>
											<div className='text-start flex-row pt-0'>
												<span className='fw-bold fs-6'>
													Age
													Range
													:{' '}
												</span>
												{/* <span className='fw-bold fs-6'> */}{' '}
												<span className='fs-6'>
													{
														ageRange
													}
												</span>
											</div>
											<div className=' text-start flex-row pt-0'>
												<span className='fw-bold fs-6'>
													Occupation
													:{' '}
												</span>

												<span className='fs-6'>
													{
														occupation
													}
												</span>
											</div>
											<div className=' text-start flex-row pt-0'>
												<span className='fw-bold fs-6'>
													Income
													Range
													:{' '}
												</span>

												<span className='fs-6'>
													{
														incomeRange
													}
												</span>
											</div>
											<div className=' text-start flex-row pt-0'>
												<span className='fw-bold fs-6'>
													Car
													Price
													Range
													:{' '}
												</span>

												<span className='fs-6'>
													{
														carPriceRange
													}
												</span>
											</div>
											<div className=' text-start flex-row pt-0'>
												<span className='fw-bold fs-6'>
													Interest
													Areas
													:{' '}
												</span>

												<span className='fs-6 '>
													{
														solutionInterestAreas
													}
												</span>
											</div>
										</>
									) : (
										<span className='fw-bold fs-6'>
											{' '}
											No
											Demographics
											Data Selected
										</span>
									)}
								</div>
							</div>
						</div>

						<h3 className='m-0 my-3 fw-bold fs-5'>
							Project Targeting
						</h3>
						<div className={`d-flex flex-wrap w-100 `}>
							{secondPage?.map((store, index) => (
								<div
									key={index}
									className='col-md-6'>
									<div
										className={
											index % 2 ===
											0
												? 'ms-0 mb-3 me-3 px-3 py-2 '
												: 'me-0 mb-3 ms-3 px-3 py-2 '
										}
										style={{
											backgroundColor:
												'#F2F9FF',
											borderRadius:
												'6px',
										}}>
										<div className='text-start flex-row pt-2'>
											<span className='fw-bold fs-6'>
												Store
												Name :{' '}
											</span>
											<span className='fs-6 '>
												{' '}
												{
													store.storeName
												}
											</span>
										</div>
										<div className='text-start flex-row pt-0'>
											<span className='fw-bold fs-6'>
												Store
												Address
												:{' '}
											</span>
											<span className='fs-6 '>
												{
													store.storeAddress
												}
											</span>
										</div>
										<div className='text-start flex-row pt-0'>
											<span className='fw-bold  fs-6'>
												Store
												City :{' '}
											</span>
											<span className='fs-6 '>
												{
													store.storeCity
												}
											</span>
										</div>
										<div className='text-start flex-row pt-0'>
											<span className='fw-bold fs-6'>
												Store
												State :{' '}
											</span>
											<span className='fs-6 '>
												{
													store.storeState
												}
											</span>
										</div>
										<div className='text-start flex-row pt-0'>
											<span className='fw-bold  fs-6'>
												Store
												Postal :{' '}
											</span>
											<span className='fs-6 '>
												{
													store.storePostal
												}
											</span>
										</div>
										<div className='text-start flex-row pt-0'>
											<span className='fw-bold  fs-6'>
												Number
												of
												Response
												:{' '}
											</span>
											<span className='fs-6'>
												{
													store.numberOfResponse
												}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className='py-0 card-rounded w-100'>
							<h3 className='m-0 my-2 fw-bold fs-5'>
								Project Detail
							</h3>
							{thirdPage?.map((data, index) => (
								<div
									className='d-flex mt-3 align-items-center mb-7 p-3'
									style={{
										backgroundColor:
											'#F2F9FF',
									}}
									key={index}>
									<div className='symbol symbol-50px'>
										{data.fileObj.map(
											(
												image,
												index,
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
										<div className=' text-start flex-row pt-0'>
											<span className='fs-6'>
												Product
												Description
												:{' '}
											</span>
											<span className='fw-bold  fs-6'>
												{
													data.itemDescription
												}
											</span>
										</div>
										<div className='d-flex text-start flex-row pt-0'>
											<span className='fs-6'>
												Product
												Price :
											</span>
											<span className=' fw-bold fs-6'>
												{'  '}₹{' '}
												{
													data.productPrice
												}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='col-md-4'>
						<h3 className='m-0 mb-3 fw-bold fs-5'>
							Project Summary
						</h3>
						<div
							className={` p-3 mt-2 mb-3 card-rounded w-100`}
							style={{
								backgroundColor: '#F2F9FF',
								borderRadius: '6px',
							}}>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fw-bold fs-6 '>
									Requested Responses :
								</span>
								<span className='fs-6 fw-bold'>
									{' '}
									{sum}
								</span>
							</div>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fw-bold fs-6'>
									Solution Price :{' '}
								</span>
								<span className='fs-6 fw-bold'>
									{' '}
									₹{' '}
									{parseInt(solution.price)}
								</span>
							</div>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fw-bold fs-6 '>
									Sub Total :{' '}
								</span>
								<span className='fs-6 fw-bold'>
									{' '}
									₹ {allSolutionsPrice}
								</span>
							</div>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fw-bold fs-6'>
									Tax (18%):{' '}
								</span>
								<span className='fs-6 fw-bold'>
									{' '}
									₹ {taxSolutionPrice}
								</span>
							</div>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fw-bold fs-6'>
									Total Price :{' '}
								</span>
								<span className='fs-6 fw-bold'>
									{' '}
									{totalPriceComma}
								</span>
							</div>
							<div
								className='my-3'
								style={{
									border: '1px solid #1789E4',
								}}></div>
							<div className='d-flex text-center justify-content-between flex-row pt-2'>
								<span className='fw-bold fs-5'>
									Project Total :{' '}
								</span>
								<span className=' fs-6 fw-bold'>
									{' '}
									{totalPriceComma}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className='d-flex position-absolute  flex-stack pt-10'
				style={{
					width: '90%',
					bottom: '2%',
				}}>
				<div className='mr-2'>
					<button
						// onClick={prevStep}
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

export default FinalReview;

import React from 'react';
import { ErrorMessage, Field } from 'formik';

const Login = () => {
	return (
		<div className='row'>
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
	);
};

export default Login;

import React from 'react';
import { ErrorMessage, Field } from 'formik';

const Register = () => {
	return (
		<div className='row mb-5'>
			<div className='col-lg-6 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>
						First Name
					</label>

					<Field
						type='text'
						className='form-control form-control-lg form-control-solid'
						name='firstName'
					/>
					<div className='text-danger mt-2'>
						<ErrorMessage name='firstName' />
					</div>
				</div>
			</div>
			<div className='col-lg-6 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>
						Last Name
					</label>

					<Field
						type='text'
						className='form-control form-control-lg form-control-solid'
						name='lastName'
					/>

					<div className='text-danger mt-2'>
						<ErrorMessage name='lastName' />
					</div>
				</div>
			</div>
			<div className='col-lg-6 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>
						Email ID
					</label>

					<Field
						type='email'
						className='form-control form-control-lg form-control-solid'
						name='emailId'
					/>
					<div className='text-danger mt-2'>
						<ErrorMessage name='emailId' />
					</div>
				</div>
			</div>
			<div className='col-lg-6 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>
						Mobile Number
					</label>

					<Field
						type='number'
						className='form-control form-control-lg form-control-solid'
						name='mobileNumber'
					/>

					<div className='text-danger mt-2'>
						<ErrorMessage name='mobileNumber' />
					</div>
				</div>
			</div>
			<div className='col-lg-12 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>
						Company Name
					</label>

					<Field
						type='text'
						className='form-control form-control-lg form-control-solid'
						name='companyName'
					/>
					<div className='text-danger mt-2'>
						<ErrorMessage name='companyName' />
					</div>
				</div>
			</div>
			<div className='col-lg-6 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>
						Password
					</label>

					<Field
						type='password'
						className='form-control form-control-lg form-control-solid'
						name='password'
					/>

					<div className='text-danger mt-2'>
						<ErrorMessage name='password' />
					</div>
				</div>
			</div>
			<div className='col-lg-6 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>
						Confirm Password
					</label>

					<Field
						type='password'
						className='form-control form-control-lg form-control-solid'
						name='cpassword'
					/>

					<div className='text-danger mt-2'>
						<ErrorMessage name='cpassword' />
					</div>
				</div>
			</div>
			<div className='col-lg-12 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>Address</label>

					<Field
						type='text'
						className='form-control form-control-lg form-control-solid'
						name='address'
					/>
					<div className='text-danger mt-2'>
						<ErrorMessage name='address' />
					</div>
				</div>
			</div>
			<div className='col-lg-4 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>City</label>

					<Field
						type='text'
						className='form-control form-control-lg form-control-solid'
						name='city'
					/>

					<div className='text-danger mt-2'>
						<ErrorMessage name='city' />
					</div>
				</div>
			</div>
			<div className='col-lg-4 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>State</label>

					<Field
						type='text'
						className='form-control form-control-lg form-control-solid'
						name='state'
					/>
					<div className='text-danger mt-2'>
						<ErrorMessage name='state' />
					</div>
				</div>
			</div>
			<div className='col-lg-4 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>Pincode</label>

					<Field
						type='text'
						className='form-control form-control-lg form-control-solid'
						name='pincode'
					/>

					<div className='text-danger mt-2'>
						<ErrorMessage name='pincode' />
					</div>
				</div>
			</div>
			<div className='col-lg-12 '>
				<div className='mb-4'>
					<label className='form-label mb-3'>GSTIN</label>

					<Field
						type='text'
						className='form-control form-control-lg form-control-solid'
						name='gstin'
					/>

					<div className='text-danger mt-2'>
						<ErrorMessage name='gstin' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;

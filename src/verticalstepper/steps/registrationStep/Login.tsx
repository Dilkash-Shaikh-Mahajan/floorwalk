import React from 'react';
import { ErrorMessage, Field } from 'formik';

const Login = () => {
	return (
		<div className='row mb-5'>
			<div className='col-lg-12 '>
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
			<div className='col-lg-12 '>
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
		</div>
	);
};

export default Login;

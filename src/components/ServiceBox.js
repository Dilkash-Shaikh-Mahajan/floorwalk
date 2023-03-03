import React, { Component } from 'react';
import Datas from '../data/service/service-box.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from './styles/serviceBox.js';

class ServiceBox extends Component {
	render() {
		return (
			<Styles>
				{/* Service Box */}
				<section className='service-area'>
					<Container>
						<div className='row justify-content-center'>
							<Col md='12'>
								<div className='sec-title text-center'>
									<h4>{Datas.secTitle}</h4>
								</div>
							</Col>
							<Col md='10'>
								<div className='row'>
									{Datas.dataList.map(
										(data, i) => (
											<Col
												className='h-auto'
												md='6'
												key={i}>
												<div className='service-box h-100 justify-content-start align-items-center d-flex'>
													<div className='box-icon'>
														<i
															className={
																data.boxIcon
															}></i>
													</div>
													<div className='box-title'>
														<h6>
															{
																data.title
															}
														</h6>
														<p>
															{
																data.subTitle
															}
														</p>
													</div>
												</div>
											</Col>
										),
									)}
								</div>
							</Col>
						</div>
					</Container>
				</section>
			</Styles>
		);
	}
}

export default ServiceBox;

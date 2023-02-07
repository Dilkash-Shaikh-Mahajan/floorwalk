import React from 'react'
import './megaStyle.css'
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Audits() {
    return (
        <>

            <Container>
                <Row>
                    <Col md="6">
                        <Row>
                        <figure>
                         <figcaption className='figcaption'>Non Purchase</figcaption>
                            <ul>
    
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>In-store Sales Process Demo</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>In-store product Demo</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Visual Merchandising</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Competition Product Price Check</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Product Packaging</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Product Sampling</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Singage Display check</Link></li>
                                 
                            </ul>
                            </figure>
                        </Row>
                        <Row>
                        <figure>
                         <figcaption>Purchase</figcaption>
                            <ul >
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>In-store Sales and Billing Compliance</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>In-store Return Process Compliance</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Restaurant Service Check</Link></li>
            
                            </ul>
                            </figure>
                        </Row>

                    </Col>
                    <Col md="6">
                        <Row>
                        <figure>
                         <figcaption>Web & Telphonic</figcaption>
                        <ul>
                            <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Online Purchase Product Insight/Review</Link></li>
                            <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Website navigation feedback</Link></li>
                            <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Online Delivery process review</Link></li>
                            <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>KYC Proess Reveiw</Link></li>
                    
                        </ul>
                        </figure>
                        </Row>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

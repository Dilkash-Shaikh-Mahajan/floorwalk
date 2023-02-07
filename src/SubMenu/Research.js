import React from 'react'
import './megaStyle.css'
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Research() {
    return (
        <>

            <Container>
                <Row>
                    <Col md="6">
                        <Row>
                        <figure>
                         <figcaption className='figcaption'>Non Purchase</figcaption>
                            <ul>
    
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Product Pricing and discount check</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Brand Awareness Sample collection</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Product Awareness Sample Collection</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>In-store Branding & Advertising presence</Link></li>

                            </ul>
                            </figure>
                        </Row>
                        <Row>
                        <figure>
                         <figcaption>Purchase</figcaption>
                            <ul >
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>In-store Purchase Product Insight/Review</Link></li>
                                <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Competition Product Price Check</Link></li>
    
            
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
                            <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>On call product pricing and discount</Link></li>
                            <li className="nav-item-mega"><Link className="nav-link-mega" to={process.env.PUBLIC_URL + "/course-grid"}>Competition Product Pricing and discount</Link></li>
                            
                    
                        </ul>
                        </figure>
                        </Row>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

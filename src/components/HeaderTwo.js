import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Search from './common/Search';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/headerTwo.js";
import Navbar from '../SubMenu/Navbar';
import { Vertical } from '../verticalstepper/Vertical.tsx';

class HeaderTwo extends Component {
    render() {
        return (
            <Styles>
                {/* Topbar 2 */}
                <section className="top-bar2">
                    <Container>
                        <Row>
                            <Col lg="7" md="9">
                                <div className="bar-left">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="las la-phone"></i>+91-783-606-6777</li>
                                        <li className="list-inline-item"><i className="las la-envelope"></i>contactus@floorwalk.in</li>
                                        {/*<li className="list-inline-item"><i className="las la-map-marker"></i>795 South Park Avenue, CA
                                        </li>*/}
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="5" md="3">
                                <div className="bar-right d-flex justify-content-end">
                                    {/*<ul className="list-unstyled list-inline bar-lang">
                                        <li className="list-inline-item">
                                            <Dropdown>
                                                <Dropdown.Toggle><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" />English<i className="las la-angle-down"></i></Dropdown.Toggle>
                                                <Dropdown.Menu as="ul">
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/us.png"} alt="" /> English</Dropdown.Item>
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/fra.png"} alt="" /> French</Dropdown.Item>
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/ger.png"} alt="" /> German</Dropdown.Item>
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/spa.png"} alt="" /> Spanish</Dropdown.Item>
                                                    <Dropdown.Item as="li"><img src={process.env.PUBLIC_URL + "/assets/images/bra.png"} alt="" /> Brazilian</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </ul>*/}
                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href="https://www.facebook.com/FloorWalk"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/FloorWalkIndia"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/floorwalk"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/floorwalk/"><i className="fab fa-instagram"></i></a></li>
                                    </ul>

                                    {/*<ul className="list-unstyled list-inline sidebar-button">
                                        <li className="list-inline-item nav-item side-box">
                                            <Sidebar />
                                        </li>
                                    </ul>*/}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Logo Area 2 */}
                <section className="logo-area2">
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="logo">
                                    <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                                </div>
                            </Col>
                            <Col md="9">
                                <div className="menu-box d-flex justify-content-between">
                                    <ul className="nav menu-nav">

                                       <li className="nav-item dropdown active">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/course-grid"} data-toggle="dropdown">Home<i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown home-megamenu">
                                                    {/* <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/stepper"}>verticalstepper</Link></li> */}
                                                    <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/user_dashboard"}>UserDashBoard</Link></li>
                                            
                                                </ul>
                                                
                                            </li>

                                        {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link></li> */}
                                         
                                         
                            
                                         <li className="nav-item dropdown active">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/course-grid"} data-toggle="dropdown">Products<i className="las la-angle-down"></i></Link>
                                                <ul className="dropdown home-megamenu">
                                                    {/* <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link></li>
                                                    <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link></li> */}
                                                 <Navbar/>
                                                </ul>
                                                
                                            </li>
                                        {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-grid"}>Products</Link></li>
                                        <ul className="dropdown home-megamenu">
                                            <Navbar/>
                                        </ul> */}
                                        <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link></li>
                                        {/*<li className="nav-item dropdown active">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Home <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Pages <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About Us</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>Registration</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/faq"}>Faq</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/404"}>404</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Courses <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-grid"}>Course Grid</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-list"}>Course List</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-details"}>Course Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Instructor <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/instructor"}>Instructors</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/instructor-details"}>Instructor Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Event <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/events"}>Events</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/event-details"}>Event Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Blog <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-classic"}>Blog Classic</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-grid"}>Blog Grid</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">Shop <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/products"}>Products</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/product-details"}>Product Details</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/cart"}>Cart</Link></li>
                                            </ul>
                                        </li>*/}
                                    </ul>
                                    {/*<div className="search-box">
                                        <Search />
                                    </div>*/}
                                    <div className="apply-btn">
                                        <Link to={process.env.PUBLIC_URL + "/login"}>
                                            <i className="las la-sign-in-alt"></i>
                                            Login
                                            </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Sticky Menu */}
                <StickyMenu />

                {/* Mobile Menu */}
                <MobileMenu />
            </Styles>
        )
    }
}

export default HeaderTwo
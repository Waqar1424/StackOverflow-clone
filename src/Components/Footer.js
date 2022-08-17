import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/imageedit_1_8027837224.png';
import { useLocation } from 'react-router-dom';
import '../assets/styles.css';

function Footer()  {
    const { pathname } = useLocation();
    if( pathname === "/login" || pathname === "/signup") return null;
        return (
                <div className="footer">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-12  col-sm-1 d-flex justify-content-end icon-footer-div">
                            <img className='icon-footer' src={icon}/>
                        </div>            
                            <div className="col-12  col-sm-2 text-start stackoverflow-footer-div">
                                <h6>STACK OVERFLOW</h6>
                                <ul className="list-unstyled">
                                    <li>Questions</li>
                                    <li>Help</li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-2 text-start products-footer-div">
                            <h6>PRODUCTS</h6>
                            <ul className="list-unstyled">
                                    <li>Teams</li>
                                    <li>Advertising</li>
                                    <li>Collectives</li>
                                    <li>Talent</li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-2 text-start company-footer-div">
                            <h6>COMPANY</h6>
                            <ul className="list-unstyled">
                                    <li>About</li>
                                    <li>Press</li>
                                    <li>Work Here</li>
                                    <li>Legal</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms Of Service</li>
                                    <li>Contact Us</li>
                                    <li>Cookie Settings</li>
                                    <li>Cookie Policy</li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-2 text-start network-footer-div">
                            <h6>STACK EXCHANGE NETWORK</h6>
                            <ul className="list-unstyled">
                                    <li>Technology</li>
                                    <li>Culture & recreation</li>
                                    <li>Life & Arts</li>
                                    <li>Science</li>
                                    <li>Professional</li>
                                    <li>Business</li>
                                    <br/>
                                    <li>API</li>
                                    <li>Data</li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-3 text-start lt-div blog-footer-div">
                            <ul className="list-unstyled">
                                    <li>Blog</li>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>LinkedIn</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }


export default Footer;
import React from 'react';
import './Sercices.css'; // Assuming you have a CSS file named Services.css
import imageleft from '../../assets/image-left.png';
import imageright from '../../assets/image-right.png';
const Services = () => {
    return (
        <div className="events-container">
            {/* First Column */}
            <div className="about-section">
                <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Our Services</h1>
                    <hr className="line" />
                </div>
                <div className="container">
                    <div className="image-container">
                        <div className="services-list">
                            <div>
                                <img src={imageleft} alt="Global Search Company" className="service-image" />
                                <h2>GLOBAL SEARCH COMPANY</h2>
                                <p>RETAINED SEARCH PARTNERS
                                    EXCLUSIVE SENIOR HIRING PARTNERS
                                    RPO PARTNERS
                                    CAMPUS HIRING PARTNERS
                                    INTERNSHIP PROGRAMS
                                    ASSESSMENT & REPORTS
                                </p>
                                <a href="https://www.ibaglobalsearch.com/lander">Learn more</a>
                                <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                            </div>
                            {/* Second Event Container */}
                            <div>
                                <img src={imageleft} alt="Corporate Business Advisory & Consulting" className="service-image" />
                                <h2>CORPORATE BUSINESS ADVISORY & CONSULTING</h2>
                                <p>CORPORATE GOVERNANCE ADVISORY
                                    CORPORATE STRATEGY CONSULTING</p>
                                <a href="https://www.ibaconsultingworldwide.com">Learn more</a>
                                <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                            </div>
                            
                        </div>
                        {/* Remove the column for right image */}
                    </div>
                </div>
            </div>
            {/* Second Column */}
            <div className="about-section">
                <div className="events-heading">
                    <hr className="line" />
                    <h1 className="sub-title">Our Services</h1>
                    <hr className="line" />
                </div>
                <div className="container">
                    <div className="image-container">
                        {/* Remove the column for left image */}
                        {/* Event Containers */}
                        <div className="services-list">
                            {/* First Event Container */}
                            <div>
                                <img src={imageleft} alt="Varun Rai Kochhar Academy" className="service-image" />
                                <h2>VARUN RAI KOCHHAR ACADEMY</h2>
                                <p>LEADERSHIP SUCCESSION COACHING
                                    IMPACT LEADERSHIP TRAINING
                                    TRAINERS ACADEMY
                                    IMPACT SALES TRAINING
                                    FINISHING SCHOOL
                                    MUSIC, ART & DANCE ACADEMY</p>
                                <a href="https://www.ibatrainingworldwide.com/lander">Learn more</a>
                                <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                            </div>
                            <div>
                                <img src={imageleft} alt="Global Search Company" className="service-image" />
                                <h2>GLOBAL SEARCH COMPANY</h2>
                                <p>RETAINED SEARCH PARTNERS
                                    EXCLUSIVE SENIOR HIRING PARTNERS
                                    RPO PARTNERS
                                    CAMPUS HIRING PARTNERS
                                    INTERNSHIP PROGRAMS
                                    ASSESSMENT & REPORTS
                                </p>
                                <a href="https://www.ibaglobalsearch.com/lander">Learn more</a>
                                <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                            </div>
                            {/* Second Event Container */}
                            <div>
                                <img src={imageleft} alt="PRK Foundations" className="service-image" />
                                <h2>PRK FOUNDATIONS</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <a href="https://www.ibatrainingworldwide.com/lander">Learn more</a>
                                <a href="https://www.ibaglobalsearch.com/register" className="register-btn">Register Now</a>
                            </div>
                        </div>
                        {/* Remove the column for right image */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

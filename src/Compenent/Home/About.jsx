import React from 'react';
import about from './Images/medical.jpg';
import './Style.css';
import { Link } from "react-router-dom";
import imageM from './Images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";
import price1 from './Images/price-1.jpg';
import price2 from './Images/price-2.jpg';
import price3 from './Images/price-3.jpg';
import price4 from './Images/price-4.jpg';
import Footer from './Footer';

function About() {
    return (
        <div>
            {/* About start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={about} style={{ objectFit: "cover" }} alt="about us" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mb-4">
                                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                                <h1 className="display-4">Best Medical Care For Yourself and Your Family</h1>
                            </div>
                            <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                           
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

            {/* About end  */}

         

            {/* our gold objectif start */}
        
            {/* our gold objectif end */}

        </div>
    )
}

export default About
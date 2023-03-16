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
                            <div className="row g-3 pt-3">
                                <div className="col-sm-3 col-6">
                                    <div className="bg-light text-center rounded-circle py-4">
                                        <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                                        <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <div className="bg-light text-center rounded-circle py-4">
                                        <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                                        <h6 className="mb-0">Emergency<small className="d-block text-primary">Services</small></h6>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <div className="bg-light text-center rounded-circle py-4">
                                        <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                        <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                                    </div>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <div className="bg-light text-center rounded-circle py-4">
                                        <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                        <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About end  */}

            {/* serach Start  */}
            <div className="container-fluid bg-primary my-5 py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                        <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Find A Doctor</h5>
                        <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
                        <h5 className="text-white fw-normal">Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo</h5>
                    </div>
                    <div className="mx-auto" style={{ width: "100%", max_width: "600px" }}>
                        <div className="input-group">
                            <select className="form-select border-primary w-25" style={{ height: "60px" }}>
                                <option selected>Department</option>
                                <option value="1">Department 1</option>
                                <option value="2">Department 2</option>
                                <option value="3">Department 3</option>
                            </select>
                            <input type="text" className="form-control border-primary w-50" placeholder="Keyword" />
                            <button className="btn btn-dark border-0 w-25">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* search end */}

            {/* our gold objectif start */}
          {/* specialité Start */}

<div className="services">
          <h1 className="title">MEDICAL SERVICES</h1>
          <p className="sub-title">Our Center offer you and your familly the complete range of healthcare services.</p>
          <div className="list-services">
          <Link to="/About/OurDoctor" className="nav-item nav-link">
                <div className="box">
              <h1>familly care</h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>
            </Link>
            <div className="box">
              <h1>URGENT CARE</h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>
            <div className="box">
              <h1>Spectialist care</h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>
            <div className="box">
              <h1>PEDIATRIC</h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>
            <div className="box">
              <h1>DENTIST</h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>
            <div className="box">
              <h1>familly care</h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>

          </div>
        </div>

{/* specialité end */}
            {/* our gold objectif end */}

        </div>
    )
}

export default About
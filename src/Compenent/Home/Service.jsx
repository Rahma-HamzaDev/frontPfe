import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
import imageM from './Images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";
import Footer from './Footer';

function Service() {
  return (
    <div>
      {/* sercice start  */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
            <h1 className="display-4" style={{ color: "#1D2A4D", fontSize: "6rem", fontWeight: 400 }}>Excellent Medical Services</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><FaUserMd /></a>
                </div>
                <h4 className="mb-3">Emergency Care</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><FaProcedures /></a>
                </div>
                <h4 className="mb-3">Operation & Surgery</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a>

                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><TbStethoscope /></a>

                </div>
                <h4 className="mb-3">Outdoor Checkup</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><FaAmbulance /></a>

                </div>
                <h4 className="mb-3">Ambulance Service</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <FaPills className="text-white" size={50} />
                </div>
                <h4 className="mb-3">Medicine & Pharmacy</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <BsFillArrowRightCircleFill className="text-white" size={20} />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <FaMicroscope className="text-white" size={50} />
                </div>
                <h4 className="mb-3">Blood Testing</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">

                  <BsFillArrowRightCircleFill className="text-white" size={20} />          </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* services end  */}

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


      {/* specialité Start */}
      <div className="services">
        <h1 className="title">MEDICAL SERVICES</h1>
        <p className="sub-title">Our WEB site offer you  the complete range of many services.</p>
        <div className="list-services">
           <Link to="/OurDoctor" className="nav-item nav-link"> 
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
<Footer/>
    </div>
  )
}

export default Service
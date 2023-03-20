import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
import imageM from './Images/doctor.jpg';
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { TbStethoscope } from "react-icons/tb";
import Footer from './Footer';
// import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Service() {
  return (
    <div>
      {/* sercice start  */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
            <h1 className="display-4" style={{ color: "#1D2A4D", fontSize: "4.5rem", fontWeight: 400 }}>Excellent Medical Services</h1>
            </div>
            <h2 style={{  paddingTop:'10px' , padddingBotton:'10px',fontSize: "3rem", fontWeight: 300 }}>doctor service</h2> <br/>

          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><FaUserMd /></a>
                </div>
                <h4 className="mb-3">Emergency Care</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
                   <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a> 
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><FaProcedures /></a>
                </div>
                <h4 className="mb-3">Operation & Surgery</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a>
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><TbStethoscope /></a>

                </div>
                <h4 className="mb-3">Outdoor Checkup</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a>
                </a> */}
              </div>
            </div>

            <h2 style={{ paddingTop:'10px' , padddingBotton:'10px',fontSize: "3rem", fontWeight: 300 }}>Patient service</h2> <br/>

            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><FaAmbulance /></a>

                </div>
                <h4 className="mb-3">Ambulance Service</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a> 
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <FaPills className="text-white" size={50} />
                </div>
                <h4 className="mb-3">Medicine & Pharmacy</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
               <BsFillArrowRightCircleFill className="text-white" size={20} /> 
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <FaMicroscope className="text-white" size={50} />
                </div>
                <h4 className="mb-3">Blood Testing</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">

                  <BsFillArrowRightCircleFill className="text-white" size={20} />          </a> */}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* services end  */}




   
<Footer/>
    </div>
  )
}

export default Service
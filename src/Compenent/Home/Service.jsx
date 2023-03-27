import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
import imageM from './Images/doctor.jpg';
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { TbStethoscope } from "react-icons/tb";
import { MdDateRange} from "react-icons/md";
import { RiDossierLine } from "react-icons/ri";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
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
            <h2 style={{  paddingTop:'10px' , padddingBotton:'10px',fontSize: "3rem", fontWeight: 300 }}>Médecin service</h2> <br/>

          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><CgCalendarDates /></a>
                </div>
                <h4 className="mb-3"> Rendez-vous </h4>
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
                <h4 className="mb-3">Consultation & Ordonnance </h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a>
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><BsFileEarmarkMedical /></a>

                </div>
                <h4 className="mb-3"> bilan de santé  </h4>
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
                  <FaUserMd className="text-white" size={50} />
                </div>
                <h4 className="mb-3"> Consulter Médecins </h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">

                  <BsFillArrowRightCircleFill className="text-white" size={20} />          </a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><MdDateRange /></a>

                </div>
                <h4 className="mb-3">Rendez-vou enligne </h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a> 
                </a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <RiDossierLine className="text-white" size={50} />
                </div>
                <h4 className="mb-3">Dossiers personnel</h4>
                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
               <BsFillArrowRightCircleFill className="text-white" size={20} /> 
                </a> */}
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
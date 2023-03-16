import React from 'react'
import './Style.css'
import imageM from './Images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";
function Service() {
  return (
    <div>
          {/* sercice start  */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
            <h1 className="display-4" style={{color:"#1D2A4D" , fontSize:"6rem" ,fontWeight:400 }}>Excellent Medical Services</h1>
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
        {/* Appointment Start */}
   <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                <h1 className="display-4">Make An Appointment </h1>
              </div>
              <p className="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
              <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="">Find Doctor</a>
              <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="">Read More</a>
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4">Inscrit-vous</h1>
             
    
                         {/*   onSubmit={handleSubmit} */}
      <form >
        <div className="row g-3">
          <div className="col-12 col-sm-6">
          {/* value={name} onChange={handleNameChange}  */}
            <input type="text" className="form-control bg-light border-0" placeholder="Your first Name" style={{ height: '55px' }}/>
          </div>
          <div className="col-12 col-sm-6">
          {/* value={name} onChange={handleNameChange}  */}
            <input type="text" className="form-control bg-light border-0" placeholder="Your last Name" style={{ height: '55px' }}/>
          </div>
          <div className="col-12 col-sm-6">
          {/* value={name} onChange={handleNameChange}  */}
            <input type="number" className="form-control bg-light border-0" placeholder="Your Phone NUmber " style={{ height: '55px' }}/>
          </div>
          <div className="col-12 col-sm-6">
          {/* value={email} onChange={handleEmailChange} */}
            <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }}  />
          </div>
          <div className="col-12 col-sm-6">
          <input type="password" className="form-control bg-light border-0" placeholder="Your password" style={{ height: '55px' }}  />
          </div>
          <div className="col-12 col-sm-6">
          <input type="password" className="form-control bg-light border-0" placeholder="confirm password" style={{ height: '55px' }}  />
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit" style={{fontSize:"25px"}}>Inscrit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
            </div>
          </div>
        </div>  
    {/* Appointment End */ }
    </div>
  )
}

export default Service
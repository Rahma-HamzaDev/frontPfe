import React, { useState } from 'react';
import './Style.css'
import imageM from './Images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";

import carousel2 from './Images/carousel-2.jpg';
import carsouse1 from './Images/backround.png'
// import img1 from './Images/team-1.jpg';
// import img2 from './Images/team-2.jpg';
// import img3 from './Images/team-3.jpg';
// import price4 from './Images/price-4.jpg'

<head>
  <link rel="icon" href="img/favicon.ico" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" crossorigin="anonymous" />
</head>


function Principale() {
  return (
    <div>
      
      {/* hero start  */}
  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ Color: 'while' }}>Welcome To D medicale</h5>
              <h1 className="display-1 text-white mb-md-4" style={{fontSize:"40px"}}>Best Solution In Your City To Make an appointment with your doctor quickly!</h1>
              <div className="pt-2">
                <a href="" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Find Doctor</a>
                <div className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* hero end  */}





      {/* about start  */}
       <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded" src={imageM} style={{ objectFit: "cover" }} alt="about" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                <h1 className="display-4">Best Medical Care For Yourself </h1>
              </div>
              <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
              <div className="row g-3 pt-3">
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <FontAwesomeIcon icon="fa-solid fa-user-doctor" />
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
                    hh
                    <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                    <i className="fa fa-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* about end */}
      <main>

{/* serach Start  */}
<div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={{maxWidth:"500px"}}>
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Find A Doctor</h5>
                <h1 className="display-4 mb-4">Find A specialty prefer </h1>
                <h5 className="text-white fw-normal">Select your doctor according to your choice of specialty </h5>
            </div>
            <div className="mx-auto" style={{width: "100%" , max_width: "600px"}}>
                <div className="input-group">
                    <select className="form-select border-primary w-25" style={{height: "60px"}}>
                        <option selected>Specialité</option>
                        <option value="1">Specialité 1</option>
                        <option value="2">Specialité 2</option>
                        <option value="3">Specialité 3</option>
                    </select>
                    <input type="text" className="form-control border-primary w-50" placeholder="specialtyName"/>
                    <button className="btn btn-dark border-0 w-25">Search</button>
                </div>
            </div>
        </div>
    </div>
{/* search end */}

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

{/* specialité Start */}

<div className="services">
          <h1 className="title">MEDICAL SERVICES</h1>
          <p className="sub-title">Our Center offer you and your familly the complete range of healthcare services.</p>
          <div className="list-services">
            <div className="box">
              <h1>familly care</h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>
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

{/* tearm start */}
{/* 
<div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{maxWidth: '500px'}}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                    <h1 className="display-4">Qualified Healthcare Professionals</h1>
                     </div>
                <div className="owl-carousel team-carousel position-relative">
                    <div className="team-item">
                        <div className="row g-0 bg-light rounded overflow-hidden">
                            <div className="col-12 col-sm-5 h-100">
                                <img className="img-fluid h-100" src={img1} style={{objectFit: 'cover'}} alt="team-1"/>
                            </div>
                            <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                <div className="mt-auto p-4">
                                    <h3>Doctor Name</h3>
                                    <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                    <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                </div>
                                <div className="d-flex mt-auto border-top p-4">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="row g-0 bg-light rounded overflow-hidden">
                            <div className="col-12 col-sm-5 h-100">
                                <img className="img-fluid h-100" src={img2} style={{objectFit: 'cover'}} alt="team-2"/>
                            </div>
                            <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                <div className="mt-auto p-4">
                                    <h3>Doctor Name</h3>
                                    <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                    <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                </div>
                                <div className="d-flex mt-auto border-top p-4">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" src={img3} style={{objectFit:"cover"}}/>
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
   */}
{/* tearm end */}

   {/* Appointment Start */}
   <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                <h1 className="display-4">Make An account </h1>
              </div>
              <p className="text-white mb-5"> you must create an account to make appointments with our doctor </p>
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

    </main>




    </div >
  )
}

export default Principale

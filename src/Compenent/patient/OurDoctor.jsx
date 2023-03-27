import React from 'react'
import '../Home/Style.css'
import imageM from '../Home/Images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import img1 from '../Home/Images/team-1.jpg';
import img2 from '../Home/Images/team-2.jpg';
import img3 from '../Home/Images/team-3.jpg';
import Footer from '../Home/Footer';
import Sidebar from './Sidebar';
function OurDoctor() {
    return (
        <div>

            {/* tearm start */}
         <Sidebar/>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Les Médecins</h5>
                        <h1 className="display-4">Les Médecin "Géneraliste"</h1>
                    </div>
                    <Form className="d-flex" style={{paddingbutton:"50px",paddingRight:"400px",paddingTop:'50px',paddingLeft:"400px"}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                   
                  />
                  <Button variant="outline-success"><BsSearch/></Button>
                </Form>
                    <div className="owl-carousel team-carousel position-relative">
                        <div className="team-item">
                            <div className="row g-0 bg-light rounded overflow-hidden">
                                <div className="col-12 col-sm-5 h-100">
                                    <img className="img-fluid h-100" src={img1} style={{ objectFit: 'cover' }} alt="team-1" />
                                </div>
                                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                    <div className="mt-auto p-4">
                                        <h3>Doctor Name</h3>
                                        <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                        <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                    </div>
                                    <div className="d-flex mt-auto border-top p-4">
                                        <Link to='/Prendrerend_vous'> <button className="btn btn-primary w-100 py-3" type="submit" style={{ fontSize: "20px" }}>Rendez-Vous</button> </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="row g-0 bg-light rounded overflow-hidden">
                                <div className="col-12 col-sm-5 h-100">
                                    <img className="img-fluid h-100" src={img2} style={{ objectFit: 'cover' }} alt="team-2" />
                                </div>
                                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                    <div className="mt-auto p-4">
                                        <h3>Doctor Name</h3>
                                        <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                        <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                    </div>
                                    <div className="d-flex mt-auto border-top p-4">
                                        <Link to='/Prendrerend_vous'> <button className="btn btn-primary w-100 py-3" type="submit" style={{ fontSize: "20px" }}>Rendez-Vous</button> </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="row g-0 bg-light rounded overflow-hidden">
                                <div className="col-12 col-sm-5 h-100">
                                    <img className="img-fluid h-100" src={img3} style={{ objectFit: "cover" }} />
                                </div>
                                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                    <div className="mt-auto p-4">
                                        <h3>Doctor Name</h3>
                                        <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology</h6>
                                        <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                    </div>
                                    <div className="d-flex mt-auto border-top p-4">
                                        <Link to='/Prendrerend_vous'> <button className="btn btn-primary w-100 py-3" type="submit" style={{ fontSize: "20px" }}>Rendez-Vous</button> </Link>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* tearm end */}
            <Footer />
        </div>
    )
}

export default OurDoctor
import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
import imageM from './Images/doctor.jpg';
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { TbStethoscope } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { RiDossierLine } from "react-icons/ri";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import Footer from './Footer';
import Menu from './Menu';
import ButtonBar from './ButtonBar';
// import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Service() {
  return (
    <div>
      <Menu />
      {/* sercice start  */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
            <h1 className="display-4" style={{ color: "#1D2A4D", fontSize: "2.5rem", fontWeight: "300px" }}>Excellent Medical Services</h1>
          </div>
          <h2 style={{ paddingTop: '10px', padddingBotton: '10px', fontSize: "2rem" }}>Services Médecin </h2>
          <br />

          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><CgCalendarDates /></a>
                </div>
                <h4 className="mb-2"> Rendez-vous </h4>
                <p className="m-0">
                 gérer , accepter ou modifier les rendez-vous  </p>
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
                <p className="m-0">
Remplir les consultations et les ordonnances
   </p>
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
                <h4 className="mb-3"> Fiche médicale </h4>
                <p className="m-0">
              Consulter et mettre à jour les informations du fiche médicales .
                </p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <a href="#" style={{ color: 'white', fontSize: '25px' }}><BsFillArrowRightCircleFill /></a>
                </a> */}
              </div>
            </div>

            <h2 style={{ paddingTop: '10px', padddingBotton: '10px', fontSize: "2rem" }}>Services Patient</h2> <br />


            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <FaUserMd className="text-white" size={50} />
                </div>
                <h4 className="mb-3"> Consulter Les Médecins </h4>
                <p className="m-0">
                 Filtrer les médecins selon leur spécialités
                </p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">

                  <BsFillArrowRightCircleFill className="text-white" size={20} />          </a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <a href="#" style={{ color: 'white', fontSize: '50px' }}><MdDateRange /></a>
                </div>
                <h4 className="mb-3">Prise de Rendez-vous</h4>
                <p className="m-0">
                  Réserver des rendez-vous en ligne en sélectionnant
                  la date et l'heure qui leur conviennent.</p>
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
                <p className="m-0">
                  permettant aux  patients de consulter les informations médicales
                  de leurs médecins de manière sécurisée et confidentielle.
                </p>
                {/* <a className="btn btn-lg btn-primary rounded-pill" href="">
               <BsFillArrowRightCircleFill className="text-white" size={20} /> 
                </a> */}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* services end  */}





      <Footer />
      <ButtonBar />
    </div>
  )
}

export default Service
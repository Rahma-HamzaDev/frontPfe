import React, { useState } from 'react';
import './Style.css'
import { Link } from 'react-router-dom';
import imageM from './Images/doctor.jpg';
import Defdr from './Images/doctorsmart.jpg' ;
import Defpa from './Images/espace patient.jpg'
import Footer from './Footer';
import Menu from "./Menu";
import {  FaUserNurse,FaAmbulance, FaProcedures, FaMicroscope, FaUserInjured } from "react-icons/fa";
import { MdOutlineFreeCancellation , MdOutlineContactMail} from "react-icons/md";
import ButtonBar from './ButtonBar';
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { TbStethoscope } from "react-icons/tb";
// import Carousel from 'react-bootstrap/Carousel';
// import carousel2 from './Images/carousel-2.jpg';
// import carsouse1 from './Images/backround.png'
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
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // }


  return (
    <div>
      <Menu/>
      {/* hero start  */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start" style={{ paddingTop: "80px" }}>
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ Color: 'while' }}>BIENVENUE DANS DR_MEDICALE</h5>
              <h1 className="display-1 text-white mb-md-4" style={{ fontSize: "40px" }}>
              Meilleure solution pour une relation médecins-patients!</h1>
              <div className="pt-2">
                <Link to='/register?role=doctor' className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"> Médecin </Link>
                <Link to='/register?role=user'><div className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"> Patient </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero end  */}
      <main>
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
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Presentation</h5>
                <h1 className="display-4">Meilleure solution pour une relation médecins-patients </h1>
              </div>
              <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
              <div className="row g-3 pt-3">
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                  <div className="text-primary mb-3"> <FaUserNurse size={50}/> </div>
                    <h6 className="mb-0">Doctor<small className="d-block text-primary">Services</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                        <div className="text-primary mb-3">  
                                      <FaUserInjured  size={50}/>  
                                       </div>

                                  <h6 className="mb-0">patient <small className="d-block text-primary">Services</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                    <div className=" text-primary mb-3">  <MdOutlineContactMail size={50}/> </div>
                    <h6 className="mb-0">Contact<small className="d-block text-primary">Doctor/Patient</small></h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="bg-light text-center rounded-circle py-4">
                  <div className=" text-primary mb-3"> 
                  <MdOutlineFreeCancellation size={50}/> </div>
                    <h6 className="mb-0">Libre<small className="d-block text-primary">utilisation </small></h6>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}


{/* about doctor */}
<div className="doctor_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 padding_top0">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" >À PROPOS DU Médecin</h5>

         
                <h1 className="highest_text">Espace Médecin</h1>
                <p className="lorem_text">
                  Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur
                   </p>
              
            </div>
            <div className="col-md-6">
              <div ><img src={Defdr} style={{ objectFit: "cover", width:"600px" }} alt="about us"/></div>
            </div>
          </div>
        </div>
      </div>
 {/*about doctor*/}


 
 {/* about patient start */}

 <div className="doctor_section layout_padding">
        <div className="container">
          <div className="row">
           
            <div className="col-md-6">
              <div ><img src={Defpa} style={{ objectFit: "cover", width:"550px" }} alt="about us"/></div>
            </div>
            <div className="col-md-6 padding_top0">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5"> À PROPOS DU PATIENT</h5>
         
                <h1 className="highest_text">Espace patient</h1>
                <p className="lorem_text">
Consulter les médecins à partir de les spécialités et prendre des Rendez-vous.<br/>
Consulter les fiches destinées au grand public et conçues par la Dr Médicale pour fournir un support, et/ou un complément à l'information orale délivrée par le médecin au cours des consultations
</p>
              
            </div>
          </div>
        </div>
      </div>

 {/* about patient end */}
 </main>

            <Footer />
            <ButtonBar/>

          </div >
          )
}

          export default Principale
   {/* <Carousel activeIndex={index} onSelect={handleSelect}  >
        
      <Carousel.Item style={{ height: "400px"}}   >

        <img 
          className="d-block w-100"
          src={carsouse1}
          alt="First slide"
        />
         <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> 
      </Carousel.Item>

      <Carousel.Item style={{ height: "400px"}} >
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />

         <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px"}} >
        <img
          className="d-block w-100"
          src={carsouse1}
          alt="Third slide"
        />

         <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> 
      </Carousel.Item>
    </Carousel> */}
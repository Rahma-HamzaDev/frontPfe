import React from 'react';
import about from './Images/medical.jpg';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dr from './Images/docteur.png';
import './Style.css';
import patient from './Images/doctorsmart.jpg';
import { Link } from "react-router-dom";
import imageM from './Images/doctor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUserMd, FaAmbulance, FaProcedures, FaMicroscope, FaPills } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";
import Menu from "./Menu";


import Footer from './Footer';
import ButtonBar from './ButtonBar';
function About() {
    return (
        <div>
<Menu/>
      {/* hero start  */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header2">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start" style={{ paddingTop: "100px" ,}}>
              <h1 className="display-1 mb-md-4" style={{ fontSize: "50px"  , textAlign :"center" , color:'black' , paddingRight:'200px'}}>Qui Nous  sommes Nous!!</h1>
              <div className="pt-2">

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero end  */}


            {/* About start */}
            <div className="container-fluid py-5" style={{ padingTop: "20px" }}>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={about} style={{ objectFit: "cover"}} alt="about us" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mb-4">
                                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">A propos</h5>
                                <h1 className="display-4">Nous sommes</h1>
                            </div>
                            <p>
                            DrMedicale est une plateforme en ligne qui simplifie la prise de rendez-vous pour les patients, facilite la gestion des activités des médecins et offre un suivi des dossiers médicaux.
                              </p>

                        </div>
                    </div>
                </div> 
                </div>
                      {/* About end  */}
     <main>

  




  



    </main>



                 <Footer /> 
                 <ButtonBar/>
                </div>
                    )
                }
                
                export default About
      

// Card 

           {/* <div className="card"  >
    <div className="card-image">
      <img src="https://www.gekkode.com/wp-content/uploads/2021/08/orange.jpeg" alt="Orange" />
    </div>
    <div className="card-body">

      <div className="card-date">
        <time>20 Novembre 1992</time>
      </div>

      <div className="card-title">
        <h3>Lorem Ipsum</h3>
      </div>

      <div className="card-excerpt">
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus autem consectetur voluptate facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam consectetur unde autem inventore.</p>
      </div>
    </div>
        
</div>  */}
{/* <div className="services_section layout_padding padding_bottom_0">
<div className="container">
  <h1 className="blog_text">Blog</h1>
  <div className="row">
    <div className="col-lg-4">
      <div className="call_box">
        <div className="call_image"><img src='' alt="Call icon" /></div>
        <h2 className="emergency_text">Emergency Cases</h2>
        <h1 className="call_text">1-800-400-5768</h1>
        <p className="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
      </div>
    </div>

    <div className="col-lg-4">
      <div className="call_box">
        <div className="call_image"><img src='' alt="Watch icon" /></div>
        <h2 className="emergency_text">Opening hours</h2>
        <h1 className="call_text">1-800-400-5768</h1>
        <p className="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
      </div>
    </div>
  </div>
</div>
</div> */}



{/* def Patient start  */}

{/* <div className='Card'>
     <Card className='card1' style={{ width: '28rem' }}>
      <Card.Img variant="top" src={dr} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>   

    <Card className='card2' style={{ width: '28rem' }}>
      <Card.Img variant="top" src={dr} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>   
    </div>   */}


   {/* def Patient end  */}
 


       

     

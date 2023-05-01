import React from 'react'
import Footer from './Footer';
import {  HiLocationMarker} from "react-icons/hi";
import {  AiFillPhone} from "react-icons/ai";
import {  BsFillEnvelopeCheckFill} from "react-icons/bs";
import Menu from "./Menu";

function Contact() {
  return (
    <> 
    <Menu/>
    <div className="container-fluid pt-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: '500px'}}>
        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Any Questions?</h5>
        <h1 className="display-4">Please Feel Free To Contact Us</h1>
      </div>
      <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: '200px'}}>
              <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '100px', height: '70px', transform: 'rotate(-15deg)'}}>
                <HiLocationMarker style={{transform: 'rotate(15deg)',fontSize:40 ,color:'white'}}/>
              </div>
              <h6 className="mb-0">Tunisie , Sfax </h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: '200px'}}>
              <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '100px', height: '70px', transform: 'rotate(-15deg)'}}>
                <AiFillPhone style={{transform: 'rotate(15deg)',fontSize:40 ,color:'white'}}/>
              </div>
              <h6 className="mb-0">+216 225 369 147</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: '200px'}}>
              <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: '100px', height: '70px', transform: 'rotate(-15deg)'}}>
                <BsFillEnvelopeCheckFill style={{transform: 'rotate(15deg)' ,fontSize:40 ,color:'white'}}/>
              </div>
              <h6 className="mb-0">Admin@example.com</h6>
            </div>
          </div>
        </div>
        
      <div
        className="row justify-content-center "
        style={{ marginTop: "30px", zIndex: "1" }} >
        <div className="col-lg-8">
          <div className="bg-white rounded p-5 m-5 mb-0" >
            <form >
              <div className="row g-3" >
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-1" 
                    placeholder="Your Name"
                    style={{ height: "55px" ,fontWeight:'bold'}}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-light border-1"
                    placeholder="Your Email"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control bg-light border-1"
                    placeholder="Subject"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-light border-1"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 py-3"
                    type="submit">Send Message
                  </button>
                </div>
              </div>
            </form>
            </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    </>

  )
}

export default Contact
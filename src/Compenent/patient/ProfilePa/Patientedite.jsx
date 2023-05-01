import React from 'react';
// import "../../admin/appa.css";
import "./patientedite.css";
import {useSelector} from "react-redux";
 import {urlimage} from "../../../Axios/Api"
import {
  CalendarToday, LocationSearching, MailOutline,PermIdentity,PhoneAndroid, Publish,} from "@material-ui/icons";
import { Link } from "react-router-dom";
// import MenuPa from '../principale/MenuPa';
import TopPA from '../principale/top/TopPA';

function Paientedite() {
  const {user} = useSelector((state) =>state.auth);

  return (
    <>
    <TopPA/>
    <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle"> mon profile</h1>
      <Link to="/NewUser">
        <button className="userAddButton">modifier</button>
      </Link>
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <img
            src={urlimage + user.avatar}
            alt={user.firstName}
            className="userShowImg"/>
          <div className="userShowTopTitle">
            <span className="userShowUsername">{user.firstName}</span>
            <span className="userShowUserTitle">{user.role}</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Détails du compte</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">{user.firstName} {user.lastName}</span>
          </div>
          <div className="userShowInfo">
            <CalendarToday className="userShowIcon" />
            <span className="userShowInfoTitle">10.12.1999</span>
          </div>
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
            <span className="userShowInfoTitle">{user.phone}</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">{user.email}</span>
          </div>
          {/* <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">New York | USA</span>
          </div> */}
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Modifier</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Nom</label>
              <input
                type="text"
                placeholder={user.firstName}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Prénom</label>
              <input
                type="text"
                placeholder={user.lastName}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder={user.email}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder={user.phone}
                className="userUpdateInput"
              />
            </div>
            {/* <div className="userUpdateItem">
              <label>Address</label>
              <input
                type="text"
                placeholder="New York | USA"
                className="userUpdateInput"
              />
            </div> */}
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img
                className="userUpdateImg"
                src={urlimage + user.avatar}
                alt={user.firstName}
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
          
          </div>
        </form>
      </div>
      
    </div>
    
  </div></>
  )
}

export default Paientedite

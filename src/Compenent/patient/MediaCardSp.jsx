import React from 'react'
import { Link } from 'react-router-dom'
const MediaCardSp= ({specialites}) => {
  return (
    <div>


{/* specialité Start */}
<div className="services">
        <h1 className="title">{specialites.nomsep}</h1>
        <p className="sub-title">Our WEB site offer you  the Speciality.</p>
        <div className="list-services">
           <Link to="/OurDoctor" className="nav-item nav-link"> 
        
            <div className="box">
              <h1>familly care</h1>
              <p>From walk-in care, same-day appointments to online visits with OnCare, we'll take good care of you. If you are experiencing an emergency</p>
            </div>
           </Link> 
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


    </div>
  )
}

export default MediaCardSp
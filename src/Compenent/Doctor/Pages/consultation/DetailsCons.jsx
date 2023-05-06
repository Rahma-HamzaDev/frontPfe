import React, { useEffect, useState } from 'react'
import "./datails.css";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchConsById, deleteCons} from '../../../../Services/ConsService';
import TopDoctor from '../../topbarD/TopDoctor';

function DetailsCons() {
   const {consid} = useParams();
   console.log(consid)
    const [cons, setCons] = useState(null);
    console.log(consid)
    useEffect(() => {
        GetListCons();
      }, []);
      const GetListCons = async () => {
    
        //affiche les consultation 
    
        await fetchConsById(consid)
          .then((res) => {
            console.log(res)
            setCons(res.data);
          }).catch(er=> console.log(er))
          ;
      }
      console.log(cons)
    return (
      <>
        <TopDoctor/>
     
        <div className='allD' >
            <div className="tiltle1">
                <h1>Details du consultation </h1>
            </div>
            <br/>
            <div className='details'>
              <div className='details2'>
                <h3>Date consulataion:<span>{cons?.DateCons}</span></h3> <br/>
                <h3>NumCons:  {cons?._id}</h3> <br/>
                <h3>numFich : <span>{cons?.patientID.numfiche}  </span></h3> <br/>
                <h3>Identication du patient:  {cons?.patientID.cinPa}</h3> <br/>
                <h3>Nom & Prénom patient :<span>{cons?.patientID.nompatient} </span><span>{cons?.patientID.prenompatient} </span></h3>  <br/>
                <h3> Taille de patient :<span>{cons?.TaillePatient}</span></h3>  <br/>
                <h3>Poid de patient : <span>{cons?.PoisPatient}</span> </h3>  <br/>
                <h3> tension artérielle: <span>{cons?.tension} </span></h3>  <br/>
                <h3>Température :<span> {cons?.Température} </span></h3>  <br/>
                </div>
                <h3>Description de resultat : </h3>
                <br/>
                <p className="examen">{cons?.DescriptionExamen}</p>
            </div>

        </div>
        </>
    )
}

export default DetailsCons

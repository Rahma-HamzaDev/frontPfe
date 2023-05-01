import React, { useEffect, useState } from 'react'
import "./datails.css";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchConsById, deleteCons} from '../../../../Services/ConsService';

function DetailsCons() {
    const {consid} = useParams();
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
        <div className='allD' >
            <div className="tiltle1">
                <h1>Details du consultation </h1>
            </div>
            <div className='details'>
                <h3>NumCons: <span> </span></h3>
                <h3>Date consulataion:<span>{cons?.DateCons}</span></h3>
                <h3>numFich : <span>{cons?.patientID.numfich}  </span></h3>
                <h3>Nom patient :<span>{cons?.patientID.nompatient} </span> </h3> 
                <h3> Taille de patient :<span>{cons?.TaillePatient}</span></h3>
                <h3>Poid de patient : <span>{cons?.PoisPatient}</span> </h3>
                <h3> tension artérielle: {cons?.tension}</h3>
                <h3>Température : {cons?.Température}</h3>
                <h3>Description de resultat :{cons?.DescriptionExamen}</h3>
                <p></p>
            </div>

        </div>
    )
}

export default DetailsCons

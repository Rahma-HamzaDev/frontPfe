import React, { useEffect, useState } from 'react'
import TopDoctor from '../../topbarD/TopDoctor'
import "./doss.css"
import { fetchPatientById } from '../../../../Services/patientServices';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function Dossmed() {
    const { user } = useSelector((state) => state.auth);
    const { id } = useParams();
    console.log(id);

    const [patients, setPatient] = useState([]);
    useEffect(() => {
        GetListPatient();
    }, []);
    const GetListPatient = async () => {

        //affiche les patients 

        // await fetchPatient()
        //   .then((res) => {
        //     setPatient(res.data);
        //   });
        await
            fetchPatientById(id)
                .then((res) => {
                    setPatient(res.data);
                    console.log(res.data);
                });
    }
    return (
        <>
            <TopDoctor />
            <div className='allfich'>
                <div className='fiche'>
                
                    <h1 className='H11'>Fiche Patient</h1>
                    <br />
                    <h3 className='H33'>  Num Fiche : <span>  {patients?.numfiche} </span>  </h3>
                    <br />
                    <h3> Identifient Patient : <span>  {patients?.cinPa} </span> </h3>
                    <br />
                    <h3 className='H33'>  Nom & Prénom Patient : <span>  {patients?.nompatient} {patients?.prenompatient} </span>  </h3>
                    <br />
                    <h3> Date de Naissance:  <span>  {patients?.dateNais} </span></h3>
                    <br />
                    <h3> sexe : <span>  {patients?.sexepatient} </span></h3>
                    <br />
                    <h3> N°Teléphone: <span>  {patients?.numtelPa} </span> </h3>
                    <br />
                    <h3> Email :  <span>  {patients?.emailpatient} </span></h3>
                    <br />
                    <h3> Adresse:  <span>  {patients?.adressepatient} </span></h3>
                    <br />
                   
                    {/* <h2 className='H22'> Consultation : </h2> */}

                    <div className='impr1'>
        <LocalPrintshopIcon fontSize='large' />
        </div>
                </div>
            </div>
        </>
    )
}

export default Dossmed

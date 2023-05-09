import React from 'react';
// import '../Home/Style.css'
// import '../../App.css';
import MenuDoctor from '../HomeDoctor/MenuDoctor';
import { useState, useEffect } from 'react';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
//npm install mui-datatables
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
 import {HiFolderAdd }from 'react-icons/hi';
import MUIDataTable from "mui-datatables";
import { fetchPatient, deletePatient, fetchPatient1 } from '../../../../Services/patientServices';
import { IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';

import { Link, useParams } from "react-router-dom";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TopDoctor from '../../topbarD/TopDoctor';
import { useSelector } from 'react-redux';


function ListPatient() {
 const {user} = useSelector((state) =>state.auth);
 const id = user._id

  // const {id} = useParams();
  // console.log(id);

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
    await fetchPatient1(id)
    .then((res) => {
      setPatient(res.data);
      console.log(res.data);
    });
  }

  //delete patient 
  const delPatient = async (_id) => {
    await deletePatient(_id)
    var newpatients = patients.filter((item) => {
      return item._id !== _id
    })
    setPatient(newpatients);
  }
  //preparer les columns
  const columns = [
    {
      name: "numfiche",
      label: "Num Fiche",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "cinPa",
      label: "CIN",
      //trie solent designattion 
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "nompatient",
      label: "Nom",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "prenompatient",
      label: "Prénom",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "emailpatient" ,
      label: "Email",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "dateNais",
      label: "Date de Naissance",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "sexepatient",
      label: "sexe",
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "adressepatient",
      label: "Adresse" ,
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "numtelPa",
      label: "N°Teléphone" ,
      fontSize:'large',
      options: {
        filter: true,
        sort: false,
       }
    },
    {
      name: "_id",
      label: "Consultation",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
 <IconButton >
              {<Link to={"/patient/cons/" + value} >
                <LocalHospitalIcon fontSize='large' />
                {/* <HiFolderAdd sx={{ fontSize: 100 }} /> */}
              </Link>
              }
              </IconButton>

          </div>

        )
      }
    },
    {
      name: "_id",
      label: "Modification",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
            <IconButton >
              {<Link to={"/patient/edit/" + value} >
                <EditIcon color='secondary'fontSize='large'  />
              </Link>
              }
              </IconButton>
             

              <IconButton onClick={() => { delPatient(value) }}><DeleteIcon   fontSize='large' sx={{ color: pink[500] }} /></IconButton>

          
          </div>

        )
      }
    },
  
    {
      name: "_id",
      label: "Fiche medicale",
      options: {
          filter: true,
          sort: false,
        customBodyRender: (value) => (
          <div>
            <IconButton >
              {<Link to={"/Patient/Dossmed/"+ value} >
                <AssignmentIndIcon color='primary' fontSize='large'  />
              </Link>
              }
              </IconButton>
          </div>

        )
      }
    },
  ];

  const options = {
    filterType: 'checkbox',
  };


  return (
    <div>
      <TopDoctor/>
      <div style={{ padding: 5, margin: 5 }}>
        <Button
          color="success"
          // startIcon={<AddCircleIcon />}
          size="large"
          startIcon={<PersonAddIcon fontSize='large'  />}
          variant="outlined"
        > {<Link to={`/Patient/medecin/${id}/insert`}
          style={{
            textDecoration:
              "none", color: "black" 
          }}>
            Ajouter Patient
          </Link>
          }
        </Button>
      </div>
      <MUIDataTable
        title={"Liste des Patients"}
  
        data={patients}
        columns={columns}
     options={options}
      />
    </div>
  )
}

export default ListPatient
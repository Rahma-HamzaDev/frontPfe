import React from 'react';
// import '../Home/Style.css'
// import '../../App.css';
import MenuDoctor from '../HomeDoctor/MenuDoctor';
import { useState, useEffect } from 'react';
//npm install mui-datatables

import MUIDataTable from "mui-datatables";
import { fetchPatient, deletePatient } from '../../../../Services/patientServices';
import { IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import TopDoctor from '../../topbarD/TopDoctor';


function ListPatient() {

  const [patients, setPatient] = useState([]);
  useEffect(() => {
    GetListPatient();
  }, []);
  const GetListPatient = async () => {

    //affiche les patients 

    await fetchPatient()
      .then((res) => {
        setPatient(res.data);
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
      label: "Actions",
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
              <IconButton >
              {<Link to={"/patient/cons/" + value} >
                <LocalHospitalIcon fontSize='large' />
              </Link>
              }
              </IconButton>


            <IconButton onClick={() => { delPatient(value) }}><DeleteIcon   fontSize='large' sx={{ color: pink[500] }} />
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
          startIcon={<AddCircleIcon />}
          variant="contained"
        > {<Link to={"/InsertPatient"} 
          style={{
            textDecoration:
              "none", color: "white"
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
        // options={options}
      />
    </div>
  )
}

export default ListPatient
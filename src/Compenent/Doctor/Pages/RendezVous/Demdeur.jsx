import * as React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { toast } from 'react-toastify';
import CancelIcon from '@mui/icons-material/Cancel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteRend, editRendA, editRendR, fetchRendM, fetchRendP } from '../../../../Services/RendServices';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import TopDoctor from '../../topbarD/TopDoctor';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { pink } from '@mui/material/colors';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function Demadeur() {
  const {user} = useSelector((state) =>state.auth);

  const id = user._id
  console.log(id)
  const [Rend, setRend] = React.useState([]);
  // console.log(Rend._id)

  useEffect(() => {
    GetListRend();
  }, []);
  const GetListRend = async () => {

 
    await fetchRendM (id)
    .then((res) => {
      setRend(res.data);
      console.log(res.data);
    });
  }
  
//   editRendA(Rend).then(res=>{
//    console.log("Update OK",res);
//   // navigate(`/Patient/medecin/${medecinId}`); 
// })
//   .catch(error=>{
//   console.log(error)
//   })
  
const accredA= async (redID) => {
  const confirmed = window.confirm('Voulez-vous vraiment accepter cette Rendez vous ?');
  if (confirmed) {
    await editRendA (redID)
    var newRdv = Rend.filter((red) => {
      return red._id !== redID
    });

    window.location.reload();
    setRend(newRdv);
    console.log(newRdv);
    
  //   toast.success("Publication ajouté avec succès , Attendez la confirmation de l'admin",
  //  {
  //     position: toast.POSITION.LEFT,
  //     autoClose: 3000,
  //   });
  }}

//refuser
const accredR= async (redID) => {
  const confirmed = window.confirm('Voulez-vous vraiment Refuser cette rendez_Vous ?');
  if (confirmed) {
    await editRendR (redID)
    var newRdv = Rend.filter((red) => {
      return red._id !== redID
    });

    window.location.reload();
    setRend(newRdv);
    console.log(newRdv);
    
  //   toast.success("Publication ajouté avec succès , Attendez la confirmation de l'admin",
  //  {
  //     position: toast.POSITION.LEFT,
  //     autoClose: 3000,
  //   });
  }}

  function renderEtat(etat) {
 if (etat === 'en attente') {
    return <span style={{ color: 'black' }}>{etat}</span>;
}
else  if (etat === 'accepter') {
      return <span style={{ color: 'green' }}>{etat}</span>;
    } else if (etat === 'refuser') {
      return <span style={{ color: 'red' }}>{etat}</span>;
  } else if (etat === 'cancel') {
  return <span style={{ color: 'gray' }}>{etat}</span>;
}
}
    // delete rendez vous 
    // const delRend = async (_id) => {
    //   await deleteRend(_id)
    //   var newRend = Rend.filter((item) => {
    //     return item._id !== _id
    //   })
    //   setRend(newRend);
    // }
  return (
    <>
    <br/>
    <TopDoctor/>

    <br/>
    <div style={{ textAlign: 'center' }}>
      <br/>
        <h1>  Liste Des demandeur </h1>   <br/>  <br/>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Patient</TableCell>
            <TableCell align="left">Phone Patient</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Etat </TableCell>
            <TableCell align="left">Accepter </TableCell>
            <TableCell align="left">Refuser </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Rend.map((red) => (
            <TableRow
              key={red.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {red?.userID.firstName} {red?.userID.lastName}
              </TableCell>
              {/* <TableCell align="left"></TableCell> */}
              <TableCell align="left">{red?.userID.phone}</TableCell>
              <TableCell align="left">{red.Daterd}</TableCell>
              <TableCell align="left">{red?.timerd}</TableCell>
              <TableCell align="left">{red?.Descrd}</TableCell>
              <TableCell align="left"> {renderEtat(red?.etatrend)}</TableCell>
                <TableCell align="left">
                <IconButton onClick={
                  red.etatrend === 'en attente' ? () => accredA(red._id) : 
                  red.etatrend === 'refuser' 
                  ? () => accredA(red._id) : null}>
                    <AddTaskIcon  color='primary' fontSize='large' />
                  </IconButton>
 
</TableCell>

<TableCell align="left">

<IconButton onClick={
                  red.etatrend === 'en attente' ? () => accredR(red._id) : 
                  red.etatrend === 'accepter' 
                  ? () => accredR(red._id) 
                  
                  : null}>
                    <CancelIcon sx={{ color: pink[500] }}  fontSize='large'/>
                  </IconButton>


  {/* {red.etatrend === 'refuser' ? (
    <span style={{ color: 'red' }}>Refuser</span>
  ) : (
<IconButton onClick={
  red.etatrend === 'en attente' 
  ? () => accredR(red._id)  
  : red.etatrend === 'accepter' 
    ? () => accredR(red._id) 
    : null
}>    
  <CancelIcon sx={{ color: pink[500] }}  fontSize='large' />
    </IconButton>
  )} */}
</TableCell>
              {/* <TableCell align="left">
              <IconButton onClick={red.etatrend === 'en attente' ? () => accredR(red._id) : null}>
                <CancelIcon/>
                </IconButton>
                </TableCell> */}
            </TableRow>
          ))}
        
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

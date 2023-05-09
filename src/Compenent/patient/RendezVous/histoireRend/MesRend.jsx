import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { IconButton } from '@mui/material';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TopPA from '../../principale/top/TopPA';
import { deleteRend, editRendC, fetchRendP } from '../../../../Services/RendServices';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
 import { pink } from '@mui/material/colors';



function MesRend() {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const { userId } = useParams();
  console.log(userId);

  // const [rend, setRend] = useState([]);

  const [Rend, setRend] = React.useState([]);
  console.log(Rend)

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
 //cancel
  const accredC= async (redID) => {
    const confirmed = window.confirm('Voulez-vous vraiment cancel Votre rendez_Vous ?');
    if (confirmed) {
      await editRendC (redID)
      var newRdv = Rend.filter((red) => {
        return red._id !== redID
      });
  
      window.location.reload();
      setRend(newRdv);
      console.log(newRdv);
      
  
    }}

  useEffect(() => {
    GetListRend();
  }, []);
  const GetListRend = async () => {


    await fetchRendP(userId)
      .then((res) => {
        setRend(res.data);
        console.log(res.data);
      });
  }
  // delete rendez vous 
  const delRend = async (_id) => {
    await deleteRend(_id)
    var newRend = Rend.filter((item) => {
      return item._id !== _id
    })
    setRend(newRend);
  }

  return (
    <>
      <TopPA />
      <div style={{ textAlign: 'center' }}>
        <br />
        <h1>  Liste Mes Rendez vous  </h1>   <br />  <br />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nom Médecin</StyledTableCell>
              {/* <StyledTableCell align="left">	Adresse Medecin</StyledTableCell> */}
              <StyledTableCell align="left">Num telephone</StyledTableCell>
              <StyledTableCell align="left"> Date/Heure </StyledTableCell>
              <StyledTableCell align="left">	Description </StyledTableCell>
              <StyledTableCell align="left">	Etat </StyledTableCell>
              <StyledTableCell align="left">	Cancel  </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Rend.map((red, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">Dr {red?.medecinID.firstName} {red?.medecinID.lastName}</StyledTableCell>
                {/* <StyledTableCell align="left">{red?.medecinID.adresse}</StyledTableCell> */}
                <StyledTableCell align="left">{red?.medecinID.phone}</StyledTableCell>
                <StyledTableCell align="left">{red?.Daterd}/{red?.timerd}</StyledTableCell>
                {/* <StyledTableCell align="left">{red?.etatrend}</StyledTableCell> */}
                <StyledTableCell align="left">{red?.Descrd}</StyledTableCell>
                <StyledTableCell align="left">
                  {renderEtat(red?.etatrend)}
                </StyledTableCell>
                <TableCell align="left">
                <IconButton onClick={
                  red.etatrend === 'en attente' ? () => accredC(red._id) : null}>
                    <DoDisturbAltIcon  sx={{ color: pink[500] }}  fontSize='large'/>
                  </IconButton>
{/* //delete */}
<IconButton onClick={() => {delRend(red._id) }}><DeleteIcon   fontSize='large' sx={{ color: pink[500] }} /></IconButton>

</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MesRend
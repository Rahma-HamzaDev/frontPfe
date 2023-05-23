import React, { useEffect, useState } from 'react'
import "./datails.css";
import { useNavigate, useParams } from 'react-router-dom';
import { fetchConsById, deleteCons} from '../../../../Services/ConsService';
import TopDoctor from '../../topbarD/TopDoctor';
//
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

//


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

      const printToPDF = () => {
        const input = document.getElementById('pdf-content');
        html2canvas(input).then((canvas) => {
            const pdf = new jsPDF();
            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('ConsultationPatient.pdf');
        });
    };
    return (
      <>
        <TopDoctor/>
     
        <div className='allD' >

          
            <br/>
            <div className='details'>
              <PictureAsPdfIcon fontSize='large' onClick={printToPDF} />
              <div className='details2'>
<div id='pdf-content'>

<div className="tiltle1">
                <h1>Details du consultation </h1>
            </div>
<br/>
                <h3 className='H33'>Date consulataion:<span>{cons?.DateCons}</span></h3> <br/>
                {/* <h3 className='H33' >NumCons:  {cons?._id}</h3> <br/> */}
                <h3 className='H33' >numFich : <span>{cons?.patientID.numfiche}  </span></h3> <br/>
                <h3 className='H33' >Identication du patient:  {cons?.patientID.cinPa}</h3> <br/>
                <h3 className='H33' >Nom & Prénom patient :<span>{cons?.patientID.nompatient} </span><span>{cons?.patientID.prenompatient} </span></h3>  <br/>
                <h3 className='H33' > Taille de patient :<span>{cons?.TaillePatient}</span></h3>  <br/>
                <h3 className='H33' >Poid de patient : <span>{cons?.PoisPatient}</span> </h3>  <br/>
                <h3 className='H33' > tension artérielle: <span>{cons?.tension} </span></h3>  <br/>
                <h3 className='H33' >Température :<span> {cons?.Température} </span></h3>  <br/>
               
                <h3 className='H33' >Description de resultat : </h3>
                <br/>
                <p className="examen">{cons?.DescriptionExamen}</p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default DetailsCons

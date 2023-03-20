import Api from "../Axios/Api";
const MEDECIN_API="/medecins"
export const fetchMedecin=async()=> {
return await Api.get(MEDECIN_API);
}
//
export const fetchMedecinById=async(medecinId)=> {
    return await Api.get(Medecin_API + '/' + medecinId);
    }
    export const deleteMedecin=async(medecinId) =>{
    return await Api.delete(Medecin_API + '/' + medecinId);
    }
    export  const addMedecin=async(medecin)=> {
    return await Api.post(""+Medecin_API, medecin);
    }
    export const editMedecin=(medecin) =>{
    return Api.put(Medecin_API + '/' + medecin.id, medecin);
    }


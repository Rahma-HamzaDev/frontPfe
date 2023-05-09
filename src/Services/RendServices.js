import Api from "../Axios/Api";
const REND_API = "/rends" ;

export const fetchRend = async () => {
    return await Api.get(REND_API);
}


export const addRend = async (rend) => {
    return await Api.post(REND_API, rend);

 }
//  export const editPatient = (patient) => {
//     return Api.put(PATIENT_API + '/' + patient._id, patient);
// }

//accepter
export const editRendA = (rendID) => {
    return Api.put(REND_API + '/accept/' +  rendID);
}
//refuser
export const editRendR = (rendID) => {
    return Api.put(REND_API + '/refuser/' +  rendID);
}

export const editRendC = (rendID) => {
    return Api.put(REND_API + '/cancel/' +  rendID);
}



// fetch Historique  les rendez vous de chaque patient 
export const fetchRendP = async (userId) => {
    console.log(userId);
    return await Api.get(REND_API+/user/+userId);
}
//fetch les rendez vous de chaque medecin

export const fetchRendM = async (medecinId) => {
    console.log(medecinId);
    return await Api.get(REND_API+/medecin/+medecinId);
}






//
export const fetchRendtById = async (rendId) => {
    return await Api.get(REND_API + '/' + rendId);
}


export const deleteRend= async (rendId) => {
    return await Api.delete(REND_API + '/' + rendId);
}




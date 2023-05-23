import Api from "../Axios/Api";
const DOSS_API = "/doss";
// 645560bbfc88491ef874dc4f
// export const fetchOrds = async (patientId) => {
//     console.log(patientId);
//     return await Api.get(DOSS_API+'/ords'+'/patients/'+patientId);
// }
// cons/patients/645560bbfc88491ef874dc4f

export const fetchconss = async (patientId) => {
    console.log(patientId);
    return await Api.get(DOSS_API+'/cons'+'/patients/'+patientId);
}

export const fetchords = async (consId) => {
    console.log(consId);
    return await Api.get(DOSS_API+'/cons/'+consId);
}

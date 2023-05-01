import Api from "../Axios/Api";
const ORD_API = "/cons";

export const fetchOrd = async (consId) => {
    console.log(consId);
    return await Api.get(ORD_API+/cons/+consId);
}

export const fetchOrdById = async (ordId) => {
    return await Api.get(ORD_API + '/' + ordId);
}

export const addOrd = async (ord) => {
    return await Api.post(ORD_API, ord);
 }

export const deleteOrd = async (ordId) => {
    return await Api.delete(ORD_API + '/' + ordId);
}

export const editOrd= (ord) => {
    return Api.put(ORD_API + '/' + ord._id, ord);
}


import Api from "../Axios/Api";
const REND_API = "/rends"
export const fetchRend = async () => {
    return await Api.get(REND_API);
}
//
export const fetchRendtById = async (rendId) => {
    return await Api.get(REND_API + '/' + rendId);
}

export const addRend = async (rend) => {
    return await Api.post("" + REND_API, rend);
}

export const deleteRend= async (rendId) => {
    return await Api.delete(REND_API + '/' + rendId);
}

export const editRend= (rend) => {
    return Api.put(REND_API + '/' + rend.id, rend);
}


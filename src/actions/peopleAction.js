import axios  from "axios";
import { TOTAL_PEOPLE_RESULT } from "./actionTypes";

const storePeopleList = (payload) =>({
    type: TOTAL_PEOPLE_RESULT,
    payload
})

export const getPeopleList = (dispatch, page = 1) => {
    return new Promise((resolve, reject) => {
        return axios.get(`https://swapi.dev/api/people/?page=${page}`).then((res) =>{
            dispatch(storePeopleList(res.data))
            resolve(res)
        }).catch(err => reject(err));
    });
        
}